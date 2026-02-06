"use client";
import "./Socialbuttons.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function SocialButtons() {
  return (
    <div className="social-buttons">
      <a
        href="https://github.com/nagev-r"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my GitHub profile"
      >
        <FaGithub size={28} />
      </a>
      <a
        href="https://www.linkedin.com/in/nagevr/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my LinkedIn profile"
      >
        <FaLinkedin size={28} />
      </a>
    </div>
  );
}
