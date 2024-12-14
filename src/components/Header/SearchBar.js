export function SearchBar({ onSearch, searchQuery }) {
  function handleChange(e) {
    onSearch(e.target.value);
  }

  return (
    <form className="search-box" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleChange}
      />
    </form>
  );
}
