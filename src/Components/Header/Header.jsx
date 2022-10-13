import React from 'react';
import "./header.css";
import Redes from '../Redes/Redes';
import NavBar from '../NavBar/NavBar';


export default function Header() {
  return (
    <div className='backgroundImage' >
      <div className='navContenedor'>
        <Redes />
        <NavBar />
      </div>
      <div className='titulo'>ECEM</div>
      <button
        // onClick = {() => onSearch("Buscando ciudad...")}
        className='btnNosotros'
        type = "submit" 
      
      >
        Nosotros
      </button>
    </div>
  )
}

