import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Fragment } from 'react';
import Formulario from './components/Formulario';

function App() {
  return (
    <Fragment>
      <Container>
        <Row>
          <Col>Club Social y Deportivo</Col>
        </Row>
        <Row>
          <Col>
            <Formulario/>
          </Col>
          <Col>Listado de Socios</Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
