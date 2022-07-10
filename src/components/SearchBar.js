import React from 'react';

const SearchBar = (props) => {
  return (
    <div className="col-sm-3">
      <input
        className="form-control"
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="Type a movie title to search..."
      />
    </div>
  );
};

export default SearchBar;
