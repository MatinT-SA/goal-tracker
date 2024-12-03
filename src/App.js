import { FaSearch } from "react-icons/fa";

export default function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <img src="images/logo.png" alt="Logo" />

      <nav className="header-nav">
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <button>
            <FaSearch className="search-icon" />
          </button>
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

function GoalForm() {
  return <div>form goal</div>;
}

function GoalList() {
  return <div>goal list</div>;
}

function GoalItem() {
  return <div>goal item</div>;
}

function ProgressBar() {
  return <div>Progress bar</div>;
}

function Filter() {
  return <div>filter</div>;
}

function SearchBar() {
  return <div>search bar</div>;
}

function Modal() {
  return <div>Modal</div>;
}

function Footer() {
  return <div>footer</div>;
}
