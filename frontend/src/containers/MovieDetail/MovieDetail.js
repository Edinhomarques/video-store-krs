import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Form from '../../components/Form/Form';
import './MovieDetail.scss';
import movieImageDefault from '../../assets/movie.jpg';
import api from '../../service/api';

export default function MovieDetail(){
  const { id } = useParams()
  const [movieData, setMovieData] = useState({})
 
  useEffect(() => {
    api.get(`/movies/${id}`)
      .then(response => setMovieData({...response.data}))
  }, [id])

  return (
    <section className="moviedetail">
    <div className="container--fluid">
      <div className="movie__box">
        <div className="imageContent">
          <img src={movieImageDefault} alt="Default Poster Movie" />
        </div>
        <div className="form__group">
            <Form />
        </div>
      </div>

    </div>
  </section>
  )

}