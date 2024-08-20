import React from 'react';
import Style from "./Styles/NossosParceiros.module.css";
import GridCards from "../Components/GrideCards/index.jsx";
import ModalParceiro from "../Components/ModalParceiro/index.jsx";

const NossosParceiros = () => {
  return (
    <div className={Style.pagina}>
      <ModalParceiro />
      <h1 className={Style.titulo}>Nossos Parceiros</h1>
      <GridCards />
    </div>
  );
};

export default NossosParceiros;
