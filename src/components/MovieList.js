import React from 'react';

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="image-container d-flex justify-content-center m-4 row">
          <img src={movie.Poster} alt="movie" className="image" />
          <div className="text-center justify-content-start  mt-auto">
            <h5>{movie.Title}</h5>
            <p>{movie.Year}</p>
            <button
              className="btn btn-primary"
              onClick={() => props.handleClick(index)}
            >
              Like
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
