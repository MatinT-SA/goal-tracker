import { FaSearch } from "react-icons/fa";
import { Button } from "../UI/Button";
import { useState } from "react";

export function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (query.trim() !== "") {
      onSearch(query);
    }
  }

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button className="button">
        <FaSearch className="search-icon" />
      </Button>
    </form>
  );
}
