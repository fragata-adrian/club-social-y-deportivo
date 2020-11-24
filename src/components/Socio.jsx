import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge, Button } from 'react-bootstrap';

const Socio = ({ socio, removeSocio }) => {

    const {id, firstname, lastname, dni, email} = socio;
    return (
        <Fragment>
            <Badge variant='secondary'>
                <p>Socio: {id}</p>
                <p>Nombre: {firstname}</p>
                <p>Apellido: {lastname}</p>
                <p>DNI: {dni}</p>
                <p>Correo electrónico: {email}</p>
                <Button variant='light' onClick = {() => removeSocio(socio.id)}>
                    Borrar Socio
                </Button>
            </Badge>
        </Fragment>
    );
}

export default Socio;