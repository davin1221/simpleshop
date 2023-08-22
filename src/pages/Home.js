import { useContext } from "react";
import { DataStateContext } from "../App";

import Card from '../components/Card'

import { Link } from "react-router-dom";



const Home = () => {

  const products = useContext(DataStateContext);

  return (
    <div className="Home">
      <section className="main-bg">
        <img src={process.env.PUBLIC_URL + "/imgs/mainImg.jpeg"} />
      </section>

      <section className="card_container">
          {products.map((it) => (
             <Card data={it} />
          ))}
      </section>
    </div>
  );
};

export default Home;
