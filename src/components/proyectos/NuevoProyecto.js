import React, { Fragment, useContext, useState } from 'react';
import proyectoContext from '../../contexts/proyectos/proyectoContext';
const NuevoProyecto = () => {
  const proyectosContext = useContext(proyectoContext);
  const { formulario, errorformulario, mostrarFormulario, agregarProyecto, mostrarError } = proyectosContext;
  const [proyecto, guardarProyecto] = useState({ nombre: '' });

  const { nombre } = proyecto;

  const onChangeProyecto = e => {
    guardarProyecto({ ...proyecto, [e.target.name]: e.target.value });
  };

  const onSubmitProyecto = e => {
    e.preventDefault();
    if (nombre === '') {
      mostrarError();
      return;
    }

    agregarProyecto(proyecto);

    guardarProyecto({ nombre: '' });
  };

  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primario" onClick={() => mostrarFormulario()}>
        Nuevo Proyecto
      </button>
      {formulario ? (
        <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyecto}>
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Proyecto"
            name="nombre"
            onChange={onChangeProyecto}
            value={nombre}
          />
          <input type="submit" className="btn btn-primario btn-block" value="Agregar Proyecto" />
        </form>
      ) : null}

      {errorformulario ? <p className="mensaje error">El nombre del proyecto es obligatorio</p> : null}
    </Fragment>
  );
};

export default NuevoProyecto;
