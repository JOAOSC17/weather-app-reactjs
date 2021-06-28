import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { Início } from './components/Início';
import { Cadastrar } from './components/Cadastrar';
import { Logar } from './components/Logar';
function App() {
  return (
    <BrowserRouter>
    <Route exact path="/" component={Início}/>
    <Route exact path="/logar" component={Logar}/>
    <Route exact path="/cadastrar" component={Cadastrar}/>
    </BrowserRouter>
   
  );
}

export default App;
