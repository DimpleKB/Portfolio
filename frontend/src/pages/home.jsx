import React from "react";
import profilePic from '../profile pic.jpg';
import resume from "../resume/DimpleKB_resume.pdf";

function Home() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{ minHeight: "80vh", paddingBottom: "50px" }}>
      
      {/* Navbar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          borderBottom: "3px solid #e5e7eb",
          backgroundColor: "#f9fafb",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}
      >
        <h1
          style={{
            fontSize: "28px",
            fontWeight: "700",
            marginRight: "600px",
            marginLeft: "50px",
            color: "#1e3a8a", // Deep navy blue
          }}
        >
          Dimple KB
        </h1>

        {["education", "skills", "projects", "certificate", "achievements", "contact"].map((item) => (
          <p
            key={item}
            onClick={() => scrollToSection(item)}
            style={{
              marginLeft: "30px",
              fontSize: "16px",
              fontWeight: "500",
              cursor: "pointer",
              color: "#1e40af", // Medium blue
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.color = "#2563eb")} // Bright blue
            onMouseOut={(e) => (e.target.style.color = "#1e40af")}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </p>
        ))}
      </div>

      {/* Hero Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "40px 60px",
          borderRadius: "20px",
          background:"white", // Soft light blues
          boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
          marginTop: "200px",
        }}
      >
        {/* Text Content */}
        <div style={{ flex: 1, marginRight: "50px" }}>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: "700",
              marginBottom: "20px",
              color: "black",
            }}
          >
            Full-Stack Developer | BE CSE Student
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              color: "#334155", // Slate gray
            }}
          >
            I am a 5th semester Computer Science Engineering student with a solid foundation
            in front-end, back-end, and full-stack development. I build responsive, user-friendly
            web applications using React.js, Node.js, MongoDB, and SQLite. Passionate about learning
            new technologies and solving real-world problems.
          </p>
          <a
            href={resume}
            download="Dimple_KB_Resume.pdf"
            style={{
              display: "inline-block",
              marginTop: "20px",
              padding: "12px 24px",
              borderRadius: "12px",
              backgroundColor: "#2563eb",
              color: "#ffffff",
              fontWeight: "600",
              textDecoration: "none",
              transition: "background-color 0.3s, transform 0.2s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#1e40af")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#2563eb")}
          >
            📄 Download Resume
          </a>

        </div>

        {/* Profile Image */}
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <img
            src={profilePic}
            alt="Dimple KB"
            style={{
              width: "350px",
              height: "350px",
              borderRadius: "10%",
              objectFit: "cover",
              border: "5px solid #2563eb", // Accent blue border
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 15px 30px rgba(37,99,235,0.3)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)";
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
