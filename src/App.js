import React from 'react';
import { BrowserRouter ,Route, Routes } from "react-router-dom";
import Diskusi from './pages/Diskusi/Diskusi';
import HomeLogin from './pages/HomeLogin/HomeLogin';
import Kategori from './pages/Kategori/Kategori';
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
            <Route path="/HomeLogin/Kategori" element={<Kategori/>}/>
            <Route path="/HomeLogin/Diskusi" element={<Diskusi/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
