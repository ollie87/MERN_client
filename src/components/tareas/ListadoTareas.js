import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../contexts/proyectos/proyectoContext';

const ListadoTareas = () => {
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  if (!proyecto) return <h2>Selecctiona un Proyecto</h2>;

  const [proyectoActual] = proyecto;
  const tareasProyecto = [
    { id: 1, nombre: 'Elegir Plataforma', estado: true },
    { id: 2, nombre: 'Elegir Colores', estado: false },
    { id: 3, nombre: 'Elegir Plataformas de pago', estado: false },
    { id: 4, nombre: 'Elegir Hosting', estado: true },
  ];
  return (
    <Fragment>
      <h2>Proyecto: {proyectoActual.nombre}</h2>

      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          tareasProyecto.map(tarea => <Tarea tarea={tarea} key={tarea.id} />)
        )}
      </ul>
      <button type="button" className="btn btn-eliminar">
        Eliminar Proyecto &times;
      </button>
    </Fragment>
  );
};

export default ListadoTareas;
