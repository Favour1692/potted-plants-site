import React from "react";
import ProdCard from "./ProdCard";
import hang1 from "../Pages/Images/Products/hang1.webp";
import hang2 from "../Pages/Images/Products/hang2.webp";
import hang3 from "../Pages/Images/Products/hang3.webp";
import hang4 from "../Pages/Images/Products/hang4.webp";
import hang5 from "../Pages/Images/Products/hang5.webp";
import hang6 from "../Pages/Images/Products/hang6.webp";

const Prod4 = () => {
  return (
    <div className="mt-12">
      <h3 className="text-white">Hanging Plants</h3>
      <div className="w-[80%] lg:w-[90%] 2xl:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8">
        <ProdCard img={hang1}>
          <p>$25</p>
        </ProdCard>
        <ProdCard img={hang2}>
          <p>$25</p>
        </ProdCard>
        <ProdCard img={hang3}>
          <p>$25</p>
        </ProdCard>
        <ProdCard img={hang4}>
          <p>$25</p>
        </ProdCard>
        <ProdCard img={hang5}>
          <p>$25</p>
        </ProdCard>
        <ProdCard img={hang6}>
          <p>$25</p>
        </ProdCard>
      </div>
    </div>
  );
};

export default Prod4;
