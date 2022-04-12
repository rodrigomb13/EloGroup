import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Registro from "./components/user/Registro";
import Login from "./components/user/Login";
import Home from "./components/pages/PainelLeads/Home";
import RegistroLead from './components/pages/NewLeads/RegistrarLead';


function App() {

  //Inicia duas listas, uma de usuarios e outra de leads
  var listaLeads = [];
  var listaUsuarios = [];
  if(!localStorage.getItem('listaLeads')){
      localStorage.setItem('listaLeads', JSON.stringify(listaLeads));
  }
  if(!localStorage.getItem('listaUsuarios')){
      localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios));
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Registro/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/registroLead" element={<RegistroLead/>}/>
      </Routes>
    </Router>
  );
}

export default App;
