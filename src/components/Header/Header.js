import { SearchBar } from "./SearchBar";

export function Header() {
  return (
    <header className="header">
      <img src="images/logo.png" alt="Logo" />

      <nav className="header-nav">
        <SearchBar />
      </nav>

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
