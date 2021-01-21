import React, { useCallback, useReducer } from 'react';
import { AGREGAR_PROYECTO, FORMULARIO_PROYECTO, OBTENER_PROYECTOS, VALIDAR_FORMULARIO } from '../../types';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { v4 as uuidv4 } from 'uuid';
const ProyectoState = props => {
  const proyectos = [
    { id: 1, nombre: 'Tienda Virtual' },
    { id: 2, nombre: 'Intranet' },
    { id: 3, nombre: 'Diseño sitio web' },
  ];
  const initialState = {
    proyectos: [],
    formulario: false,
    errorformulario: false,
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

  const agregarProyecto = proyecto => {
    proyecto.id = uuidv4();

    dispatch({
      type: AGREGAR_PROYECTO,
      payload: proyecto,
    });
  };

  const mostrarError = () => {
    dispatch({ type: VALIDAR_FORMULARIO });
  };

  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        errorformulario: state.errorformulario,
        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto,
        mostrarError,
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
