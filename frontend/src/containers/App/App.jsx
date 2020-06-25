import React, {useState} from 'react';
import {BrowserRouter} from 'react-router-dom'
import Topbar from '../../components/Topbar';
import Routes from '../../routes/routes';



import './App.scss';

const App = () => {
  const [filterMovie, setfilterMovie] = useState('')
  return(
    <div >
      <BrowserRouter>
        <Topbar filterMovie={filterMovie} setFilterMovie={setfilterMovie}/>
        <Routes filterMovie={filterMovie}/>
      </BrowserRouter>
    
    </div>
  )
};

export default App;
