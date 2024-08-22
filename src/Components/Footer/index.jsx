import React from 'react';
import Style from "./Footer.module.css";
import Logo from "../../assets/Le20_Logo_Cor_1.svg";
import Local from "../../assets/local.png";

const Footer = () => {
  return (
    <footer className={Style.footer}>
      <div className={Style.detalhe}></div>
      <div className={Style.container}>
      <img src={Logo} alt="Le20 Logo" className={Style.logo}/>
      <div className={Style.social}>
        <div className={Style.endereco}>
          <a href='https://maps.app.goo.gl/TwJpUVbYQoNW5GbT9' title='Google Maps' target='_blank'/>
          <img src={Local} alt="Localização" className={Style.local}/>
          <p className={Style.enderecoEscritorio}>
            Rua Marcos Alves Barbosa, 115 - B. Santa Luzia -<br/> Uberlândia - MG- 38.408-696
          </p>
        </div>
      </div>
      </div>
    </footer>
  )
};

export default Footer;
