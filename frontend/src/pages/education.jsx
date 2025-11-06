import React from "react";
import profilePic from '../profile pic.jpg'; // replace with your image path
import Skills from "./skills";

function Education()
{
    return (
        <div>
        <section
            id="education"
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "80px 50px",
                margin: "40px 0",
                borderRadius: "20px",
                backgroundColor: "#ffffff",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                gap: "50px",
            }}
        >
        {/* Left Image */}
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <img
            src={profilePic}
            alt="Education"
            style={{
                width: "350px",
                height: "350px",
                borderRadius: "10%",
                objectFit: "cover",
                border: "5px solid #137fec",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                transition: "transform 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
        </div>

        {/* Right Content: Education Details */}
        <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "30px", color: "#111827" }}>
            Education
            </h2>

            {/* Education Card 1 */}
            <div
            style={{
                backgroundColor: "#f9fafb",
                padding: "20px 25px",
                borderRadius: "15px",
                marginBottom: "20px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
            }}
            >
            <h3 style={{ fontSize: "24px", fontWeight: "700", color: "#137fec" }}>
                Bachelor of Engineering in Computer Science
            </h3>
            <p style={{ fontSize: "18px", fontWeight: "500", color: "#374151" }}>
                RNS INSTITUTE OF TECHNOLOGY
            </p>
            <p style={{ fontSize: "16px", color: "#6b7280" }}>BATCH : 2027 – Present | CGPA: 9.3/10</p>
            <ul style={{ marginTop: "10px", color: "#4b5563" }}>
                <li>Relevant Courses: Data Structures, Algorithms, Web Development,OOPS,OS,CN</li>
            </ul>
            </div>

            {/* Education Card 2 */}
            <div
            style={{
                backgroundColor: "#f9fafb",
                padding: "20px 25px",
                borderRadius: "15px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
            }}
            >
            <h3 style={{ fontSize: "24px", fontWeight: "700", color: "#137fec" }}>
                PCMB-Science
            </h3>
            <p style={{ fontSize: "18px", fontWeight: "500", color: "#374151" }}>
                KLE's S Nijalingappa PU College
            </p>
            <p style={{ fontSize: "16px", color: "#6b7280" }}>2021 - 2023 | Percentage: 96.5%</p>
            </div>
        </div>
        
        </section>
        </div>
    )
}


export default Education;