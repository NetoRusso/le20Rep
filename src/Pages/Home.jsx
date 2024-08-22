import React from 'react';
import Chamada from '../Components/Chamada';
import MapaMG from '../Components/Mapa';


const Home = () => {
  document.title = "Le'20";
  return (
    <>
      <Chamada />
      <MapaMG />
    </>
  );
};

export default Home;
