import React from 'react';

import {Switch, Route } from 'react-router-dom';

import MovieList from '../containers/MovieList'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <MovieList />
      </Route>
    </Switch>
  )
}