import React from 'react';
import './MoviePoster.scss';
import movieImageDefault from '../../assets/movie.jpg';
import {FiTrash, FiHeart} from 'react-icons/fi';
export default function MoviePoster(){
  return (
    <div className="movieposter">
      <header className="movieposter__header">
        <img src={movieImageDefault} alt="Movie Default" />
      </header>
      <section className="movieposter__info">
        <div className="info__group">
          <h5 className="movieposter__title">Interstelar</h5>
          <span>Year: 2150</span>
          <span>/</span>
          <span>Genre: Scifi, Adventure</span>
          <hr/>
          <br/>
          <span>Languages: Ingles, postugues</span>
          <p> <strong>Description:</strong></p>
          <p>ganha acesso ao poder ilimitado do cubo cósmico ao roubá-lo de dentro das instalações da S.H.I.E.L.D. Nick Fury, o diretor desta agência internacional que mantém a paz, logo reúne os únicos super-heróis que serão capazes de defender a Terra de ameaças sem precedentes. Homem de Ferro, Capitão América, Hulk, Thor, Viúva Negra e Gavião Arqueiro formam o time dos sonhos de Fury, mas eles precisam aprender a colocar os egos de lado e agir como um grupo em prol da humanidade</p>
          <footer className="movieposter__footer">
              <FiHeart className="like" size={25} />
              <FiTrash  className="trash" size={25} />
          </footer>
        </div>
      </section>
    </div>
  )
}