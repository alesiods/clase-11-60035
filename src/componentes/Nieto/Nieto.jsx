import React from "react";

import { Contexto } from "../../context/context";
import { useContext } from "react";


const Nieto = () => {
  const herencia = useContext(Contexto)


  return (
    <div>
        <p>Mi super herencia es de: {herencia.efectivo}</p>
        <p>Vendi estos departamentos: {herencia.propiedades}</p>
    </div>
  )
}

export default Nieto















/* 
UTILIZANDO EL CONSUMER

import { Contexto } from "../../context/context";

const Nieto = () => {
  return (
    <Contexto.Consumer>
      {(herencia) => (
        <div>
          <p>Herencia: {herencia.efectivo}</p>
          <p>Vehiculos:{herencia.vehiculos}</p>
        </div>
      )}
    </Contexto.Consumer>
  );
};

export default Nieto; */




/* 
UTILIZANDO PROPS:


const Nieto = ({herencia}) => {
  return (
    <div>
            <p>Mi herencia es de: {herencia.efectivo}</p>
            <p>Tengo estos vehiculos: {herencia.vehiculos}</p>
            <p>Hago fiestas en estas casas: {herencia.propiedades}</p>

    </div>
  )
}

export default Nieto */
