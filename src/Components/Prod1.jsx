import React from "react";
import ProdCard from "./ProdCard";
import indoor1 from "../Pages/Images/Products/indoor1.webp";
import indoor2 from "../Pages/Images/Products/indoor2.webp";
import indoor3 from "../Pages/Images/Products/indoor3.webp";
import indoor4 from "../Pages/Images/Products/indoor4.webp";
import indoor5 from "../Pages/Images/Products/indoor5.webp";
import indoor6 from "../Pages/Images/Products/indoor6.webp";
import indoor7 from "../Pages/Images/Products/indoor7.webp";
import indoor8 from "../Pages/Images/Products/indoor8.webp";
import indoor9 from "../Pages/Images/Products/indoor9.webp";
import indoor10 from "../Pages/Images/Products/indoor10.webp";
import indoor11 from "../Pages/Images/Products/indoor11.webp";
import indoor12 from "../Pages/Images/Products/indoor12.webp";

const Prod1 = () => {
  return (
    <div className="mt-12">
      <h3 className="text-white">Indoor Plants</h3>
      <div className="w-[80%] lg:w-[90%] 2xl:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8">
        <ProdCard img={indoor1}>
          <p>$25</p>
        </ProdCard>
        <ProdCard img={indoor2}>
          <p>$25</p>
        </ProdCard>
        <ProdCard img={indoor3}>
          <p>$25</p>
        </ProdCard>
        <ProdCard img={indoor4}>
          <p>$25</p>
        </ProdCard>
        <ProdCard img={indoor5}>
          <p>$25</p>
        </ProdCard>
        <ProdCard img={indoor6}>
          <p>$25</p>
        </ProdCard>
        <ProdCard img={indoor7}>
          <p>$25</p>
        </ProdCard>
        <ProdCard img={indoor8}>
          <p>$25</p>
        </ProdCard>
        <ProdCard img={indoor9}>
          <p>$25</p>
        </ProdCard>
        <ProdCard img={indoor10}>
          <p>$25</p>
        </ProdCard>
        <ProdCard img={indoor11}>
          <p>$25</p>
        </ProdCard>
        <ProdCard img={indoor12}>
          <p>$25</p>
        </ProdCard>
      </div>
    </div>
  );
};

export default Prod1;
