import React from 'react';
import { BrowserRouter ,Route, Routes } from "react-router-dom";
import HomeLogin from './pages/HomeLogin/HomeLogin';
import LoginAdmin from './pages/LoginAdmin/LoginAdmin';
// import {NavbarLogin} from "./pages/"

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeLogin/>}/>
            <Route path="/HomeLogin" element={<LoginAdmin/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
