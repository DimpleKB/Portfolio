import React from "react";
import Finai from "../proj_img/finai.webp";
import Nutri from "../proj_img/nutri.webp";
import Port from "../proj_img/port.jpg";
import Certificate from "./certificate";
function Projects() {
  const projects = [
    {
      title: "NutriSense – Full-Stack Web App",
      tech: "React.js, Node.js, MongoDB",
      img: Nutri,
      points: [
        "Developed a symptom-to-nutrient analysis tool for 50+ symptoms, improving diagnosis speed by 40%.",
        "Implemented optimized data structures reducing lookup time by 35% and ensured scalability for future features.",
        "Collaborated in a 3-member agile team, delivering all sprints on time.",
      ],
      github: "https://github.com/DimpleKB/Projects/tree/main/nutri",
      liveDemo: "https://7lvl71cq-5173.inc1.devtunnels.ms/",
    },
    {
      title: "AI Powered Finance Tracker – Full-Stack",
      tech: "React.js, Node.js, SQLite",
      img: Finai,
      points: [
        "Built responsive app for 100+ users to track daily income/expenses.",
        "Integrated AI-based speech-to-text and receipt scanning, cutting manual entry time by 50%.",
        "Developed dashboard visualizing spending trends for efficient budgeting.",
      ],
      github: "https://github.com/DimpleKB/finai",
      liveDemo: "https://frontend-1mk4.onrender.com/",
    },
    {
      title: "Portfolio Website – Frontend",
      tech: "React.js, Tailwind CSS",
      img: Port,
      points: [
        "Designed a personal portfolio showcasing projects, skills, and GitHub contributions.",
        "Ensured responsive design across devices, improving load time by 20%.",
      ],
      github: "https://github.com/yourusername/portfolio",
      liveDemo:"https://7lvl71cq-5173.inc1.devtunnels.ms/" ,
    },
  ];

  return (
    <div>
    <section
      id="projects"
      style={{
        padding: "80px 50px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          fontWeight: "700",
          marginBottom: "50px",
          textAlign: "center",
          color: "#111827",
        }}
      >
        Projects
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
        }}
      >
        {projects.map((project) => (
          <div
            key={project.title}
            style={{
              padding: "25px",
              borderRadius: "20px",
              backgroundColor: "white",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {/* Project Image */}
            {project.img && (
              <img
                src={project.img}
                alt={project.title}
                style={{
                  width: "100%",
                  borderRadius: "15px",
                  marginBottom: "15px",
                  objectFit: "cover",
                  maxHeight: "200px",
                }}
              />
            )}

            <div>
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "700",
                  color: "#137fec",
                  marginBottom: "10px",
                }}
              >
                {project.title}
              </h3>
              <p
                style={{
                  fontWeight: "500",
                  color: "#374151",
                  marginBottom: "15px",
                }}
              >
                {project.tech}
              </p>
              <ul style={{ paddingLeft: "20px", color: "#374151", lineHeight: "1.6" }}>
                {project.points.map((point, index) => (
                  <li key={index}>• {point}</li>
                ))}
              </ul>
            </div>

            <div style={{ marginTop: "20px", display: "flex", gap: "15px" }}>
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "10px 20px",
                    borderRadius: "12px",
                    backgroundColor: "#10b981",
                    color: "#ffffff",
                    fontWeight: "600",
                    textDecoration: "none",
                    textAlign: "center",
                    flex: 1,
                    transition: "background-color 0.3s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#059669")}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#10b981")}
                >
                  Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "10px 20px",
                    borderRadius: "12px",
                    backgroundColor: "#3b82f6",
                    color: "#ffffff",
                    fontWeight: "600",
                    textDecoration: "none",
                    textAlign: "center",
                    flex: 1,
                    transition: "background-color 0.3s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#3b82f6")}
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}

export default Projects;
