import React, { useContext } from 'react';
import proyectoContext from '../../contexts/proyectos/proyectoContext';

const FormTarea = () => {
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  if (!proyecto) return null;

  const [proyectoActual] = proyecto;

  const onSubmit = e => {
    e.preventDefault();
  };
  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input type="text" className="input-text" placeholder="Nombre Tarea" name="nombre" />
        </div>
        <div className="contenedor-input">
          <input type="submit" className="btn btn-primario btn-submit btn-blok" value="Agregar Tarea" />
        </div>
      </form>
    </div>
  );
};

export default FormTarea;
