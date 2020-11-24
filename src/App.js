import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Fragment, useEffect, useState } from 'react';
import Formulario from './components/Formulario';
import Socio from './components/Socio';

function App() {

  // Inicializar el Local Storage
  let sociosIniciales = JSON.parse(localStorage.getItem('storageAsociados'));
  if (!sociosIniciales) {
    sociosIniciales = []
  };

  // Creo un state para guardar los asociados

  const [asociados, setAsociados] = useState(sociosIniciales);

  // Hook useEffect. Sirve para ejecutar algo cuando se produce un cambio de estado

  useEffect(() => {
    if (sociosIniciales) {
      localStorage.setItem('storageAsociados', JSON.stringify(asociados));
    } else {
      localStorage.setItem('storageAsociados', []);
    }
  }, [sociosIniciales]);

  // Funcion para tomar el socio nuevo y meterlo en el state de asociados

  const addSocio = (socio) => {
    setAsociados([
      ...asociados,
      socio
    ]);
  }

  // Funcion para borrar el socio
  const removeSocio = (id) => {
    const nuevosSocios = asociados.filter(socio => socio.id !== id);
    setAsociados(nuevosSocios);
  }

  // Setear el titulo de los asociados
  let tituloAsociados = asociados.length === 0? <p>Aún no hay socios</p> : <p>Listado de socios</p>;

  return (
    <Fragment>
      <h3>Club Social y Deportivo</h3>
      <Container>
        <div>
          <Row>
            <Col>
              <Formulario
                addSocio={addSocio}
              />
            </Col>
            <Col>
              {tituloAsociados}
    
              {asociados.map(socio => 
                <p>
                  <Socio
                    socio= {socio}
                    key= {socio.id}
                    removeSocio = {removeSocio}
                  />  
                </p>
              )}
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
}

export default App;
