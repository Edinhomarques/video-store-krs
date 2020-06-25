import React from 'react';
import { Link } from 'react-router-dom'
import {FiTrash, FiHeart} from 'react-icons/fi';

import './MoviePoster.scss';
import movieImageDefault from '../../assets/movie.jpg';

export default function MoviePoster({ movie,  removeMovie }){

  return (
    <div className="movieposter">
      <header className="movieposter__header">
        <img src={movieImageDefault} alt="Movie Default" />
      </header>
      <section className="movieposter__info">
        <div className="info__group">
          <Link to={`/movie/${movie.id}`}>
            <h5 className="movieposter__title">{movie.title}</h5>
          </Link>
          <span>Year: {movie.year}</span>
          <span>/</span>
          <span>Genre: {movie.genre.reduce((acc, curr) => `${acc}, ${curr}`)}</span>
          <hr/>
          <br/>
          <span>Languages: {movie.languages.reduce((acc, curr) => `${acc}, ${curr}`)}</span><br />
          <span>Director: {movie.director}</span>
          <div className="movieposter__description">
            <p> <strong>Description:</strong></p>
            <p>{movie.description}</p>
          </div>
          <footer className="movieposter__footer">
              <FiHeart className="like" size={25} />
                <span>Nota: {movie.rating}</span>
              <FiTrash  className="trash" size={25} onClick={() => removeMovie(movie.id)}/>
          </footer>
        </div>
      </section>
    </div>
  )
}