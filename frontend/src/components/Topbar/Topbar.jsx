import React from 'react';
import {MdMovie} from 'react-icons/all'
import { Link } from 'react-router-dom';


import './Topbar.scss';

const Topbar = () => (
  <header className="topbar" data-testid="topbar">
    <div className="container" >
      <div className="topbar__group">
        <MdMovie className="topbar__logo" size={30}/> 
        <span className="topbar__title">Movies</span>
      </div>
      <input className="topbar__search" type="text" placeholder="search movie..."/>
    </div>
  </header>
);

export default Topbar;
