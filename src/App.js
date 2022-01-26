import React from 'react';
import { BrowserRouter ,Route, Routes } from "react-router-dom";
import Diskusi from './pages/Diskusi/Diskusi';
import HomeLogin from './pages/HomeLogin/HomeLogin';
import Kategori from './pages/Kategori/Kategori';
import LoginAdmin from './pages/LoginAdmin/LoginAdmin';
import User from './pages/User/User'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from "./redux/store";import Message from './pages/Message/Message';
;
// import {NavbarLogin} from "./pages/"

function App() {
  return (
    <div >
      <Provider store={store}>
      <PersistGate persistor={persistor}>
      <BrowserRouter>
        <Routes>
            <Route path="/Login" element={<HomeLogin/>}/>
            <Route path="/HomeLogin" element={<LoginAdmin/>}/>
            <Route path="/HomeLogin/User" element={<User/>}/>
            <Route path="/HomeLogin/Kategori" element={<Kategori/>}/>
            <Route path="/HomeLogin/Diskusi" element={<Diskusi/>}/>
            <Route path="/HomeLogin/Message" element={<Message/>}/>
        </Routes>
      </BrowserRouter>
      </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
