import React, { useReducer } from 'react';
import { TAREAS_PROYECTO } from '../../types';
import tareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

const TareaState = props => {
  const initialState = {
    tareas: [
      { id: 1, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1 },
      { id: 2, nombre: 'Elegir Colores', estado: false, proyectoId: 2 },
      { id: 3, nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 3 },
      { id: 4, nombre: 'Elegir Hosting', estado: true, proyectoId: 4 },
      { id: 5, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1 },
      { id: 6, nombre: 'Elegir Colores', estado: false, proyectoId: 2 },
      { id: 7, nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 3 },
      { id: 8, nombre: 'Elegir Plataforma', estado: true, proyectoId: 4 },
      { id: 9, nombre: 'Elegir Colores', estado: false, proyectoId: 1 },
      { id: 10, nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 2 },
      { id: 11, nombre: 'Elegir Plataforma', estado: true, proyectoId: 3 },
      { id: 12, nombre: 'Elegir Colores', estado: false, proyectoId: 4 },
      { id: 13, nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 3 },
    ],
    tareasproyecto: null,
  };
  const [state, dispatch] = useReducer(TareaReducer, initialState);

  const obtenerTareas = proyectoId => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId,
    });
  };

  return (
    <tareaContext.Provider value={{ tareas: state.tareas, tareasproyecto: state.tareasproyecto, obtenerTareas }}>
      {props.children}
    </tareaContext.Provider>
  );
};

export default TareaState;
