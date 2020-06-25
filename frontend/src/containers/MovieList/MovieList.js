import React from 'react';
import MoviePoster from '../../components/MoviePoster'
import './MovieList.scss'

export default function MovieList(){
  return (
    <section className="movielist">
      <div className="container--fluid">
        <div className="movielist__grid">
          <MoviePoster />
          <MoviePoster />
          <MoviePoster />
          <MoviePoster />
          <MoviePoster />


        </div>

      </div>
    </section>
  )
}