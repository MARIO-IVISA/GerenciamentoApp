import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Inicio from './pages/Inicio';
import AcessarConta from './pages/AcessarConta';
import CadastrarConta from './pages/CadastrarConta';
import Administracao from './pages/Administracao';
import Historico from './pages/Historico';
import AplicarNota from './pages/AplicarNota';



export default function Main() {
  return (
    <Routes>
        
        <Route
            path="/inicio"
            element={ <Inicio /> }
        />

        <Route
            path="/adm"
            element={ <Administracao /> }
        />
        <Route
            path="/historico"
            element={ <Historico /> }
        />

        <Route
                path="/aplicar-nota/:id"
                element={ <AplicarNota /> }
            />

        <Route
            path="/"
            exact
            element={ <AcessarConta /> }
        />

        <Route
            path="/cadastrar-conta"
            element={ <CadastrarConta /> }
        />
    
    </Routes>
  )
}
