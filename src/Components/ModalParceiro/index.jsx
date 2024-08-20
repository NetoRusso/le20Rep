import React, { useState } from 'react';
import Style from './ModalParceiro.module.css';
import ReactModal from 'react-modal';
import Slide from '../Slide';
import SiteIcon from "../../assets/btn/site_icon.png";
import CatalogoIcon from "../../assets/btn/catalogo_icon.png";
import CompartilharIcon from "../../assets/btn/compartilha_icon.png";

import img01 from "../../assets/Slide/Exemplo01.png";
import img02 from "../../assets/Slide/Exemplo02.png";
import img03 from "../../assets/Slide/Exemplo03.png";
import img04 from "../../assets/Slide/Exemplo04.png";
import img05 from "../../assets/Slide/Exemplo05.png";

const ModalParceiro = () => {
  const [modalIsOpen, setIsOpen] = useState(true);
  return (
    <ReactModal
      isOpen={modalIsOpen}
      closeTimeoutMS={250}
      className={Style.modal}
      contentLabel='Modal'
      style={{
        overlay: {
          backgroundColor: 'var(--cor-1-overlay)',
          zIndex: '20',
        },
      }}
    >
      <button onClick={() => setIsOpen(false)} className={Style.close}>X</button>
      <div className={Style.modalContainer}>
        <h2 className={Style.titulo}>Titulo</h2>
        <div className={Style.conteudo}>
          <div className={Style.slideContainer}>
            <Slide
              imagem01={img01}
              imagem02={img02}
              imagem03={img03}
              imagem04={img04}
              imagem05={img05}
            />
          </div>
          <div className={Style.texto}>
            <p className={Style.descricao}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec imperdiet ultrices, ante mi dapibus enim, quis imperdiet nunc nisi quis enim. Donec velit neque, dapibus nec libero a, sagittis aliquam nunc. Nullam eget nisi commodo, varius metus quis, vestibulum arcu. Morbi ut metus mauris. Aliquam erat volutpat. Nulla facilisi. Donec pulvinar quam vel risus pulvinar, sit amet elementum elit tincidunt. Maecenas ut enim erat.</p>
            <div className={Style.botoes}>
              <a className={Style.botao} href="#">Site <img className={Style.iconBtn} src={SiteIcon} alt="site" /></a>
              <a className={Style.botao} href="#">Catalogo <img className={Style.iconBtn} src={CatalogoIcon} alt="catalogo" /></a>
              <a className={Style.botao} href="#">Compartilhar <img className={Style.iconBtn} src={CompartilharIcon} alt="compartilhar" /></a>
            </div>
          </div>
        </div>
      </div>

    </ReactModal>
  )
};

export default ModalParceiro;
