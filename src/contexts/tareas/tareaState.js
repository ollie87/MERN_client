import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios';
import {
  ACTUALIZAR_TAREA,
  AGREGAR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  LIMPIAR_TAREA,
  TAREAS_PROYECTO,
  TAREA_ACTUAL,
  VALIDAR_TAREA,
} from '../../types';
import tareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

const TareaState = props => {
  const initialState = {
    tareasproyecto: [],
    errorTarea: false,
    tareaseleccionada: null,
  };
  const [state, dispatch] = useReducer(TareaReducer, initialState);

  const obtenerTareas = proyectoId => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId,
    });
  };

  const agregarTarea = async tarea => {
    try {
      const resultado = await clienteAxios.post('/api/tareas', tarea);
      dispatch({
        type: AGREGAR_TAREA,
        payload: resultado.data,
      });
    } catch (error) {
      console.log(error)
    }
  };

  const validarTarea = () => {
    dispatch({
      type: VALIDAR_TAREA,
    });
  };

  const eliminarTarea = id => {
    dispatch({
      type: ELIMINAR_TAREA,
      payload: id,
    });
  };

  const cambiarEstadoTarea = tarea => {
    dispatch({
      type: ESTADO_TAREA,
      payload: tarea,
    });
  };

  const guardarTareaActual = tarea => {
    dispatch({
      type: TAREA_ACTUAL,
      payload: tarea,
    });
  };

  const actualizarTarea = tarea => {
    dispatch({
      type: ACTUALIZAR_TAREA,
      payload: tarea,
    });
  };

  const limpiarTarea = () => {
    dispatch({ type: LIMPIAR_TAREA });
  };

  return (
    <tareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        errorTarea: state.errorTarea,
        tareaseleccionada: state.tareaseleccionada,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
        cambiarEstadoTarea,
        guardarTareaActual,
        actualizarTarea,
        limpiarTarea,
      }}
    >
      {props.children}
    </tareaContext.Provider>
  );
};

export default TareaState;
