import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';

// slr
const Formulario = () => {
    return (
        <Fragment>
            <Form>
                <Form.Group>
                    <Form.Label>Nombre de Usuario</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Ingrese su apellido y nombre sin espacios" 
                        name="user"
                    />
                    <Form.Text className="text-muted">
                        Puede utilizar mayúsculas o un "-" para separar.
                    </Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.Label>DNI</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Sin puntos ni espacios"
                        name="dni"
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Ingrese su email" 
                        name="email"
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Utilice números y letras"
                        name="password"
                        />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Registrarse
                </Button>
            </Form>
        </Fragment>
    );
}

export default Formulario;
