import './App.css';
import NavBar from './components/NavBarcall';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import HomePage from './components/Homepage/Homepage';
import Blogs from './components/Blogs';
import Onewaycabs from './components/Homepage/Onewaycabs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* Navbar will be on top for every page */}
      <NavBar />

      {/* Page-specific content */}
      <Routes>
        {/* <Route path="/" element={<Homepage />} /> */}
        <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/Onewaycabs" element={<Onewaycabs />} />
          {/* Add other routes as needed */}
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>

      {/* Footer will be on bottom for every page */}
      <Footer />
    </Router>
  );
}

export default App;
