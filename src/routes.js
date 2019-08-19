import React from 'react';

// importando rotas
import	 {BrowserRouter, Route} from 'react-router-dom';

import login from './pages/login';
import main from './pages/main';

export default function Routes() {
    return (
        //// precisa ter um Route por página
        <BrowserRouter>
            <Route path= "/" exact component={login} />
            <Route path= "/dev/:id" component={main} /> 
        </BrowserRouter>
    );
}