import React from 'react';
import { BrowserRouter ,Route, Routes } from "react-router-dom";
import HomeLogin from './pages/HomeLogin/HomeLogin';
import LoginAdmin from './pages/LoginAdmin/LoginAdmin';
import User from './pages/User/User';
// import {NavbarLogin} from "./pages/"

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeLogin/>}/>
            <Route path="/HomeLogin" element={<LoginAdmin/>}/>
            <Route path="/HomeLogin/User" element={<User/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
