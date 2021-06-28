import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { Início } from './components/Início';
import { Cadastrar } from './components/Cadastrar';
import { Logar } from './components/Logar';
import { AuthProvider } from './auth/AuthContext';
import { RotaPrivada } from './auth/RotaPrivada';

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    <RotaPrivada exact path="/" component={Início}/>
    <Route exact path="/logar" component={Logar}/>
    <Route exact path="/cadastrar" component={Cadastrar}/>
    </BrowserRouter>
    </AuthProvider>
   
  );
}

export default App;
