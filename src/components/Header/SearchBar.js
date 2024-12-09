import { FaSearch } from "react-icons/fa";
import { Button } from "../UI/Button";

export function SearchBar() {
  return (
    <div className="search-box">
      <input type="text" placeholder="Search..." />
      <Button className="button">
        <FaSearch className="search-icon" />
      </Button>
    </div>
  );
}
