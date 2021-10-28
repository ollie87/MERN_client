/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import proyectoContext from '../../contexts/proyectos/proyectoContext';
import Proyecto from './Proyecto';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListadoProyectos = () => {
  const proyectosContext = useContext(proyectoContext);
  const { proyectos, obtenerProyectos } = proyectosContext;

  useEffect(() => {
    obtenerProyectos();
  }, []);

  if (proyectos.length === 0) return <p>No hay proyectos, comienza creando uno.</p>;

  return (
    <ul className="listado-proyectos">
      <TransitionGroup>
        {proyectos.map(proyecto => (
          <CSSTransition key={proyecto._id} timeout={200} classNames="proyecto">
            <Proyecto proyecto={proyecto} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListadoProyectos;
