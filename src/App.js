import React from 'react';
import MapaMG from './Components/Mapa';
import BG from './Components/BG';
import Chamada from './Components/Chamada';
import Menu from './Components/Menu';

function App() {
    return (
    <div className="App">
      <Menu />
      <BG />
      <Chamada />
      <MapaMG />
    </div>
  );
}

export default App;
