import React from 'react';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from "../pages/home"
import About from "../pages/about"
import Error from "../pages/errorPage"


function Router() {
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/error" element={<Error/>} />
      </Routes>
    </BrowserRouter>
    );
  }
  
  export default Router;