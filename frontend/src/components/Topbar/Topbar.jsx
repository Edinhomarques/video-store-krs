import React from 'react';
import {MdMovie} from 'react-icons/all'
import { Link } from 'react-router-dom';


import './Topbar.scss';

const Topbar = ({filterMovie, setFilterMovie}) => (
  <header className="topbar" data-testid="topbar">
    <div className="container" >
      <Link to='/'>
        <div className="topbar__group">
          <MdMovie className="topbar__logo" size={30}/> 
          <span className="topbar__title">Movies</span>
        </div>
        </Link>
        <input onChange={(e) => setFilterMovie(e.target.value)} value={filterMovie} className="topbar__search" type="text" placeholder="search movie..."/>
      
    </div>
  </header>
);

export default Topbar;
