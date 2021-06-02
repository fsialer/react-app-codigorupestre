import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CicloVidaComponent from './Componentes/CicloVidaComponent';
import MiPrimerFormulario from './Componentes/MiPrimerFormulario';
import RegistroUsuario from './Componentes/Formulariomaterial';
import Usuarios from './Componentes/Usuarios';


ReactDOM.render(
  <React.StrictMode>
    <RegistroUsuario/>
      <Usuarios/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
