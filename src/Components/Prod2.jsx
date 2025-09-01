import React from "react";
import ProdCard from "./ProdCard";
import outdoor1 from "../Pages/Images/Products/outdoor1.webp";
import outdoor2 from "../Pages/Images/Products/outdoor2.webp";
import outdoor3 from "../Pages/Images/Products/outdoor3.webp";
import outdoor4 from "../Pages/Images/Products/outdoor4.webp";
import outdoor5 from "../Pages/Images/Products/outdoor5.webp";
import outdoor6 from "../Pages/Images/Products/outdoor6.webp";
import outdoor7 from "../Pages/Images/Products/outdoor7.webp";
import outdoor8 from "../Pages/Images/Products/outdoor8.webp";

const Prod2 = () => {
  return (
    <div className="mt-12">
      <h3 className="text-white">Outdoor Plants</h3>
      <div className="w-[80%] lg:w-[90%] 2xl:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8">
        <ProdCard img={outdoor1}>
          <p>$25</p>
        </ProdCard>
        <ProdCard img={outdoor2}>
          <p>$25</p>
        </ProdCard>
        <ProdCard img={outdoor3}>
          <p>$25</p>
        </ProdCard>
        <ProdCard img={outdoor4}>
          <p>$25</p>
        </ProdCard>
        <ProdCard img={outdoor5}>
          <p>$25</p>
        </ProdCard>
        <ProdCard img={outdoor6}>
          <p>$25</p>
        </ProdCard>
        <ProdCard img={outdoor7}>
          <p>$25</p>
        </ProdCard>
        <ProdCard img={outdoor8}>
          <p>$25</p>
        </ProdCard>
      </div>
    </div>
  );
};

export default Prod2;
