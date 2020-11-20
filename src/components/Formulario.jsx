import React, { Fragment, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Col, Alert } from 'react-bootstrap';
import uuid from 'uuid/dist/v4';

// slr
const Formulario = ({ addSocio }) => {

    // Creo un socio vacio y lo inicializo con su state.

    const [socio, setSocio] = useState({
        firstname:"",
        lastname:"",
        dni:"",
        email:"",
        password:""
    });

    //Extraigo los valores del socio

    const { firstname, lastname, dni, email, password } = socio;

    // Creo otro state para el error del formulario

    const [error, setError] = useState(false);

    // Leer lo que se escribe.

    const handleChange = (e) => {
        setSocio({
            ...socio,
            [e.target.name]: e.target.value
        })
    };

    // Funcion para enviar el formulario
    const submitForm = (e) => {
        // No dejo que envie por HTML
        e.preventDefault();
        
        // Validar los campos del formulario
        if (firstname.trim() === "" || lastname.trim() === "" || dni.trim() === "" || email.trim() === "" || password.trim() === "") {
            setError(true);
            return
        }

        // Quitar el mensaje de error
        setError(false);

        // Poner un id al socio
        socio.id = uuid();
        console.log(socio);

        // Enviar el objeto socio
        addSocio(socio);

        // Limpiar el formulario
        setSocio({
            firstname:"",
            lastname:"",
            dni:"",
            email:"",
            password:""
        })
    }

    return (
        <Fragment>
            <Form onSubmit={submitForm} >
                <Form.Row>
                    <Col>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Nombre" 
                            name="firstname"
                            onChange={handleChange}
                            value={firstname}
                        />
                    </Col>
                    <Col>
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Apellido" 
                            name="lastname"
                            onChange={handleChange}
                            value={lastname}
                        />
                    </Col>
                </Form.Row>

                <Form.Group>
                    <Form.Label>DNI</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Sin puntos ni espacios"
                        name="dni"
                        onChange={handleChange}
                        value={dni}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Ingrese su email" 
                        name="email"
                        onChange={handleChange}
                        value={email}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Utilice números y letras"
                        name="password"
                        onChange={handleChange}
                        value={password}
                        />
                </Form.Group>
                
                <Button 
                    variant="primary" 
                    type="submit"
                >
                    Registrarse
                </Button>

                {error
                    ? <Alert variant="danger">Debes completar todos los campos</Alert>
                    : null
                }
            </Form>
        </Fragment>
    );
}

export default Formulario;
