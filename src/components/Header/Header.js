import { useEffect, useState } from "react";
import ProgressBar from "../UI/ProgressBar";
import { SearchBar } from "./SearchBar";

export function Header({ goals, onSearch }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (Array.isArray(goals)) {
      const checkedGoals = goals.filter((goal) => goal.checked).length;
      const progress = (checkedGoals / goals.length) * 100;
      setProgress(progress);
    }
  }, [goals]);

  return (
    <header className="header">
      <img src="images/logo.png" alt="Logo" />

      <nav className="header-nav">
        <SearchBar onSearch={onSearch} />
      </nav>

      <ProgressBar progress={progress} />

      <div className="custom-shape-divider-top-1733231526">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </header>
  );
}
