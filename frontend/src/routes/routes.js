import React, { useEffect, useState } from 'react';

import {Switch, Route } from 'react-router-dom';

import MovieList from '../containers/MovieList'
import api from '../service/api'

export default function Routes({ filterMovie }) {
  const [movies, setMovies] = useState([])
  useEffect( () => {
    api.get('/movies')
      .then(response => setMovies([...response.data]))
  }, [])
  const movieFilter = movies.filter(movie => movie.title.toLowerCase().includes(filterMovie.toLocaleLowerCase()))
  return (
    
    <Switch>
      <Route path="/" exact>
        <MovieList movies={movieFilter}/>
      </Route>
    </Switch>
  )
}