import React, { useReducer } from 'react';
import { FORMULARIO_PROYECTO } from '../../types';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';

const ProyectoState = props => {
  const initialState = {
    proyectos: [
      { id: 1, nombre: 'Tienda Virtual' },
      { id: 2, nombre: 'Intranet' },
      { id: 3, nombre: 'Diseño sitio web' },
    ],
    formulario: false,
  };

  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };

  return (
    <proyectoContext.Provider value={{ proyectos: state.proyectos, formulario: state.formulario, mostrarFormulario }}>
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
