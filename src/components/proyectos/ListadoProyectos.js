/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import proyectoContext from '../../contexts/proyectos/proyectoContext';
import Proyecto from './Proyecto';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import AlertaContext from '../../contexts/alertas/alertaContext';

const ListadoProyectos = () => {
  const proyectosContext = useContext(proyectoContext);
  const { mensaje, proyectos, obtenerProyectos } = proyectosContext;
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  useEffect(() => {
    // si hay un error
    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria)
    }
    obtenerProyectos();
  }, [mensaje]);

  if (proyectos.length === 0) return <p>No hay proyectos, comienza creando uno.</p>;

  return (
    <ul className="listado-proyectos">
      { alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null }
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
