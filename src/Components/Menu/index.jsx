import React from 'react';
import Style from "./Menu.module.css";
import Logo_Le20 from "../../assets/Le20_Logo_Cor_1.svg";
import Instagram from "../../assets/instagram.svg";
import Whatsapp from "../../assets/whatsapp.svg";

const Menu = () => {
  return (
    <header className={Style.container}>
      <div className={Style.barra}>
        <img src={Logo_Le20} alt="Logo Le20" className={Style.logo} />
        <nav className={Style.navegacao}>
          <ul className={Style.listaMenu}>
            <li className={Style.item}>
              <a href="/">
                Le'20
              </a>
            </li>
            <li className={Style.item}>
              <a href="/nossosParceiros">
                Nossos Parceiros
              </a>
            </li>
            <li className={Style.item}>
              <a href="/contatos">
                Contatos
              </a>
            </li>
          </ul>
        </nav>
        <div className={Style.redes}>
          <a href="#" target='_blank' className={Style.linkRede}>
            <img src={Instagram} alt="Instagram" className={Style.rede} />
          </a>
          <a href="#" target='_blank' className={Style.linkRede}>
            <img src={Whatsapp} alt="Whatsapp" className={Style.rede} />
          </a>
        </div>
      </div>
    </header>
  )
};

export default Menu;
