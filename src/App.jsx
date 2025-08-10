import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// Pages
import Home from './Landing/View/Home';
import Aboutus from './Landing/View/Aboutus';
import Pricing from './Landing/View/Pricing';
import Contactus from './Landing/View/Contactus';
import LoginForm from './Landing/View/LoginForm';
import ContactForm from './Landing/View/ContactForm';
import Dashboardb from './Admin/Dashboardb';

// Layout
import Header from './Landing/Component/Header';
import Footer from './Landing/Component/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route path="/ContactForm" element={<ContactForm />} />
        </Route>

        {/* Separate Dashboard route without layout */}
        <Route path="/Dashboardb" element={<Dashboardb />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
