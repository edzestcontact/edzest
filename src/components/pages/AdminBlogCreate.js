
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL || 'http://localhost:5000';
const authHeader = () => {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

const AdminBlogCreate = () => {
  const editorRef = useRef(null);
  const floatingToolbarRef = useRef(null);
  const coverInputRef = useRef(null); // for triggering file picker

  const [title, setTitle] = useState('');
  const [coverImage, setCoverImage] = useState(null); // stores server URL after upload
  const [blogs, setBlogs] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [dept, setDept] = useState('');
  const [deptOptions] = useState([
    'PMP Exam Tips', 'People', 'Process', 'Business Environment', 'Traditional', 'Agile'
  ]);
  const [isOtherDept, setIsOtherDept] = useState(false);

  const [selectedFigure, setSelectedFigure] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);
  const [toolbarPos, setToolbarPos] = useState({ top: 0, left: 0 });

  const [panelOpen, setPanelOpen] = useState(false);
  const [placementMode, setPlacementMode] = useState('inline');
  const [imgWidthPct, setImgWidthPct] = useState(100);
  const [imgTop, setImgTop] = useState(0);
  const [imgLeft, setImgLeft] = useState(0);
  const [imgCaption, setImgCaption] = useState('');

  const [dragging, setDragging] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    fetchBlogs();

    const handleClickOutside = (e) => {
      if (
        floatingToolbarRef.current &&
        !floatingToolbarRef.current.contains(e.target) &&
        editorRef.current &&
        !editorRef.current.contains(e.target)
      ) {
        setSelectedFigure(null);
        setSelectedImg(null);
        setPanelOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);

    const handleEditorClick = (ev) => {
      if (!editorRef.current) return;

      if (ev.target && ev.target.tagName === 'IMG' && !ev.target.closest('figure[data-editable-image]')) {
        const newFig = wrapImageElement(ev.target);
        const imgInside = newFig.querySelector('img');
        if (imgInside) attachDragHandlers(newFig, imgInside);
      }

      let fig = ev.target.closest('figure[data-editable-image]');
      if (!fig || !editorRef.current.contains(fig)) return;

      const img = fig.querySelector('img');
      if (!img) return;

      setSelectedFigure(fig);
      setSelectedImg(img);
      setPanelOpen(true);

      const currentMode = fig.dataset.mode || 'inline';
      setPlacementMode(currentMode);

      const widthStr = (img.style.width || '100%').toString();
      const widthNow = parseInt(widthStr.replace('%', ''), 10);
      setImgWidthPct(Number.isFinite(widthNow) ? widthNow : 100);

      const topNow = parseInt((fig.style.top || '0px').replace('px', ''), 10);
      const leftNow = parseInt((fig.style.left || '0px').replace('px', ''), 10);
      setImgTop(Number.isFinite(topNow) ? topNow : 0);
      setImgLeft(Number.isFinite(leftNow) ? leftNow : 0);

      const cap = fig.querySelector('figcaption');
      setImgCaption(cap ? cap.textContent : '');

      const rect = img.getBoundingClientRect?.();
      if (rect) {
        setToolbarPos({
          top: rect.top + window.scrollY - 50,
          left: rect.left + rect.width / 2 - 100
        });
      }
    };

    const handleKeyDown = (e) => {
      if (!selectedFigure) return;
      if (placementMode !== 'free') return;

      const step = e.shiftKey ? 10 : 1;
      let changed = false;

      if (e.key === 'ArrowUp') { setImgTop(t => (changed = true, Math.max(0, t - step))); }
      if (e.key === 'ArrowDown') { setImgTop(t => (changed = true, t + step)); }
      if (e.key === 'ArrowLeft') { setImgLeft(l => (changed = true, Math.max(0, l - step))); }
      if (e.key === 'ArrowRight') { setImgLeft(l => (changed = true, l + step)); }

      if (changed) e.preventDefault();
    };

    editorRef.current?.addEventListener('click', handleEditorClick);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      editorRef.current?.removeEventListener('click', handleEditorClick);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [placementMode, selectedFigure]);

  useEffect(() => {
    if (selectedFigure && placementMode === 'free') {
      selectedFigure.style.top = `${imgTop}px`;
      selectedFigure.style.left = `${imgLeft}px`;
    }
  }, [imgTop, imgLeft, placementMode, selectedFigure]);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(`${API}/api/blogs`);
      setBlogs(res.data.map(blog => ({ ...blog, showOptions: false })));
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
  };

  // ===== Formatting =====
  const format = (cmd, val = null) => {
    const editor = editorRef.current;
    if (!editor) return;

    editor.focus();

    const sel = window.getSelection();
    if (sel && sel.rangeCount > 0) {
      const node = sel.anchorNode;
      if (node && !editor.contains(node)) {
        const range = document.createRange();
        range.selectNodeContents(editor);
        range.collapse(false);
        sel.removeAllRanges();
        sel.addRange(range);
      }
    } else {
      const range = document.createRange();
      range.selectNodeContents(editor);
      range.collapse(false);
      const sel2 = window.getSelection();
      sel2.removeAllRanges();
      sel2.addRange(range);
    }

    if (cmd === "formatBlock" && val) {
      const tag = val.replace(/[<>]/g, "").toUpperCase();
      const chromeVal = `<${tag}>`;
      document.execCommand("formatBlock", false, chromeVal);
      return;
    }
    document.execCommand(cmd, false, val);
  };

  const insertDivider = () => {
    const div = document.createElement("hr");
    editorRef.current.appendChild(div);
  };

  const insertCodeBlock = () => {
    const pre = document.createElement("pre");
    pre.textContent = "// Write your code here";
    pre.style.background = "#2d2f36";
    pre.style.color = "#fff";
    pre.style.padding = "10px";
    pre.style.borderRadius = "6px";
    editorRef.current.appendChild(pre);
  };

  // ===== Cover upload (stores file on backend, returns absolute URL) =====
  const handleCoverUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post(
        `${API}/api/blogs/upload-image`,
        formData,
        { headers: { "Content-Type": "multipart/form-data", ...authHeader() } }
      );
      // This URL should be something like http://host/uploads/filename.jpg
      setCoverImage(res.data.imageUrl);
    } catch (err) {
      console.error("Image upload failed:", err?.response?.data || err.message);
      alert("Failed to upload image");
    } finally {
      // allow selecting same file again
      e.target.value = '';
    }
  };

  // ===== Inline image helpers =====
  const wrapImageElement = (imgEl, filename = '') => {
    const fig = document.createElement('figure');
    fig.setAttribute('data-editable-image', 'true');
    fig.style.margin = '16px auto';
    fig.style.maxWidth = '100%';
    fig.style.display = 'block';
    fig.style.position = 'relative';

    imgEl.style.maxWidth = '100%';
    imgEl.style.width = imgEl.style.width || '100%';
    imgEl.style.display = 'block';
    imgEl.style.margin = '0 auto';
    imgEl.style.cursor = 'pointer';

    const cap = document.createElement('figcaption');
    cap.textContent = filename || (imgEl.getAttribute('alt') || '');
    cap.contentEditable = 'true';
    cap.style.fontSize = '13px';
    cap.style.color = '#6b7280';
    cap.style.textAlign = 'center';
    cap.style.marginTop = '6px';

    const parent = imgEl.parentNode;
    parent.insertBefore(fig, imgEl);
    fig.appendChild(imgEl);
    fig.appendChild(cap);

    fig.dataset.mode = 'inline';
    return fig;
  };

  const normalizeEditorImages = () => {
    if (!editorRef.current) return;
    const imgs = editorRef.current.querySelectorAll('img');
    imgs.forEach((img) => {
      const fig = img.closest('figure[data-editable-image]');
      if (!fig) {
        const newFig = wrapImageElement(img);
        const innerImg = newFig.querySelector('img');
        if (innerImg) attachDragHandlers(newFig, innerImg);
      }
    });
  };

  const attachDragHandlers = (fig, img) => {
    const onMouseDown = (e) => {
      if (fig.dataset.mode !== 'free') return;
      setDragging(true);
      const figRect = fig.getBoundingClientRect();
      dragOffset.current = { x: e.clientX - figRect.left, y: e.clientY - figRect.top };
      e.preventDefault();
    };
    const onMouseMove = (e) => {
      if (!dragging || fig.dataset.mode !== 'free') return;
      const editorRect = editorRef.current.getBoundingClientRect();
      let newLeft = e.clientX - editorRect.left - dragOffset.current.x;
      let newTop = e.clientY - editorRect.top - dragOffset.current.y;

      newLeft = Math.max(0, Math.min(newLeft, editorRect.width - fig.offsetWidth));
      newTop = Math.max(0, Math.min(newTop, editorRect.height - fig.offsetHeight));

      fig.style.left = `${newLeft}px`;
      fig.style.top = `${newTop}px`;

      setImgLeft(newLeft);
      setImgTop(newTop);
    };
    const onMouseUp = () => setDragging(false);

    img.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    fig.addEventListener('DOMNodeRemoved', () => {
      img.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    });
  };

  const createFigure = (src, filename = '') => {
    const fig = document.createElement('figure');
    fig.setAttribute('data-editable-image', 'true');
    fig.style.margin = '16px auto';
    fig.style.maxWidth = '100%';
    fig.style.display = 'block';
    fig.style.position = 'relative';
    fig.style.cursor = 'default';

    const img = document.createElement('img');
    img.src = src;
    img.style.maxWidth = '100%';
    img.style.width = '100%';
    img.style.display = 'block';
    img.style.margin = '0 auto';
    img.style.cursor = 'pointer';

    const cap = document.createElement('figcaption');
    cap.textContent = filename || '';
    cap.contentEditable = 'true';
    cap.style.fontSize = '13px';
    cap.style.color = '#6b7280';
    cap.style.textAlign = 'center';
    cap.style.marginTop = '6px';

    fig.appendChild(img);
    fig.appendChild(cap);

    fig.dataset.mode = 'inline';
    attachDragHandlers(fig, img);
    return fig;
  };

  const handleLocalImageInsert = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post(`${API}/api/blogs/upload-image`, formData, {
        headers: { "Content-Type": "multipart/form-data", ...authHeader() }
      });
      const fig = createFigure(res.data.imageUrl, file.name.replace(/\.[^/.]+$/, ''));
      editorRef.current.appendChild(fig);

      setSelectedFigure(fig);
      setSelectedImg(fig.querySelector('img'));
      setImgCaption(fig.querySelector('figcaption').textContent);
      setPanelOpen(true);
      setPlacementMode('inline');
    } catch (err) {
      console.error("Image insert failed:", err?.response?.data || err.message);
      alert("Failed to insert image");
    } finally {
      e.target.value = '';
    }
  };

  const handleAlign = (pos) => {
    if (!selectedImg || placementMode !== 'inline') return;
    if (pos === "left") selectedImg.style.margin = "0 auto 0 0";
    else if (pos === "right") selectedImg.style.margin = "0 0 0 auto";
    else selectedImg.style.margin = "0 auto";
  };

  const handleResize = (value) => {
    if (!selectedImg) return;
    const pct = parseInt(value, 10);
    selectedImg.style.width = `${pct}%`;
    setImgWidthPct(pct);
  };

  const handleDeleteImage = () => {
    if (selectedFigure) {
      selectedFigure.remove();
      setSelectedFigure(null);
      setSelectedImg(null);
      setPanelOpen(false);
    }
  };

  const switchMode = (mode) => {
    if (!selectedFigure) return;
    selectedFigure.dataset.mode = mode;
    setPlacementMode(mode);

    if (mode === 'inline') {
      selectedFigure.style.position = 'relative';
      selectedFigure.style.left = '0px';
      selectedFigure.style.top = '0px';
      setImgLeft(0);
      setImgTop(0);
      if (editorRef.current) editorRef.current.style.position = 'relative';
    } else {
      if (editorRef.current) editorRef.current.style.position = 'relative';
      selectedFigure.style.position = 'absolute';
      selectedFigure.style.left = `${imgLeft}px`;
      selectedFigure.style.top = `${imgTop}px`;
    }
  };

  const applyCaption = () => {
    if (!selectedFigure) return;
    const cap = selectedFigure.querySelector('figcaption');
    if (cap) cap.textContent = imgCaption;
  };

  const resetForm = () => {
    setTitle('');
    setCoverImage(null);
    setEditingId(null);
    setDept('');
    setIsOtherDept(false);
    if (editorRef.current) editorRef.current.innerHTML = '';
    setSelectedFigure(null);
    setSelectedImg(null);
    setPanelOpen(false);
  };

  const handleSubmit = async () => {
    const content = editorRef.current?.innerHTML || '';
    const token = localStorage.getItem("token");

    if (!title || !content || !dept) {
      alert("Please fill title, department, and content");
      return;
    }
    if (!coverImage) {
      alert("Please upload a cover image first.");
      return;
    }

    try {
      const blogPayload = {
        title,
        content,
        author: "Amit Kumar Chandan",
        dept,
        img: coverImage // this is the server URL returned from /upload-image
      };

      if (editingId) {
        await axios.put(`${API}/api/blogs/${editingId}`, blogPayload, {
          headers: { Authorization: `Bearer ${token}` }
        });
        alert("✅ Blog updated!");
      } else {
        await axios.post(`${API}/api/blogs/create`, blogPayload, {
          headers: { Authorization: `Bearer ${token}` }
        });
        alert("✅ Blog published!");
      }

      resetForm();
      fetchBlogs();
    } catch (err) {
      console.error(err?.response?.data || err.message);
      alert("❌ Blog submission failed");
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${API}/api/blogs/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchBlogs();
    } catch (err) {
      console.error("Delete failed:", err?.response?.data || err.message);
    }
  };

  const handleEdit = (blog) => {
    setTitle(blog.title);
    setCoverImage(blog.img);
    setDept(blog.dept);
    setIsOtherDept(!deptOptions.includes(blog.dept));
    setEditingId(blog._id);
    setTimeout(() => {
      if (editorRef.current) {
        editorRef.current.innerHTML = blog.content || '';
        normalizeEditorImages();
        editorRef.current.querySelectorAll('figure[data-editable-image]').forEach((fig) => {
          const img = fig.querySelector('img');
          if (img) attachDragHandlers(fig, img);
        });
      }
    }, 0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentToolbar = (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "8px",
        borderBottom: "1px solid #ddd",
        backgroundColor: "#f8f8f8"
      }}
    >
      <select
        onChange={(e) => format("formatBlock", e.target.value)}
        style={{
          padding: "6px 8px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          color: "black",
          fontWeight: "bold",
          cursor: "pointer",
          backgroundColor: "white",
          marginTop:"20px",
        }}
      >
        <option value="P">Style</option>
        <option value="H1">Heading</option>
        <option value="H2">Subheading</option>
        <option value="H3">Small Heading</option>
      </select>

      {[
        { label: "B", action: () => format("bold") },
        { label: <i>I</i>, action: () => format("italic") },
        { label: "•", action: () => format("insertUnorderedList") },
        { label: "1.", action: () => format("insertOrderedList") },
        { label: '"', action: () => format("formatBlock", "BLOCKQUOTE") },
        { label: "{ }", action: insertCodeBlock },
        { label: "—", action: insertDivider },
        {
          label: "🔗",
          action: () => {
            const url = prompt("Enter link:");
            if (url) format("createLink", url);
          }
        },
        {
          label: "🖼",
          action: () => {
            const url = prompt("Enter image URL:");
            if (url) {
              const fig = createFigure(url, "");
              editorRef.current.appendChild(fig);
            }
          }
        }
      ].map((btn, i) => (
        <button
          key={i}
          onClick={btn.action}
          style={{
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: "6px",
            padding: "6px 10px",
            cursor: "pointer",
            color: "black",
            fontWeight: "bold",
            transition: "all 0.2s ease"
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#eee";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "#fff";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          {btn.label}
        </button>
      ))}

      <label
        style={{
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          borderRadius: "6px",
          padding: "6px 10px",
          cursor: "pointer",
          color: "black",
          fontWeight: "bold",
          transition: "all 0.2s ease",
          marginTop:"20px",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "#eee";
          e.currentTarget.style.transform = "scale(1.05)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "#fff";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        ⬆ Upload Image
        <input
          type="file"
          accept="image/*"
          onChange={handleLocalImageInsert}
          style={{ display: "none" }}
        />
      </label>
    </div>
  );

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {currentToolbar}

        {/* Cover area */}
        <div style={styles.coverWrap}>
          {coverImage ? (
            <>
              <img src={coverImage} alt="cover" style={styles.coverImg} />
              <div style={{ display: 'flex', gap: 8, marginTop: 10, justifyContent: 'center' }}>
                <button
                  style={styles.smallBtn}
                  onClick={() => coverInputRef.current?.click()}
                >
                  ✏️ Change Cover
                </button>
                <button
                  style={styles.smallDanger}
                  onClick={() => setCoverImage(null)}
                >
                  🗑 Remove
                </button>
              </div>
            </>
          ) : (
            <div
              style={styles.coverEmpty}
              onClick={() => coverInputRef.current?.click()}
              role="button"
              tabIndex={0}
              onKeyDown={(e)=>{ if(e.key==='Enter') coverInputRef.current?.click(); }}
            >
              <div style={styles.coverIcon} />
              <div style={styles.coverText}>Add a cover image or video to your article.</div>
              <div style={{ ...styles.smallBtn, marginTop: 6 }}>Upload Cover</div>
            </div>
          )}

          {/* Hidden input used for both first upload and change */}
          <input
            ref={coverInputRef}
            type="file"
            accept="image/*"
            onChange={handleCoverUpload}
            style={{ display: 'none' }}
          />
        </div>

        {/* Title */}
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={styles.titleInput}
        />
        <div style={styles.subtitle}>Write here. You can also include @mentions.</div>

        {/* Department */}
        <div style={styles.deptRow}>
          <label style={styles.deptLabel}>Department</label>
          <select
            value={isOtherDept ? "Other" : dept}
            onChange={(e) => {
              const value = e.target.value;
              if (value === "Other") {
                setIsOtherDept(true);
                setDept('');
              } else {
                setIsOtherDept(false);
                setDept(value);
              }
            }}
            style={styles.deptSelect}
          >
            <option value="">— Select —</option>
            {deptOptions.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>

        {isOtherDept && (
          <input
            type="text"
            placeholder="Enter custom department"
            value={dept}
            onChange={(e) => setDept(e.target.value)}
            style={styles.customDept}
          />
        )}

        {/* Floating mini-toolbar */}
        {selectedImg && (
          <div
            ref={floatingToolbarRef}
            style={{
              ...styles.floatTools,
              top: `${toolbarPos.top}px`,
              left: `${toolbarPos.left}px`
            }}
          >
            <button style={styles.floatBtn} onClick={() => handleAlign("left")} disabled={placementMode !== 'inline'} title="Align Left">⬅</button>
            <button style={styles.floatBtn} onClick={() => handleAlign("center")} disabled={placementMode !== 'inline'} title="Align Center">⦿</button>
            <button style={styles.floatBtn} onClick={() => handleAlign("right")} disabled={placementMode !== 'inline'} title="Align Right">➡</button>
            <input
              type="range"
              min="10"
              max="100"
              value={imgWidthPct}
              onChange={(e) => handleResize(e.target.value)}
              title="Resize"
              style={styles.range}
            />
            <button
              onClick={handleDeleteImage}
              style={styles.deleteChip}
              title="Delete"
            >
              🗑
            </button>
          </div>
        )}

        {/* Editor */}
        <div
          ref={editorRef}
          contentEditable
          suppressContentEditableWarning
          style={styles.editor}
          onInput={normalizeEditorImages}
        />

        {/* Action buttons */}
        <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
          {editingId && (
            <button onClick={resetForm} style={styles.secondary}>
              ✖ Cancel Edit
            </button>
          )}
          <button onClick={handleSubmit} style={styles.primary}>
            {editingId ? "✅ Update Blog" : "📢 Publish Blog"}
          </button>
        </div>

        {/* Blog list */}
        <h3 style={{ marginTop: 32, marginBottom: 12 }}>Published Blogs</h3>
        <div style={styles.list}>
          {blogs.length === 0 && (
            <div style={{ color: '#666', fontStyle: 'italic' }}>No blogs yet.</div>
          )}
          {blogs.map(b => (
            <div key={b._id} style={styles.card}>
              <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                {b.img ? (
                  <img
                    src={b.img}
                    alt=""
                    style={{ width: 72, height: 48, objectFit: 'cover', borderRadius: 6, flexShrink: 0 }}
                  />
                ) : (
                  <div style={{ width: 72, height: 48, background: '#f0f0f0', borderRadius: 6 }} />
                )}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 700 }}>{b.title || 'Untitled'}</div>
                  <div style={{ color: '#666', fontSize: 12 }}>
                    {b.dept || '—'}{b.createdAt ? ` • ${new Date(b.createdAt).toLocaleDateString()}` : ''}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 8 }}>
                <button
                  style={styles.smallBtn}
                  onClick={() => handleEdit(b)}
                  title="Edit"
                >
                  ✏️ Edit
                </button>
                <button
                  style={styles.smallDanger}
                  onClick={() => {
                    if (window.confirm('Delete this blog?')) handleDelete(b._id);
                  }}
                  title="Delete"
                >
                  🗑 Delete
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

/* ===== Styles ===== */
const styles = {
  page: {
    background: '#fff',
    minHeight: '100vh',
    paddingBottom: 80
  },
  container: {
    maxWidth: 900,
    margin: '0 auto',
    padding: '16px 24px'
  },

  coverWrap: {
    borderRadius: 6,
    border: '1px solid #e6e6e6',
    background: '#f3f2ee',
    padding: 28
  },
  coverImg: {
    width: '100%',
    borderRadius: 6
  },
  coverEmpty: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 14,
    cursor: 'pointer',
    color: '#3b3b3b'
  },
  coverIcon: {
    width: 56,
    height: 56,
    background: 'url("https://cdn-icons-png.flaticon.com/512/337/337946.png") center/contain no-repeat',
    opacity: .7
  },
  coverText: {
    color: '#666',
    fontSize: 15
  },

  titleInput: {
    width: '100%',
    border: 'none',
    outline: 'none',
    padding: '28px 0 6px',
    fontSize: 40,
    fontWeight: 700,
    color: '#444'
  },
  subtitle: {
    color: '#8a8a8a',
    marginBottom: 14
  },

  deptRow: { display: 'flex', gap: 12, alignItems: 'center', margin: '6px 0 18px' },
  deptLabel: { color: '#666', fontSize: 14 },
  deptSelect: {
    padding: '10px 12px',
    borderRadius: 8,
    border: '1px solid #e6e6e6',
    background: '#fff'
  },
  customDept: {
    width: '100%',
    padding: '10px 12px',
    borderRadius: 8,
    border: '1px solid #e6e6e6',
    background: '#fff',
    marginTop: 8
  },

  editor: {
    minHeight: 420,
    border: '1px solid #e6e6e6',
    borderRadius: 6,
    padding: 16,
    background: '#fff',
    fontSize: 16,
    color: '#333',
    lineHeight: 1.6,
    marginTop: 8,
    position: 'relative',
    overflow: 'hidden'
  },

  /* Buttons */
  primary: {
    padding: '10px 14px',
    fontSize: 15,
    fontWeight: 700,
    background: '#111',
    color: '#fff',
    border: 'none',
    borderRadius: 10,
    cursor: 'pointer'
  },
  secondary: {
    padding: '10px 14px',
    fontSize: 15,
    fontWeight: 700,
    background: '#f6f6f6',
    color: '#111',
    border: '1px solid #e6e6e6',
    borderRadius: 10,
    cursor: 'pointer'
  },
  smallBtn: {
    padding: '8px 10px',
    fontSize: 13,
    fontWeight: 700,
    background: '#fff',
    color: '#111',
    border: '1px solid #e6e6e6',
    borderRadius: 8,
    cursor: 'pointer'
  },
  smallDanger: {
    padding: '8px 10px',
    fontSize: 13,
    fontWeight: 700,
    background: '#fff5f5',
    color: '#b91c1c',
    border: '1px solid #fecaca',
    borderRadius: 8,
    cursor: 'pointer'
  },

  /* Floating tools */
  floatTools: {
    position: 'absolute',
    background: '#fff',
    border: '1px solid #e6e6e6',
    borderRadius: 999,
    padding: 6,
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    zIndex: 20,
    boxShadow: '0 6px 18px rgba(0,0,0,.06)'
  },
  floatBtn: {
    border: 'none',
    background: '#f6f6f6',
    borderRadius: 999,
    padding: '6px 10px',
    cursor: 'pointer'
  },
  deleteChip: {
    border: 'none',
    background: '#fef2f2',
    color: '#b91c1c',
    borderRadius: 999,
    padding: '6px 10px',
    cursor: 'pointer',
    fontWeight: 700
  },
  range: { accentColor: '#111' },

  /* Side panel (unchanged) */
  sidePanel: {
    position: 'fixed',
    right: 24,
    top: 24,
    width: 320,
    maxHeight: 'calc(100vh - 48px)',
    overflow: 'auto',
    background: '#fff',
    border: '1px solid #e6e6e6',
    borderRadius: 12,
    boxShadow: '0 18px 50px rgba(0,0,0,.12)',
    padding: 14,
    zIndex: 50
  },sideHeader: {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontWeight: 700,
  marginBottom: 8,
},
sideClose: {
  border: 'none',
  background: '#f6f6f6',
  borderRadius: 8,
  padding: '6px 10px',
  cursor: 'pointer',
},
sideBlock: {
  padding: '10px 0',
  borderTop: '1px solid #eee',
},
sideLabel: {
  color: '#666',
  fontSize: 12,
  textTransform: 'uppercase',
  letterSpacing: '.06em',
  marginBottom: 6,
},
chip: {
  border: '1px solid #e6e6e6',
  background: '#fff',
  padding: '8px 12px',
  borderRadius: 999,
  cursor: 'pointer',
  fontWeight: 600,
},
// chipActive: {
//    border: '1px solid '#111',
//   background: '#111',
//   color: '#fff',
//   padding: '8px 12px',
//   borderRadius: 999,
//   cursor: 'pointer',
//   fontWeight: 700,
// },
help: {
  color: '#888',
  fontSize: 12,
  marginTop: 6,
},
xy: {
  fontSize: 12,
  color: '#666',
  marginBottom: 4,
},

num: {
  width: '100%',
  padding: '8px 10px',
  borderRadius: 8,
  border: '1px solid #e6e6e6',
  background: '#fff',
},
rangeFull: {
  width: '100%',
  accentColor: '#111',
},
caption: {
  width: '100%',
  padding: '10px 12px',
  border: '1px solid #e6e6e6',
  borderRadius: 8,
  background: '#fff',
},
applyBtn: {
  border: 'none',
  background: '#111',
  color: '#fff',
  padding: '10px 12px',
  borderRadius: 10,
  fontWeight: 700,
  cursor: 'pointer',
  marginTop: 8,
},
danger: {
  width: '100%',
  border: '1px solid #ef4444',
  color: '#ef4444',
  background: '#fff',
  padding: '10px 12px',
  borderRadius: 10,
  fontWeight: 700,
},

  /* Blog list */
  list: { display: 'grid', gap: 10 },
  card: {
    border: '1px solid #eee',
    borderRadius: 10,
    padding: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12
  }
};

export default AdminBlogCreate;
