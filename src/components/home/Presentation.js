import React from 'react';
import presImg from '../../assets/basetemporal.jpg'

const Presentation = () => {
  return (
    <div className='presentation'>
      <div className='contentSection'>
      <img src={presImg}></img>
      <div className="nameProyect">
        <h1>CAUSCARÍ</h1>
        <h3>Paseo ferroviario</h3>
      </div>
      <div className='rectangle'>
        <h3>"Los espacios públicos son lugares donde se pueden experimentar la diversidad cultural y la tolerancia, y donde se pueden construir puentes entre las comunidades"</h3>
        <p>Jamie Lerner</p>
      </div>
    </div>
    </div>
  )
}

export default Presentation