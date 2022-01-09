import React from "react";

function Search({ searchDate, handleSearch }) {
  return (
    <div>
      <h2>
        Would you like a view from the past? <br />
        <em>Pick a date</em>
      </h2>
      <input
        className="searchBar"
        type="date"
        placeholder="Search by name"
        value={searchDate}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
