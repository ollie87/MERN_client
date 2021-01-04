import React from 'react';

const HeaderNav = () => {
  return (
    <header className="app-header">
      <p className="nombre-usuario">
        Hola <span>Mario</span>
      </p>
      <nav className="nav-principal">
        <a href="#!">Cerrar Sesion</a>
      </nav>
    </header>
  );
};

export default HeaderNav;
