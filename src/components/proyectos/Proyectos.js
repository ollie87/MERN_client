import React, { useContext, useEffect } from 'react';
import AuthContext from '../../contexts/autenticacion/authContext';
import HeaderNav from '../layout/HeaderNav';
import Sidebar from '../layout/Sidebar';
import FormTarea from '../tareas/FormTarea';
import ListadoTareas from '../tareas/ListadoTareas';


const Proyectos = () => {
  // Extraer la información de autenticación
  const authContext = useContext(AuthContext);
  const { usuarioAutenticado } = authContext;

  useEffect(() => {
    usuarioAutenticado();
    // eslint-disable-next-line
  }, [])

  return (
    <div className="contenedor-app">
      <Sidebar />
      <div className="seccion-principal">
        <HeaderNav />
        <main>
          <FormTarea />
          <div className="contenedor-tareas">
            <ListadoTareas />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Proyectos;
