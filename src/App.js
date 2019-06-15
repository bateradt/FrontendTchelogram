//Libs do React
import React from 'react';
import {BrowserRouter} from 'react-router-dom';

//Componentes e Rotas
import Routes from './routes';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes/>
    </BrowserRouter>
  );
}

export default App;
