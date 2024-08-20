import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "../Pages/Home";
import NossosParceiros from '../Pages/NossosParceiros';
import Parceiro from '../Pages/Parceiro';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nossosParceiros" element={<NossosParceiros />} />
      <Route path="/nossosParceiros/:id" element={<Parceiro />} />
    </Routes>
  )
};

export default Router;
