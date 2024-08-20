import React from 'react';
import Style from "./Styles/Parceiro.module.css";
import { useParams } from 'react-router-dom';

const Parceiro = () => {
    const { id } = useParams();
    console.log( "params", id );
    return (
        <div>
            E la vamos Nós
        </div>
    )
};

export default Parceiro;
