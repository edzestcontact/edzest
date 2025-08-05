import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const AdminBlogCreate = () => {
  const editorRef = useRef(null);
  const [title, setTitle] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [dept, setDept] = useState('');
  const [deptOptions, setDeptOptions] = useState(['PMP Exam Tips', 'People', 'Process', 'Business Environment', 'Traditional', 'Agile']);
  const [isOtherDept, setIsOtherDept] = useState(false);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/blogs");
      setBlogs(res.data.map(blog => ({ ...blog, showOptions: false })));
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
  };

  const format = (cmd, val = null) => {
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

  const handleCoverUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post("http://localhost:5000/api/blogs/upload-image", formData);
      setCoverImage(res.data.imageUrl);
    } catch (err) {
      console.error("Image upload failed:", err);
      alert("Failed to upload image");
    }
  };

  const handleSubmit = async () => {
    const content = editorRef.current.innerHTML;
    const token = localStorage.getItem("token");

    if (!title || !content || !dept) {
      alert("Please fill title, department, and content");
      return;
    }

    try {
      const blogPayload = {
        title,
        content,
        author: "Amit Kumar Chandan",
        dept,
        img: coverImage
      };

      if (editingId) {
        await axios.put(`http://localhost:5000/api/blogs/${editingId}`, blogPayload, {
          headers: { Authorization: `Bearer ${token}` }
        });
        alert("✅ Blog updated!");
      } else {
        await axios.post("http://localhost:5000/api/blogs/create", blogPayload, {
          headers: { Authorization: `Bearer ${token}` }
        });
        alert("✅ Blog published!");
      }

      setTitle('');
      setCoverImage(null);
      setEditingId(null);
      setDept('');
      setIsOtherDept(false);
      editorRef.current.innerHTML = '';
      fetchBlogs();
    } catch (err) {
      console.error(err);
      alert("❌ Blog submission failed");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/blogs/${id}`);
      fetchBlogs();
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  const handleEdit = (blog) => {
    setTitle(blog.title);
    setCoverImage(blog.img);
    setDept(blog.dept);
    setIsOtherDept(!deptOptions.includes(blog.dept));
    setEditingId(blog._id);
    setTimeout(() => {
      editorRef.current.innerHTML = blog.content;
    }, 0);
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <h2 style={styles.heading}>
          {editingId ? "✏️ Edit Blog" : "📝 Create Blog"}
        </h2>

        <input
          type="text"
          placeholder="Enter blog title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={styles.titleInput}
        />

        {/* Department Dropdown */}
        <div style={styles.deptContainer}>
          <label style={{ marginRight: '10px' }}>Select Department:</label>
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
            style={styles.select}
          >
            <option value="">-- Select --</option>
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
            style={styles.titleInput}
          />
        )}

        {/* Cover Image Upload */}
        <div style={styles.coverBox}>
          {coverImage ? (
            <img src={coverImage} alt="cover" style={{ width: "100%", borderRadius: "8px" }} />
          ) : (
            <label style={styles.coverLabel}>
              <input type="file" onChange={handleCoverUpload} style={{ display: 'none' }} />
              <img src="https://cdn-icons-png.flaticon.com/512/3039/3039433.png" alt="upload" width="50" />
              <p>Add a cover image or video to your article.</p>
              <button style={styles.uploadBtn}>Upload from computer</button>
            </label>
          )}
        </div>

        {/* Toolbar */}
        <div style={styles.toolbar}>
          <select onChange={(e) => format('formatBlock', e.target.value)} style={styles.select}>
            <option value="P">Normal</option>
            <option value="H1">Heading</option>
            <option value="H3">Subheading</option>
          </select>
          <button onClick={() => format('bold')}><b>B</b></button>
          <button onClick={() => format('italic')}><i>I</i></button>
          <button onClick={() => format('insertUnorderedList')}>• List</button>
          <button onClick={() => format('insertOrderedList')}>1. List</button>
          <button onClick={() => format('formatBlock', 'BLOCKQUOTE')}>" Quote</button>
          <button onClick={insertCodeBlock}>{'{ }'}</button>
          <button onClick={insertDivider}>─ Divider</button>
          <button onClick={() => {
            const url = prompt("Enter link:");
            if (url) format("createLink", url);
          }}>🔗</button>
          <button onClick={() => {
            const url = prompt("Enter image URL:");
            if (url) format("insertImage", url);
          }}>🖼</button>
        </div>

        {/* Editor */}
        <div
          ref={editorRef}
          contentEditable
          onPaste={(e) => {
            e.preventDefault();
            const pasted = e.clipboardData.getData("text/html") || e.clipboardData.getData("text/plain");
            document.execCommand("insertHTML", false, pasted);
          }}
          style={styles.editor}
        ></div>

        <button onClick={handleSubmit} style={styles.publishBtn}>
          {editingId ? "✅ Update Blog" : "📢 Publish Blog"}
        </button>
      </div>

      {/* Blog List */}
      <div style={styles.blogList}>
        <h3>🗂 Your Blogs</h3>
        {blogs.map((blog) => (
          <div key={blog._id} style={styles.blogItem}>
            <div>
              <h4>{blog.title}</h4>
              <p style={{ color: "#777" }}>Dept: {blog.dept}</p>
            </div>
            <div style={{ position: 'relative' }}>
              <button
                style={{ background: 'transparent', border: 'none', fontSize: '20px', cursor: 'pointer', color: 'black' }}
                onClick={() =>
                  setBlogs((prev) =>
                    prev.map((b) =>
                      b._id === blog._id
                        ? { ...b, showOptions: !b.showOptions }
                        : { ...b, showOptions: false }
                    )
                  )
                }
              >
                ⋮
              </button>
              {blog.showOptions && (
                <div
                  style={{
                    position: 'absolute',
                    right: 0,
                    top: '30px',
                    background: '#fff',
                    boxShadow: '0 0 8px rgba(0,0,0,0.1)',
                    borderRadius: '6px',
                    zIndex: 1000
                  }}
                >
                  <button
                    onClick={() => handleEdit(blog)}
                    style={{ ...styles.actionBtn, width: '100%', borderRadius: '0', background: '#0275d8' }}
                  >
                    ✏️ Edit
                  </button>
                  <button
                    onClick={() => handleDelete(blog._id)}
                    style={{ ...styles.actionBtn, width: '100%', borderRadius: '0', background: '#d9534f' }}
                  >
                    🗑 Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: '#f5f6fb',
    minHeight: '100vh',
    padding: '50px 0',
    fontFamily: 'Segoe UI, sans-serif'
  },
  wrapper: {
    width: '90%',
    maxWidth: '850px',
    margin: 'auto',
    background: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 0 25px rgba(0,0,0,0.08)',
    marginBottom: '40px'
  },
  heading: {
    textAlign: 'center',
    color: '#4748ac',
    marginBottom: '20px'
  },
  titleInput: {
    fontSize: '18px',
    padding: '10px',
    width: '100%',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    outline: 'none',
  },
  deptContainer: {
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center'
  },
  coverBox: {
    border: '2px dashed #ccc',
    padding: '30px',
    textAlign: 'center',
    marginBottom: '25px',
    borderRadius: '10px'
  },
  coverLabel: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer'
  },
  uploadBtn: {
    marginTop: '10px',
    padding: '8px 16px',
    background: '#4748ac',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  },
  toolbar: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '15px'
  },
  select: {
    padding: '5px 10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    background: '#fff'
  },
  editor: {
    minHeight: '300px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    padding: '15px',
    fontSize: '16px',
    outline: 'none',
    background: '#fafafa'
  },
  publishBtn: {
    marginTop: '20px',
    width: '100%',
    padding: '12px',
    fontSize: '18px',
    background: '#4748ac',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  },
  blogList: {
    width: '90%',
    maxWidth: '850px',
    margin: 'auto',
    padding: '20px',
    background: '#fff',
    borderRadius: '10px',
    boxShadow: '0 0 15px rgba(0,0,0,0.08)'
  },
  blogItem: {
    borderBottom: '1px solid #eee',
    padding: '10px 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  actionBtn: {
    padding: '8px',
    background: '#5cb85c',
    color: '#fff',
    border: 'none',
    borderRadius: '0',
    cursor: 'pointer'
  }
};

export default AdminBlogCreate;
