import React, { useEffect, useState } from 'react';

import {Switch, Route } from 'react-router-dom';

import MovieList from '../containers/MovieList';
import MovieDetail from '../containers/MovieDetail';
import api from '../service/api'

export default function Routes({ filterMovie }) {
  const [movies, setMovies] = useState([])
  const [deleteMovie, setDeleteMovie] = useState({})
  useEffect( () => {
    api.get('/movies')
      .then(response => setMovies([...response.data]))
  }, [deleteMovie])

  async function removeMovie(id){
    try {
      const response = await api.delete(`/movies/${id}`)
      setDeleteMovie(response.data)
    } catch (error) {
      console.error(error)
    }
  }
  const movieFilter = movies.filter(movie => movie.title.toLowerCase().includes(filterMovie.toLocaleLowerCase()))
  return (
    
    <Switch>
      <Route path="/" exact>
        <MovieList movies={movieFilter} removeMovie={removeMovie}/>
      </Route>
      <Route path="/movie/:id">
        <MovieDetail />
      </Route>
    </Switch>
  )
}