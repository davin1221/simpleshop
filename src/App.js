// 부트스트랩 css 밑에 내 css import
import "./App.css";

import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import React, { useState } from "react";

import data from "./components/Data";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NavBar from "./components/NavBar";

// Context
export const DataStateContext = React.createContext();

function App() {
  const [products, setProducts] = useState(data);

  return (
    <DataStateContext.Provider value={products}>
      <BrowserRouter>
        <div className="App">

          <NavBar />
         
          <main>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/detail/:id" element={<Detail />} />
              
              <Route path="*" element={<div>없는 페이지</div>} />
            </Routes>

          </main>
          
        </div>
      </BrowserRouter>
    </DataStateContext.Provider>
  );
}

export default App;
