import React from 'react'
import {Form} from "react-bootstrap";

export default function Componente4(props) {
  return (
    <div>
        <Form.Group className="mb-3">
        <Form.Label>{props.nom}</Form.Label>
        <Form.Control placeholder="Ingresar nombre" enabled />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>{props.correo}</Form.Label>
        <Form.Select enabled>
          <option>tucorreo@ejemplo.com</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>{props.celular}</Form.Label>
        <Form.Select enabled>
          <option>Ingresar </option>
        </Form.Select>
      </Form.Group>
      
    </div>
  )
}
