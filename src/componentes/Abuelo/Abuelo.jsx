import React from 'react'
import Padre from '../Padre/Padre'



const Abuelo = ({herencia}) => {
  return (
    <div>
        <Padre herencia= {herencia}/>
    </div>
  )
}

export default Abuelo