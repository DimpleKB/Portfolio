import React from "react";
import Projects from "./projects";
function Skills() {
  const skillsCategories = [
    {
      category: "Languages",
      skills: [
        { name: "C++", level: "Advanced" },
        { name: "Python", level: "Intermediate" },
        { name: "JavaScript", level: "Intermediate" },
        { name: "HTML/CSS", level: "Intermediate" },
        { name: "SQL", level: "Intermediate" },
      ],
    },
    {
      category: "Frontend",
      skills: [
        { name: "React.js", level: "Intermediate" },
        { name: "Tailwind CSS", level: "Intermediate" },
        { name: "UI/UX Basics", level: "Beginner" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: "Intermediate" },
        { name: "Express.js", level: "Intermediate" },
        { name: "REST APIs", level: "Intermediate" },
        { name: "MongoDB", level: "Intermediate" },
        { name: "SQLite", level: "Intermediate" },
      ],
    },
    {
      category: "Tools/Platforms",
      skills: [
        { name: "Git", level: "Intermediate" },
        { name: "GitHub", level: "Intermediate" },
        { name: "Postman", level: "Intermediate" },
        { name: "VS Code", level: "Intermediate" },
        { name: "Figma", level: "Beginner" },
      ],
    },
    {
      category: "Core CS Concepts",
      skills: [
        { name: "Data Structures & Algorithms", level: "Intermediate" },
        { name: "OOP", level: "Intermediate" },
        { name: "Operating Systems", level: "Intermediate" },
        { name: "DBMS", level: "Intermediate" },
        { name: "Networking Basics", level: "Beginner" },
      ],
    },
  ];

  const levelToProgress = {
    Beginner: 40,
    Intermediate: 70,
    Advanced: 100,
  };

  return (
    <div>
    <section
      id="skills"
      style={{
        padding: "80px 50px",
        maxWidth: "1200px",
        margin: "40px auto",
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
        Skills
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
        }}
      >
        {skillsCategories.map((category) => (
          <div
            key={category.category}
            style={{
              padding: "25px",
              borderRadius: "20px",
              backgroundColor: "#white",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            }}
          >
            <h3
              style={{
                fontSize: "24px",
                fontWeight: "700",
                color: "#137fec",
                marginBottom: "20px",
              }}
            >
              {category.category}
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              {category.skills.map((skill) => (
                <div key={skill.name}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "5px",
                      fontWeight: "500",
                      color: "#374151",
                    }}
                  >
                    <span>{skill.name}</span>
                    <span>{skill.level}</span>
                  </div>
                  <div
                    style={{
                      height: "8px",
                      borderRadius: "8px",
                      backgroundColor: "#white",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: `${levelToProgress[skill.level]}%`,
                        height: "100%",
                        backgroundColor: "#137fec",
                        transition: "width 0.5s ease-in-out",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}

export default Skills;
