
import Header from './components/Header/HeaderTop';
import Footer from './components/Footer/FooterTop';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Leaders from './pages/Leaders/Leaders';
import Tracks from './pages/Tracks/Tracks';
import Events from './pages/Events/Events';




function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leadership" element={<Leaders />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/events" element={<Events />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
