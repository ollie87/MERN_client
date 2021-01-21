import React, { useCallback, useReducer } from 'react';
import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS } from '../../types';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';

const ProyectoState = props => {
  const proyectos = [
    { id: 1, nombre: 'Tienda Virtual' },
    { id: 2, nombre: 'Intranet' },
    { id: 3, nombre: 'Diseño sitio web' },
  ];
  const initialState = {
    proyectos: [],
    formulario: false,
  };

  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };

  const obtenerProyectos = useCallback(() => {
    dispatch({ type: OBTENER_PROYECTOS, payload: proyectos });
  }, []);

  return (
    <proyectoContext.Provider
      value={{ proyectos: state.proyectos, formulario: state.formulario, mostrarFormulario, obtenerProyectos }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
