import React from 'react';
import Style from "./BG.module.css";
import Video from "../../assets/Video/5463610_Coll_wavebreak_Digital Animation_1280x720.mp4";


const BG = () => {
  return (
    <div className={Style.container}>

      
      <video muted loop autoPlay className={Style.video}>
        <source src={Video} type="video/mp4" />
        seu navegador não suporta o elemento video
      </video>
      <div className={Style.ajuste}></div>
    </div>
  )
};

export default BG;
