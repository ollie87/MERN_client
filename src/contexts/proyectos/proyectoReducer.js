import {
  AGREGAR_PROYECTO,
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  PROYECTO_ACTUAL,
  VALIDAR_FORMULARIO,
} from '../../types';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state, action) => {
  switch (action.type) {
    case FORMULARIO_PROYECTO:
      return {
        ...state,
        formulario: true,
      };
    case OBTENER_PROYECTOS:
      return { ...state, proyectos: action.payload };
    case AGREGAR_PROYECTO:
      return { ...state, proyectos: [...state.proyectos, action.payload], formulario: false, errorformulario: false };
    case VALIDAR_FORMULARIO:
      return { ...state, errorformulario: true };
    case PROYECTO_ACTUAL:
      return { ...state, proyecto: state.proyectos.filter(proyecto => proyecto.id === action.payload) };
    default:
      return state;
  }
};
