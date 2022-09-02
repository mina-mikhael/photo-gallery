import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
