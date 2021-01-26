import React, { useContext, useState } from 'react';
import proyectoContext from '../../contexts/proyectos/proyectoContext';
import tareaContext from '../../contexts/tareas/tareaContext';

const FormTarea = () => {
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  const tareasContext = useContext(tareaContext);
  const { agregarTarea, validarTarea, errorTarea, obtenerTareas } = tareasContext;

  const [tarea, guardarTarea] = useState({
    nombre: '',
  });

  const { nombre } = tarea;

  const handleChange = e => {
    guardarTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };

  if (!proyecto) return null;

  const [proyectoActual] = proyecto;

  const onSubmit = e => {
    e.preventDefault();

    if (nombre.trim() === '') {
      validarTarea();
      return;
    }

    tarea.proyectoId = proyectoActual.id;
    tarea.estado = false;
    agregarTarea(tarea);
    obtenerTareas(proyectoActual.id);
    guardarTarea({ nombre: '' });
  };

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea"
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
        </div>
        <div className="contenedor-input">
          <input type="submit" className="btn btn-primario btn-submit btn-blok" value="Agregar Tarea" />
        </div>
      </form>
      {errorTarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> : null}
    </div>
  );
};

export default FormTarea;
