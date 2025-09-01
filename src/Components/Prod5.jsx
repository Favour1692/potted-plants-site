import React from "react";
import ProdCard from "./ProdCard";
import gift1 from "../Pages/Images/Products/gift1.webp";
import gift2 from "../Pages/Images/Products/gift2.webp";
import gift3 from "../Pages/Images/Products/gift3.webp";
import gift4 from "../Pages/Images/Products/gift4.webp";
import gift5 from "../Pages/Images/Products/gift5.webp";

const Prod5 = () => {
  return (
    <div className="mt-12">
      <h3 className="text-white">Gift Plants</h3>
      <div className="w-[80%] lg:w-[90%] 2xl:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8">
        <ProdCard img={gift1}>
          <p>$25</p>
        </ProdCard>
        <ProdCard img={gift2}>
          <p>$25</p>
        </ProdCard>
        <ProdCard img={gift3}>
          <p>$25</p>
        </ProdCard>
        <ProdCard img={gift4}>
          <p>$25</p>
        </ProdCard>
        <ProdCard img={gift5}>
          <p>$25</p>
        </ProdCard>
      </div>
    </div>
  );
};

export default Prod5;
