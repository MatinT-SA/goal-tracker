import { useState } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export function Footer() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleTheme() {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.body.setAttribute("data-theme", newMode ? "dark" : "light");
      return newMode;
    });
  }

  return (
    <div className="footer">
      <div className="footer-links">
        <a
          href="https://github.com/MatinT-SA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub className="footer-icons" />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/matin-taherzadeh-sa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin className="footer-icons" />
          LinkedIn
        </a>
      </div>
      <div className="footer-copyright">
        <p>
          © 2024{" "}
          <a
            href="https://www.matintaherzadeh.ir/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Matin Taherzadeh
          </a>
          . All Rights Reserved.
        </p>
      </div>
      <div className="footer-theme-toggle">
        <button onClick={toggleTheme} className="theme-toggle-btn">
          {isDarkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </div>
  );
}
