import React from "react";

const Filter = props => {
  const { nameFilter, handleNameFilterChange } = props;

  return (
    <div>
      Filter Name:{" "}
      <input value={nameFilter} onChange={handleNameFilterChange} />
    </div>
  );
};

export default Filter;
