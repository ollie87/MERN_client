import React from 'react';
import HeaderNav from '../layout/HeaderNav';
import Sidebar from '../layout/Sidebar';
import FormTarea from '../tareas/FormTarea';
const Proyectos = () => {
  return (
    <div className="contenedor-app">
      <Sidebar />
      <div className="seccion-principal">
        <HeaderNav />
        <main>
          <FormTarea />
          <div className="contenedor-tareas"></div>
        </main>
      </div>
    </div>
  );
};

export default Proyectos;
