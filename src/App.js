import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Fragment, useState } from 'react';
import Formulario from './components/Formulario';

function App() {

  // Creo un state para guardar los asociados

  const [asociados, setAsociados] = useState([]);

  // Funcion para tomar el socio nuevo y meterlo en el state de asociados

  const addSocio = (socio) => {
    setAsociados([
      ...asociados,
      socio
    ]);
  }

  return (
    <Fragment>
      <Container>
        <Row>
          <Col>Club Social y Deportivo</Col>
        </Row>
        <Row>
          <Col>
            <Formulario
              addSocio={addSocio}
            />
          </Col>
          <Col>Listado de Socios</Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
