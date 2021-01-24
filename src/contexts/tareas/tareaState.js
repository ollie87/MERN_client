import React, { useReducer } from 'react';
import {} from '../../types';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

const TareaState = props => {
  const initialState = {
    tareas: [
      { id: 1, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1 },
      { id: 2, nombre: 'Elegir Colores', estado: false, proyectoId: 2 },
      { id: 3, nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 3 },
      { id: 4, nombre: 'Elegir Hosting', estado: true, proyectoId: 4 },
      { id: 1, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1 },
      { id: 2, nombre: 'Elegir Colores', estado: false, proyectoId: 2 },
      { id: 3, nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 3 },
      { id: 1, nombre: 'Elegir Plataforma', estado: true, proyectoId: 4 },
      { id: 2, nombre: 'Elegir Colores', estado: false, proyectoId: 1 },
      { id: 3, nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 2 },
      { id: 1, nombre: 'Elegir Plataforma', estado: true, proyectoId: 3 },
      { id: 2, nombre: 'Elegir Colores', estado: false, proyectoId: 4 },
      { id: 3, nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 3 },
    ],
  };
  const [state, dispatch] = useReducer(TareaReducer, initialState);
  return <TareaContext.Provider value={{ tareas: state.tareas }}>{props.children}</TareaContext.Provider>;
};

export default TareaState;
