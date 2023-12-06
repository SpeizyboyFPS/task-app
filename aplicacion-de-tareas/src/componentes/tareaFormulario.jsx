import React, {useState} from "react";
import {v4 as uuidv4} from 'uuid';
import '../stylesheets/tarea-formulario.css';
import { im } from "mathjs";

function TareaFormulario(props) {
const [input,setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value)
  };

const manejarEnvio = e => {

  e.preventDefault();
  const tareaNueva = {
    id: uuidv4(),
    texto: input,
    completada: false
  }
  props.onSubmit(tareaNueva);
};

  return (
    <form className="tarea-formulario"
    onSubmit={manejarEnvio}>
      <input type="text" 
      className="tarea-input" 
      placeholder="Escribe una Tarea"
      name="texto"
      onChange={manejarCambio} />
      <button className="tarea-btn">Agregar Tarea</button>
    </form>
  )
}

export default TareaFormulario;