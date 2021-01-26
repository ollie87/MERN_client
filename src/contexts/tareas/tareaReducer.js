import { AGREGAR_TAREA, TAREAS_PROYECTO, VALIDAR_TAREA } from '../../types';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state, action) => {
  switch (action.type) {
    case TAREAS_PROYECTO:
      return { ...state, tareasproyecto: state.tareas.filter(tarea => tarea.proyectoId === action.payload) };

    case AGREGAR_TAREA:
      return { ...state, tareas: [...state.tareas, action.payload], errorTarea: false };

    case VALIDAR_TAREA:
      return { ...state, errorTarea: true };

    default:
      return state;
  }
};
