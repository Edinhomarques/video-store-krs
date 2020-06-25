import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Topbar from '../../components/Topbar';
import Routes from '../../routes/routes';



import './App.scss';

const App = () => (
  <div >
    <BrowserRouter>
      <Topbar />
      <Routes />
    </BrowserRouter>
  
  </div>
);

export default App;
