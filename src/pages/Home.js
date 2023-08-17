import { useContext } from "react";
import { DataStateContext } from "../App";

import Card from '../components/Card'



const Home = () => {

  const products = useContext(DataStateContext);

  return (
    <>
      <section className="main-bg">
        <img src={process.env.PUBLIC_URL + "/imgs/mainImg.jpeg"} />
      </section>

      <section className="container">
        <div className="row">
          {products.map((it) => (
            <Card data={it} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
