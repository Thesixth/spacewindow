import React from "react";
import "../styles/datepicker.css";

function Search({ searchDate, handleSearchDate }) {
  return (
    <div>
      <h1>
        Want to go back in time? <br />
        <em>Pick a date</em>
      </h1>
      <input
        className="datepicker"
        type="date"
        placeholder="Search by name"
        value={searchDate}
        onChange={handleSearchDate}
      />
    </div>
  );
}

export default Search;
