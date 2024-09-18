import React from 'react'

/* CONTEXT:

Hasta el momento estivmos trabajndo con datos con las siguientes herramientas:

-manejo de estados con useState
-Las props
////

Que es: 
es una herramienta que me permite crear une stado global, un objeto que almaena la infromacion importante para la aplicaicon y que está disponible desde cualquier componente.

Tiene 3 partes:

-El contexto en Si
-El proveedor de contexto, es un componente que envuelve a toda la app habilitandola para que reciba datos.
-El consumidor de contexto, es un componente que accede a esos datos globales.


*/

import Abuelo from './componentes/Abuelo/Abuelo'
import { Contexto } from './context/context'


const App = () => {

 const herencia = {
  efectivo: 1000000,
  propiedades: 6,
  vehiculos: 10,
 }


  return (
    <div>
      <Contexto.Provider value={herencia}>
      <Abuelo/>
      </Contexto.Provider>
    </div>
  )
}

export default App