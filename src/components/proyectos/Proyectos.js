import React from 'react';
import HeaderNav from '../layout/HeaderNav';
import Sidebar from '../layout/Sidebar';
const Proyectos = () => {
  return (
    <div className="contenedor-app">
      <Sidebar />
      <div className="seccion-principal">
        <HeaderNav />
        <main>
          <div className="contenedor-tareas"></div>
        </main>
      </div>
    </div>
  );
};

export default Proyectos;
