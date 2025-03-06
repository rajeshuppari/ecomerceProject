import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./navbar/Navbar";
import Shop from "./pages/Shop";
import Womens from "./pages/Womens";
import Mens from "./pages/Mens";
import men_banner from "../src/component/assets/photos/banner_mens.png";
import women_banner from "../src/component/assets/photos/banner_women.png";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Footer from "./footer/Footer";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<Mens image={men_banner} />} />
          <Route path="/womens" element={<Womens image={women_banner} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/project" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
