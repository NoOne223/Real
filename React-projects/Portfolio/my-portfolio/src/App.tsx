import React from 'react';
import logo from './logo.svg';
import './App.css';
import Content1 from './assets/components/Content1';
import Content2 from './assets/components/Content2';
import Content3 from './assets/components/Content3';
import Content4 from './assets/components/Content4';
import Content5 from './assets/components/Content5';

function App() {
  return (
    <div className='banner text-white'>
      <Content1 />
      <Content2 />
      <Content3 />
      <Content4 />
      <Content5 />
    </div>
  );
}

export default App;
