import React from 'react';
import Style from "./Footer.module.css";
import Logo from "../../assets/Le20_Logo_Cor_1.svg";
import Local from "../../assets/local_square.png";
import instagram from "../../assets/instagram.svg";
import whatsapp from "../../assets/whatsapp.svg";
import Donuts from "../../assets/Logo H.png";

const Footer = () => {
  return (
    <footer className={Style.footer}>
      <div className={Style.detalhe}></div>
      <div className={Style.container}>
        <img src={Logo} alt="Le20 Logo" className={Style.logo} />
        <div className={Style.social}>
          <div className={Style.endereco}>
            <a href='https://maps.app.goo.gl/TwJpUVbYQoNW5GbT9' title='Google Maps' target='_blank' />
            <img src={Local} alt="Localização" className={Style.local} />
            <p className={Style.enderecoEscritorio}>
              Rua Marcos Alves Barbosa, 115 - B. Santa Luzia -Uberlândia - MG- 38.408-696
            </p>
          </div>
          <div className={Style.rede}>
            <a href="#">
              <img src={whatsapp} alt="Whatsapp" className={Style.redeLogo} />
            </a>
            <p className={Style.redeTexto}>(34) 9.9127-8990</p>
          </div>
          <div className={Style.rede}>
            <a href='https://www.instagram.com/le20rep/' title='Instagram' target='_blank'>
              <img src={instagram} alt="Instagram" className={Style.redeLogo} />
            </a>
            <p className={Style.redeTexto}>@le20rep</p>
          </div>
        </div>
        <div className={Style.copy}>
          <p className={Style.compyTexto}>Todos os direitos Reservados <br />||© 2024 Le'20 representações</p>
          <div className={Style.donuts}>
            <a href='https://www.donutstech.com.br/' title='Donuts Tech' target='_blank'>
              <img src={Donuts} alt="Donuts" className={Style.donutsLogo} />
            </a>
            <p className={Style.donutsTexto}>Feito com muito amor e açucar!</p>
          </div>
        </div>
      </div>
    </footer >
  )
};

export default Footer;
