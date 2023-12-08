import './App.css';
import Slider from './componen/slider/slider';
import Header from './componen/header';
import Content from './componen/Content';
import Hasil from './Hasil'
import { useEffect, useState } from 'react';
import {getMovie} from './api'

function App() {

  return (
    <div >  
      <Header/>
      <Hasil/>
      <Slider/>
      <Content/>
    </div>
  );
}

export default App;
