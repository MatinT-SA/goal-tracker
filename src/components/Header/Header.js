import ProgressBar from "../UI/ProgressBar";
import { SearchBar } from "./SearchBar";
import { useGoalProgress } from "../../hooks/useGoalProgress";
import { useScreenWidth } from "../../hooks/useScreenWidth";

export function Header({
  goals,
  onSearch,
  searchQuery,
  progress,
  setProgress,
}) {
  const screenWidth = useScreenWidth();

  useGoalProgress(goals, setProgress);

  return (
    <header className="header">
      <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Logo" />

      <nav className="header-nav">
        <SearchBar onSearch={onSearch} searchQuery={searchQuery} />
      </nav>

      {screenWidth > 550 && <ProgressBar progress={progress} />}

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
