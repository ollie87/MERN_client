import React, { useReducer } from 'react';
import {} from '../../types';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

const TareaState = props => {
  const initialState = {
    tareas: [],
  };
  const [state, dispatch] = useReducer(TareaReducer, initialState);
  return <TareaContext.Provider value={{}}>{props.children}</TareaContext.Provider>;
};

export default TareaState;
