// 부트스트랩 css 밑에 내 css import
import "./App.css";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import React, { useState } from "react";

import data from "./components/Data";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

// Context
export const DataStateContext = React.createContext();

function App() {
  const [products, setProducts] = useState(data);

  return (
    <DataStateContext.Provider value={products}>
      <BrowserRouter>
        <div className="App">
          <nav>
            <span className="logo">BYCHARI</span>

           <div className="nav_menus">
           </div>
          </nav>
         
          <main>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/detail" element={<Detail />} />
            </Routes>

          </main>
          
        </div>
      </BrowserRouter>
    </DataStateContext.Provider>
  );
}

export default App;
