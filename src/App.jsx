import './app.scss'
import {
  Intro,
  Topbar,
  Portfolio,
  Contact,
  Testimonials,
  Works
} from './components';

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Intro />
        <Portfolio/>
        <Works/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
