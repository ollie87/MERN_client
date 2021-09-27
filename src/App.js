import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/proyectos/Proyectos';
import ProyectoState from './contexts/proyectos/proyectoState';
import TareaState from './contexts/tareas/tareaState';
import AlertaState from './contexts/alertas/alertaState';

function App() {
  return (
    <ProyectoState>
      <TareaState>
        <AlertaState>
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
              <Route exact path="/proyectos" component={Proyectos} />
            </Switch>
          </Router>
        </AlertaState>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
