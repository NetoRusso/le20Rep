import React from 'react';
import Style from './Card.module.css';
import Slide from "../Slide"
import site from "../../assets/btn/btn_site.png";
import catalogo from "../../assets/btn/btn_catalogo.png";
import compartilhar from "../../assets/btn/btn_Compartilhar.png";

const Card = ({ titulo, img01, img02, img03, img04, img05, linkSite, linkCatalogo, linkCompartilhar, descricao }) => {
  return (
    <>
      <div className={Style.cardContainer}>
        <h3 className={Style.cardTitle}>{titulo}</h3>
        <div className={Style.cardOverlay}></div>

        <div className={Style.botoesContainer}>
          <a href={linkSite} className={Style.botoesLink}>
            <img src={site} alt="site" className={Style.botoesImagem} />
          </a>
          <a href={linkCatalogo} className={Style.botoesLink}>
            <img src={catalogo} alt="catalogo" className={Style.botoesImagem} />
          </a>
          <a href={linkCompartilhar} className={Style.botoesLink}>
            <img src={compartilhar} alt="compartilhar" className={Style.botoesImagem} />
          </a>
        </div>

        <Slide
          imagem01={img01}
          imagem02={img02}
          imagem03={img03}
          imagem04={img04}
          imagem05={img05}
        />
      </div>

    </>
  );
};


export default Card;
