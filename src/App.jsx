import React from 'react';
import MenuBar from './components/MenuBar/MenuBar';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <MenuBar />
    </BrowserRouter>
  );
};

export default App;
