import React from 'react';
import AltBilgi from './components/AltBilgi/AltBilgi';
import HomePage from './pages/HomePage/HomePage';
import KayitOl from './pages/KayitOl/KayitOl';
import KenarCubuk from './pages/KenarCubuk/KenarCubuk';
import OturumAc from './pages/OturumAc/OturumAc';
import Icerik from './pages/Icerik/Icerik';

function App() {
  return (
    <div>
      <AltBilgi />
      <HomePage />
      <KayitOl />
      <KenarCubuk />
      <OturumAc />
      <Icerik />
    </div>
  );
}

export default App;
