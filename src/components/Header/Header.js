import { FaSearch } from "react-icons/fa";
import { Button } from "../UI/Button";

export function Header() {
  return (
    <header className="header">
      <img src="images/logo.png" alt="Logo" />

      <nav className="header-nav">
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <Button className="button">
            <FaSearch className="search-icon" />
          </Button>
        </div>
      </nav>

      <div class="custom-shape-divider-top-1733231526">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </header>
  );
}