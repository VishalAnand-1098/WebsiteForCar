import './App.css';
// import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <>
      <Router>
        <Routes>
           {/* <Route path="/" element={<Homepage />} /> */}
          <Route path="/navbar" element={<Navbar />} />..
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
