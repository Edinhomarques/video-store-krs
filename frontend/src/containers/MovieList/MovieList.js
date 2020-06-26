import React from 'react';
import MoviePoster from '../../components/MoviePoster';
import { Link } from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';
import './MovieList.scss'

export default function MovieList({ movies, removeMovie}){
  return (
    <section className="movielist">
      <div className="container--fluid">
        <Link to="/movie">
          <div className="movielist__add">
            <FiPlus size={25} />
            <span>Adicionar Novo Filme</span>
          </div>
        </Link>
        <div className="movielist__grid">
          {movies.map(movie => (
            <MoviePoster key={ movie.id } movie={ movie } removeMovie={removeMovie}/>
          ))}

        </div>

      </div>
    </section>
  )
}