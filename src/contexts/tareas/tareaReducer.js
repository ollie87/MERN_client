import { act } from 'react-dom/test-utils';
import { AGREGAR_TAREA, TAREAS_PROYECTO } from '../../types';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state, action) => {
  switch (action.type) {
    case TAREAS_PROYECTO:
      return { ...state, tareasproyecto: state.tareas.filter(tarea => tarea.proyectoId === action.payload) };

    case AGREGAR_TAREA:
      return { ...state, tareas: [...state.tareas, action.payload] };

    default:
      return state;
  }
};
