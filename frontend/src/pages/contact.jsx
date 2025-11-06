import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Contact() {
  // Contact information
  const contactDetails = [
    { type: "Name", value: "Dimple KB" },
    { type: "Username", value: "DimpleKB | Dimple KB | LeetCode" },
    { type: "Email", value: "dimpledimpu50@gmail.com", link: "mailto:dimpledimpu50@gmail.com" },
    { type: "Phone", value: "+91 72044 47359", link: "tel:+917204447359" },
  ];

  // Social icons: store components, not JSX
  const socialLinks = [
    { Icon: SiLeetcode, link: "https://leetcode.com/u/dimple_kb/", color: "#FFA116" },
    { Icon: FaGithub, link: "https://github.com/DimpleKB", color: "#333" },
    { Icon: FaLinkedin, link: "https://www.linkedin.com/in/dimple-k-b-369838295/", color: "#0A66C2" },
    { Icon: FaEnvelope, link: "mailto:dimpledimpu50@gmail.com", color: "#D44638" },
  ];

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div id="contact" style={{ padding: "50px", textAlign: "center" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "40px", color: "#111827" }}>Contact</h1>

      {/* Contact Info */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          fontSize: "18px",
          color: "#374151",
          marginBottom: "40px",
        }}
      >
        {contactDetails.map((detail, index) => (
          <div key={index} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <strong style={{ width: "120px", textAlign: "right" }}>{detail.type}:</strong>
            {detail.link ? (
              <a href={detail.link} style={{ color: "#3b82f6", textDecoration: "none" }}>
                {detail.value}
              </a>
            ) : (
              <span>{detail.value}</span>
            )}
          </div>
        ))}
      </div>

      {/* Social Icons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          fontSize: "28px",
          marginBottom: "50px",
        }}
      >
        {socialLinks.map(({ Icon, link, color }, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color, transition: "transform 0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <Icon />
          </a>
        ))}
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          textAlign: "left",
        }}
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #d1d5db",
            fontSize: "16px",
          }}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #d1d5db",
            fontSize: "16px",
          }}
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="6"
          required
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #d1d5db",
            fontSize: "16px",
          }}
        ></textarea>
        <button
          type="submit"
          style={{
            padding: "12px",
            borderRadius: "8px",
            backgroundColor: "#3b82f6",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "600",
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#3b82f6")}
        >
          Send Message
        </button>
        {submitted && <p style={{ color: "green", fontWeight: "600" }}>Message sent successfully!</p>}
      </form>
    </div>
  );
}

export default Contact;
