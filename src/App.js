
import React, { Fragment } from 'react'
import Formulario from './componentes/Formulario';
function App() {
  return (
    <Fragment>
    <div className="App">
      <h1>Administrador de pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
           <Formulario />      
          </div>
          <div className="one-half column">
           2 
          </div>
        </div>
      </div>
    </div>
    </Fragment>
          );
}

          export default App;
