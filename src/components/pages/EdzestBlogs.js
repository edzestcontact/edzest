import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { animateScroll as scroll } from "react-scroll";
import { useNavigate } from "react-router-dom";
import parse from "html-react-parser";

const departments = [
  "All",
  "PMP Exam Tips",
  "People",
  "Process",
  "Business Environment",
  "Traditional",
  "Agile",
];

export default function Blocks() {
  const [dept, setDept] = useState("All");
  const [allPosts, setAllPosts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [detail, setDetail] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/blogs");
        const data = await res.json();
        setAllPosts(data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (dept === "All") {
      setFiltered(allPosts);
    } else {
      setFiltered(
        allPosts.filter(
          (p) => p.dept?.trim().toLowerCase() === dept.trim().toLowerCase()
        )
      );
    }
  }, [dept, allPosts]);

  const onCardClick = (post) => {
    setDetail(post);
    scroll.scrollTo(window.innerHeight);
  };

  return (
    <div style={styles.wrapper}>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes pulseBtn {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }

          .fade-in {
            animation: fadeIn 0.8s ease forwards;
          }

          .hover-card:hover {
            transform: scale(1.03);
            box-shadow: 0 8px 20px rgba(0,0,0,0.2);
          }

          .ctaBtnAnim:hover {
            animation: pulseBtn 0.6s ease-in-out;
          }

          img {
            max-width: 100%;
            height: auto;
          }

          video {
            width: 100%;
            max-height: 500px;
          }

          @media (max-width: 768px) {
            .blog-grid {
              grid-template-columns: 1fr !important;
            }

            .hero-title {
              font-size: 24px !important;
            }
          }
        `}
      </style>

      {/* Hero Section */}
      <div style={styles.hero}>
        <h1 className="hero-title" style={styles.heroTitle}>
          <Typewriter
            words={[
              "Blog for PMP® Certification Insights",
              "Latest PMP Trends & Tips",
              "Real Exam Experiences",
            ]}
            loop={true}
            cursor
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h1>
        <p style={styles.heroSub}>
          Stay updated with the latest trends, tips, and stories related to PMP
          certification.
        </p>
      </div>

      {/* Category Filter */}
      <nav style={styles.nav}>
        {departments.map((d) => (
          <button
            key={d}
            onClick={() => setDept(d)}
            style={dept === d ? styles.navActive : styles.navBtn}
          >
            {d}
          </button>
        ))}
      </nav>

      {/* Blog Grid */}
      <div className="blog-grid" style={styles.grid}>
        {filtered.length === 0 ? (
          <p style={{ textAlign: "center", width: "100%" }}>
            No blogs found in this department.
          </p>
        ) : (
          filtered.map((p) => (
            <div
              key={p._id}
              className="hover-card fade-in"
              style={styles.card}
              onClick={() => onCardClick(p)}
            >
              <img src={p.img} alt={p.title} style={styles.cardImg} />
              <div style={styles.cardContent}>
                <h3 style={styles.cardTitle}>{p.title}</h3>
                <div style={styles.cardDept}>{p.dept}</div>
                <p style={styles.cardAuthor}>By {p.author}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* CTA Banner */}
      <div style={styles.ctaBanner} className="fade-in">
        <h2 style={styles.glowText}>🔥 Join our Global Learning Community</h2>
        <p style={styles.ctaDescription}>
          10,000+ learners have already explored our blogs. Get access to
          exclusive insights and stay ahead.
        </p>
        <button
          style={styles.ctaBtn}
          className="ctaBtnAnim"
          onClick={() => navigate("/contact#contact-form")}
        >
          Join the Community
        </button>
      </div>

      {/* Blog Detail View */}
      {detail && (
        <div style={styles.detail}>
          <button onClick={() => setDetail(null)} style={styles.detailClose}>
            ← Back
          </button>
          <h2>{detail.title}</h2>
          <p>
            <i>By {detail.author}</i>
          </p>
          <img src={detail.img} alt={detail.title} style={styles.detailImg} />
          <div style={styles.detailContent}>{parse(detail.content)}</div>
        </div>
      )}
    </div>
  );
}

const styles = {
  wrapper: {
    fontFamily: "Segoe UI",
    background: "#f5f7fa",
    color: "#333",
    minHeight: "100vh",
  },
  hero: {
    padding: "80px 20px",
    textAlign: "center",
    background: "#4748ac",
    color: "#fff",
  },
  heroTitle: {
    fontSize: "36px",
    fontWeight: "bold",
  },
  heroSub: {
    maxWidth: 600,
    margin: "10px auto",
    fontSize: "18px",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "10px",
    padding: "20px",
  },
  navBtn: {
    background: "transparent",
    border: "2px solid #4748ac",
    padding: "8px 16px",
    cursor: "pointer",
    color: "#4748ac",
    borderRadius: "5px",
  },
  navActive: {
    background: "#4748ac",
    color: "#fff",
    borderRadius: "5px",
    padding: "8px 16px",
    border: "none",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "24px",
    maxWidth: "900px",
    margin: "0 auto",
    padding: "30px 20px",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    background: "#fff",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
    cursor: "pointer",
    transition: "transform 0.3s",
    width: "100%",
    maxWidth: "700px",
    margin: "0 auto",
    height: "180px",
  },
  cardImg: {
    width: "40%",
    height: "100%",
    objectFit: "contain", // Changed from 'cover'
    borderRadius: "12px 0 0 12px",
    backgroundColor: "#fff",
  },
  cardContent: {
    width: "60%",
    padding: "16px 20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  cardDept: {
    fontSize: "12px",
    color: "#999",
    textTransform: "uppercase",
    marginBottom: "4px",
  },
  cardTitle: {
    margin: "4px 0",
    fontSize: "18px",
    color: "#4748ac",
    fontWeight: "bold",
  },
  cardAuthor: {
    fontSize: "13px",
    color: "#444",
  },
  ctaBanner: {
    background: "#f1f1ff",
    textAlign: "center",
    padding: "60px 20px",
    margin: "40px 0",
    borderRadius: "8px",
  },
  glowText: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#4748ac",
  },
  ctaDescription: {
    fontSize: "16px",
    maxWidth: "600px",
    margin: "10px auto",
    color: "#333",
  },
  ctaBtn: {
    background: "#4748ac",
    color: "#fff",
    padding: "14px 32px",
    fontSize: "16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "20px",
  },
  detail: {
    maxWidth: "800px",
    margin: "40px auto",
    padding: "20px",
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  detailClose: {
    background: "transparent",
    border: "none",
    fontSize: "18px",
    cursor: "pointer",
    marginBottom: "10px",
  },
  detailImg: {
    maxWidth: "100%",
    margin: "20px 0",
  },
  detailContent: {
    fontSize: "16px",
    lineHeight: 1.6,
  },
};
