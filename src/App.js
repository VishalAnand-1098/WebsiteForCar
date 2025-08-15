import './App.css';
// import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactUs from './components/ContactUs';
import HomePage from './components/Homepage/Homepage';

function App() {
  return (
    <>
      <Router>
        <Routes>
           {/* <Route path="/" element={<Homepage />} /> */}
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/" element={<HomePage />} />
          {/* Add other routes as needed */}
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
