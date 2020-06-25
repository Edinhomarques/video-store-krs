import React, { useEffect, useState } from 'react';

import {Switch, Route } from 'react-router-dom';

import MovieList from '../containers/MovieList'
import api from '../service/api'

export default function Routes() {
  const [movies, setMovies] = useState([])
  useEffect( () => {
    api.get('/movies')
      .then(response => setMovies([...response.data]))
  }, [])
  return (
    <Switch>
      <Route path="/" exact>
        <MovieList movies={movies}/>
      </Route>
    </Switch>
  )
}