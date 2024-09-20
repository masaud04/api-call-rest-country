import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Services from "./pages/Services";
import AllCountries from "./pages/AllCountries";
import About from "./pages/About";
import NotFound from "./components/NotFound";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import CountryDetails from "./pages/CountryDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/registration" element={<Registration/>} />

          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/all-countries" element={<AllCountries />} />
          <Route path="/about" element={<About />} />
          <Route path="/details/:code" element={<CountryDetails />} />


          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
