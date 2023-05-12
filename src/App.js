
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './store/';

function App() {
  return (

    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/about' exact />
        </Routes>
        <Hero store={store} />
        <Footer />
      </Router>
    </>

  );
}


export default App;
