import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import HomePage from './components/Homepage/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* Navbar will be on top for every page */}
      <Navbar />

      {/* Page-specific content */}
      <Routes>
        {/* <Route path="/" element={<Homepage />} /> */}
        <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/" element={<HomePage />} />
          {/* Add other routes as needed */}
        <Route path="/contactUs" element={<ContactUs />} />
        
      </Routes>

      {/* Footer will be on bottom for every page */}
      <Footer />
    </Router>
  );
}

export default App;
