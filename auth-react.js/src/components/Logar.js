import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { authConfig } from '../auth/config';

export const Logar = withRouter(({history}) => {
    const loginFunc = useCallback(
        async(event) => {
            event.preventDefault();
            const { email, senha } = event.target.elements;
            try{
                await authConfig.auth().signInWithEmailAndPassword(email.value, senha.value);
                history.push('/');
            }catch(error){
                console.log(error);
            }
        },
        [history],
    );
    const { usuario } = useContext(AuthContext);
    if(usuario){
        return <Redirect to="/"/>;
    }
    return (
        <div>
            <h1>Logar</h1>
            <form onSubmit={loginFunc}>
            <label>Email</label>
               <input type="email" name="email"/>
               <label>Senha</label>
               <input type="password" name="senha"/>
               <button type="submit">Logar!!</button>
            </form>
        </div>
    )
})
