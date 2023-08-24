import { useContext, useEffect, useState } from "react";
import { DataStateContext } from "../App";
import axios from "axios";

import Card from '../components/Card'



const Home = () => {

  const products = useContext(DataStateContext);



  return (
    <div className="Home">
      

      <section className="main-bg">
        <img src={process.env.PUBLIC_URL + "/imgs/mainImg.jpeg"} />
      </section>

      <section className="card_container">
          {products.map((it) => (
             <Card data={it}/>
          ))}
      </section>

     
    </div>
  );
};

export default Home;
