import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Productos from './pages/Productos';
import SobreNosotros from './pages/SobreNosotros';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
      </Routes>
    </Router>
  );
}

export default App;
