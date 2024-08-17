import React from 'react';
import Style from './Mapa.module.css';
import Mapa from "../../assets/Mapa02.svg";

const MapaMG = () => {

  return (
    <div className={Style.container}>
      <img src={Mapa} alt="Mapa" className={Style.imagem} />
    </div>
  )

};

export default MapaMG;
