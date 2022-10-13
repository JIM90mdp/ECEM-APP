import React from 'react';
import './redes.css';
import {IoLogoFacebook, IoLogoInstagram, IoMdPlayCircle} from 'react-icons/io';

function Redes() {
  return (
    <div className='redes'>
      <div className='fb'><IoLogoFacebook size={25} /></div>
      <div className='ig'><IoLogoInstagram size={25}/></div>
      <div className='gmail'><IoMdPlayCircle size={25}/></div>

    </div>
  )
}

export default Redes