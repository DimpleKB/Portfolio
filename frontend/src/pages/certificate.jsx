import React from "react";
import UiuxPdf from "../certificate/uiux.pdf";
import AiPdf from "../certificate/Ai.pdf";
import CNPdf from "../certificate/CN .pdf";
import GenAiPdf from "../certificate/gen Ai .pdf";
import GenmodelsPdf from "../certificate/generative models.pdf";
import TransPdf from "../certificate/openai transformers.pdf";
import PromptPdf from "../certificate/prompt eng.pdf";
import Achievements from "./achievements"
function CertificateGallery() {
  const certificates = [
    { title: "UI/UX", file: UiuxPdf },
    { title: "AI", file: AiPdf },
    { title: "Computer Networks", file: CNPdf },
    { title: "Generative AI", file: GenAiPdf },
    { title: "Generative Models", file: GenmodelsPdf },
    { title: "OpenAI Transformers", file: TransPdf },
    { title: "Prompt Engineering", file: PromptPdf },
  ];

  return (
    <div id="certificate" style={{ padding: "50px", textAlign: "center" }}>
      <h1 style={{ marginBottom: "40px", fontSize: "32px", color: "#111827" }}>
        Certificates
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)", // exactly 3 per row
          gap: "30px",
        }}
      >
        {certificates.map((cert, index) => (
          <div
            key={index}
            style={{
              borderRadius: "10px",
              overflow: "hidden",
              cursor: "pointer",
              border: "2px solid #e5e7eb",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onClick={() => window.open(cert.file, "_blank")}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
            }}
          >
            {/* PDF thumbnail using iframe */}
            <iframe
              src={cert.file}
              title={cert.title}
              style={{
                width: "100%",
                height: "250px",
                border: "none",
                objectFit: "cover",
              }}
            ></iframe>

            <div
              style={{
                padding: "10px",
                fontWeight: "600",
                fontSize: "16px",
                backgroundColor: "#f3f4f6",
                color: "#111827",
              }}
            >
              {cert.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CertificateGallery;
