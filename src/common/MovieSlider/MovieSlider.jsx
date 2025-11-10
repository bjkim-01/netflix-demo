import React from "react";
import "./MovieSlider.style.css";
import MovieCard from "../MovieCard/MovieCard";
import Carousel from "react-multi-carousel";

const MovieSlider = ({ title, movies, responsive }) => {
  return (
    <div>
      <h3 style={{paddingLeft: "40px"}}>{title}</h3>
      <Carousel
        centerMode={true}
        responsive={responsive}
        infinite={true}
        containerClass="carousel-container"
        itemClass="movie-slider p-1"
      >
        {movies.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSlider;
