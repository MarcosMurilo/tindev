// useState verifica o estado do um componente
import React, { useState } from 'react';
import './login.css';

//importando API
import api from '../services/api';
// importando logo
import logo from '../assets/logo.svg';

// exportando a função
export default function Login({history}) {
    const [username, setUsername] = useState('');

    async function handleSubmite(e) {
        e.preventDefault();

        const response = await api.post('/devs', {
            username,
        });

        const {_id } = response.data;

        history.push(`/dev/${_id}`);
    }

    return (
       <div className= "login-container">
            <form onSubmit={handleSubmite}>
              <img src = {logo} alt="Tindev" />
                <input placeholder = "Digite seu usuário no Github"
                value= {username}// {} para colocar uma variável JavaScript 
                onChange={e => setUsername(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
       </div>
    );
} 