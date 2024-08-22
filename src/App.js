import React from 'react';
import BG from './Components/BG';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import Router from './Router';





function App() {
  return (
    <div className="App">
      <Menu />
      <BG />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
