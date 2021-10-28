import React, { useContext, useEffect } from 'react';
import { Redirect, Route } from 'react-router';
import AuthContext from '../../contexts/autenticacion/authContext';

const  RutaPrivada = ({component: Component, ...props}) => {
    const authContext = useContext(AuthContext)
    const { autenticado, cargando, usuarioAutenticado } = authContext

    useEffect(() => {
        usuarioAutenticado();
    }, [])

    return (
        <Route
            {...props}
            render={ props => !autenticado && ! cargando? (
                <Redirect to="/" />
            ) : (
                <Component {...props} />
            )}
         />
    )
}

export default RutaPrivada;