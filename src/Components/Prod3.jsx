import React from "react";
import ProdCard from "./ProdCard";
import air1 from "../Pages/Images/Products/air1.jpg";
import air2 from "../Pages/Images/Products/air2.jpg";
import air3 from "../Pages/Images/Products/air3.jpg";
import air4 from "../Pages/Images/Products/air4.jpg";

const Prod3 = () => {
  return (
    <div className="mt-12">
      <h3 className="text-white">Air Purifying Plants</h3>
      <div className="w-[80%] lg:w-[90%] 2xl:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8">
        <ProdCard img={air1}>
          <p>$25</p>
        </ProdCard>
        <ProdCard img={air2}>
          <p>$25</p>
        </ProdCard>
        <ProdCard img={air3}>
          <p>$25</p>
        </ProdCard>
        <ProdCard img={air4}>
          <p>$25</p>
        </ProdCard>
      </div>
    </div>
  );
};

export default Prod3;
