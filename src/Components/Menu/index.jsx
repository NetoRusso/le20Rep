import React, { useState } from 'react';
import Style from "./Menu.module.css";
import Logo_Le20 from "../../assets/Le20_Logo_Cor_1.svg";
import Instagram from "../../assets/instagram.svg";
import Whatsapp from "../../assets/whatsapp.svg";
import hamburger from "../../assets/isoLe20.png";
import Logo_le20_mobile from "../../assets/Le20_Logo_Cor_6.png";

const Menu = () => {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
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
        {/* menu mobile */}
        <div className={`${showMenu ? Style.fundoModal : ''} `} onClick={toggleMenu}></div>
        <div className={`${Style.baseMobileFechado} ${showMenu ? Style.baseMobile : ''}`}>
          <div className={Style.closeMobile} onClick={toggleMenu}>
            <p className={Style.closeIcon}>X</p>
          </div>
          <img src={Logo_le20_mobile} alt="Logo Le20" className={Style.logoMobile} />
          <nav className={Style.navegacaoMobile}>
            <ul className={Style.listaMenuMobile}>
              <li className={Style.itemMobile}>
                <a href="/">
                  Le'20
                </a>
              </li>
              <li className={Style.itemMobile}>
                <a href="/nossosParceiros">
                  Nossos Parceiros
                </a>
              </li>
              <li className={Style.itemMobile}>
                <a href="/contatos">
                  Contatos
                </a>
              </li>
              </ul>
          </nav>
          <div className={Style.redesMobile}>
            <a href="#" target='_blank' className={Style.linkRedeMobile}>
              <img src={Instagram} alt="Instagram" className={Style.redeMobile} />
            </a>
            <a href="#" target='_blank' className={Style.linkRedeMobile}>
              <img src={Whatsapp} alt="Whatsapp" className={Style.redeMobile} />
            </a>
          </div>
          {/* <img src={Logo_Le20} alt="Logo Le20" className={Style.logoMobile} />
          <nav className={Style.navegacaoMobile}>
            <ul className={Style.listaMenuMobile}>
              <li className={Style.itemMobile}>
                <a href="/">
                  Le'20
                </a>
              </li>
              <li className={Style.itemMobile}>
                <a href="/nossosParceiros">
                  Nossos Parceiros
                </a>
              </li>
              <li className={Style.itemMobile}>
                <a href="/contatos">
                  Contatos
                </a>
              </li>
            </ul>
          </nav>
          <div className={Style.redesMobile}>
            <a href="#" target='_blank' className={Style.linkRedeMobile}>
              <img src={Instagram} alt="Instagram" className={Style.redeMobile} />
            </a>
            <a href="#" target='_blank' className={Style.linkRedeMobile}>
              <img src={Whatsapp} alt="Whatsapp" className={Style.redeMobile} />
            </a>
          </div> */}
        </div>
        <div className={Style.menuMobile} onClick={toggleMenu}>
          <img src={hamburger} alt="Menu" className={Style.hamburger} />
        </div>
      </header>
    </>
  )
};

export default Menu;
