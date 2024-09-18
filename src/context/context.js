import { createContext } from "react";

export const Contexto = createContext(null)


//Pasos para crear le context

//1) Crear el context: puedo darle valor por default
//2) Importar el contexto en la App
//3) Proveer el contexto en el componente App
//4) Consumir el contexto en el componente Nieto