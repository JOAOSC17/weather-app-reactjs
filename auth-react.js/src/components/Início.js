import React from 'react';
import { authConfig } from '../auth/config';
const Início = () => {
    return (
        <div>
            <h1>Início</h1>
            <button onClick={()=> authConfig.auth().signOut()}>Deslogar</button>
        </div>
    )
}

export default Início
