import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "../Pages/Home";
import NossosParceiros from '../Pages/NossosParceiros';
import Parceiro from '../Pages/Parceiro';
import Contatos from '../Pages/Contatos';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nossosParceiros" element={<NossosParceiros />} />
      <Route path="/nossosParceiros/:id" element={<Parceiro />} />
      <Route path='/contatos' element={<Contatos />} />
    </Routes>
  )
};

export default Router;
