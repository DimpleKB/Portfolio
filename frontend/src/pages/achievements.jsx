import React from "react";
import Contact from "./contact";
function Achievements() {
  const achievements = [
    { text: "Solved 250+ DSA problems on LeetCode.", icon: "🎯" },
    { text: "Member of technical club “BigO”.", icon: "🏆" },
    { text: "Completed Samsung Innovation Campus (SIC) internship on Competitive Programming.", icon: "💻" },
  ];

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "40px", color: "#111827" }}>
        Achievements
      </h1>

      <div
        id="achievements"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
          justifyItems: "center",
        }}
      >
        {achievements.map((achieve, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#f3f4f6",
              padding: "20px",
              borderRadius: "12px",
              width: "100%",
              maxWidth: "350px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              transition: "transform 0.3s, box-shadow 0.3s",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
            }}
          >
            <div style={{ fontSize: "36px", marginBottom: "15px" }}>{achieve.icon}</div>
            <p style={{ fontSize: "18px", color: "#111827", lineHeight: "1.5" }}>
              {achieve.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;
