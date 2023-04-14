import React from "react";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <section className="homeInner">
        <h3>Products</h3>
        <div className="underline"></div>
        <Products />
      </section>
    </div>
  );
};

export default Home;
