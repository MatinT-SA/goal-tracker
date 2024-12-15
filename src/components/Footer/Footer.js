import { useState } from "react";

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
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/yourusername/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
      <div className="footer-copyright">
        <p>
          © 2024{" "}
          <a
            href="https://www.matintaherzadeh.ir/"
            target="_blank"
            rel="noreferrer"
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
