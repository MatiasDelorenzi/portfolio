import './app.scss'
import {
  Intro,
  Topbar,
  Portfolio,
  Contact,
  Testimonials,
  Works,
  Menu
} from './components';
import { useState } from 'react';

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
