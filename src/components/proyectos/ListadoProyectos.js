import React, { useContext } from 'react';
import proyectoContext from '../../contexts/proyectos/proyectoContext';
import Proyecto from './Proyecto';
const ListadoProyectos = () => {
  const proyectosContext = useContext(proyectoContext);
  const { proyectos } = proyectosContext;

  if (proyectos.length === 0) return null;

  return (
    <ul className="listado-proyectos">
      {proyectos.map(proyecto => (
        <Proyecto proyecto={proyecto} key={proyecto.id} />
      ))}
    </ul>
  );
};

export default ListadoProyectos;
