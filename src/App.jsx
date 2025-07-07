import React from 'react'
import "./App.css"
import Home from './Landing/View/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutus from './Landing/View/Aboutus';
import Header from './Landing/Component/Header';
import Footer from './Landing/Component/Footer';
import Pricing from './Landing/View/Pricing';
import Contactus from './Landing/View/Contactus';
import LoginForm from './Landing/View/LoginForm';
import ContactForm from './Landing/View/ContactForm';
// import AdminPanel from '../src/Admin/AdminPanel';
import Dashboardb from './Admin/Dashboardb';
const App = () => {
  return (
    <div>
       {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          {/* <Route  ></> */}
          <Route path="/Aboutus" element={<Aboutus/>}/>
          <Route path="/Pricing" element={<Pricing/>}/>
          <Route path="/Contactus" element={<Contactus/>}/>
          <Route path="/LoginForm" element={<LoginForm/>}/>
          <Route path="/Dashboardb" element={<Dashboardb />} />
          <Route path="/ContactForm" element={<ContactForm/>}/>
        </Routes>
      </BrowserRouter>  
       {/* <Footer/> */}

    </div>
  )
}

export default App