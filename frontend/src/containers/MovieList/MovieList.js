import React from 'react';
import MoviePoster from '../../components/MoviePoster'
import './MovieList.scss'

export default function MovieList({ movies, removeMovie}){
  return (
    <section className="movielist">
      <div className="container--fluid">
        <div className="movielist__grid">
          {movies.map(movie => (
            <MoviePoster key={ movie.id } movie={ movie } removeMovie={removeMovie}/>
          ))}

        </div>

      </div>
    </section>
  )
}