import "./App.css";
import { Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Menu from "./Components/Menu/Menu";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Locations from "./Components/Locations/Locations";
import Reservation from "./Components/Reservation/Reservation";
import Order from "./Components/Order/Order";
import ConfirmOrder from "./Components/ConfirmOrder/ConfirmOrder";
import Notfound from "./Components/NotFound/Notfound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="locations" element={<Locations />} />
        <Route path="reservation" element={<Reservation />} />
        <Route path="order" element={<Order />} />
        <Route path="confirm-order" element={<ConfirmOrder />} />
      </Route>

      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default App;
