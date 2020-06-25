import React from 'react';
import MoviePoster from '../../components/MoviePoster'
import './MovieList.scss'

export default function MovieList({ movies }){
  return (
    <section className="movielist">
      <div className="container--fluid">
        <div className="movielist__grid">
          {movies.map(movie => (
            <MoviePoster key={ movie.id } movie={ movie } />
          ))}

        </div>

      </div>
    </section>
  )
}