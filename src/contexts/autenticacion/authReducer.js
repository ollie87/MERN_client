import { 
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    LOGIN_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    CERRAR_SESION
} from '../../types';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */

export default (state, action) => {
    switch(action.type) {
        case REGISTRO_EXITOSO:
        case LOGIN_EXITOSO:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                autenticado: true,
                mensaje: null,
                cargando: false
            }
        case CERRAR_SESION:
        case REGISTRO_ERROR:
        case LOGIN_ERROR:
                localStorage.removeItem('token');
                return {
                    ...state,
                    token: null,
                    usuario: null,
                    autenticado: null,
                    mensaje: action.payload,
                    cargando: false
                }
        case OBTENER_USUARIO: 
            return {
                ...state,
                autenticado: true,
                usuario: action.payload,
                cargando: false
            }
        default:
            return state;
    }
}