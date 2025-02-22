"use client";
import React, { useState } from "react";
import products from "./products.json";

const ProductCard = ({ product }) => {
  const stars = Math.round(product.rating);
  return (
    <div className="p-3">
      <div className="w-[295px] h-[298px] max-sm:w-[198px] max-sm:h-[200px]   relative bg-[#f0eeed] rounded-[20px] overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full"
        />
      </div>
      <div className="pt-2">
        <span className="text-black text-xl max-sm:text-lg font-bold font-['Satoshi']">
          {product.title}
        </span>
      </div>
      <div className="h-[19px] flex items-center gap-[13px] pt-1 ">
        <div className="flex">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill={index < stars ? "#FFC633" : "#E0E0E0"}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>
        <div>
          <span className="text-black text-sm font-normal font-['Satoshi']">
            {product.rating.toFixed(1)}/
          </span>
          <span className="text-black/60 text-sm font-normal font-['Satoshi']">
            5
          </span>
        </div>
      </div>
      <div className="h-8 justify-start items-center gap-2.5 inline-flex pt-4">
        <div className="text-black text-2xl font-bold font-['Satoshi']">
          ${product.price}
        </div>
        {product.oldPrice && (
          <div className="text-black/40 text-2xl font-bold font-['Satoshi'] line-through">
            ${product.oldPrice}
          </div>
        )}
        {product.discount && (
          <div className="h-7 px-3.5 py-1.5 bg-[#ff3333]/10 rounded-[62px] justify-center items-center gap-3 flex overflow-hidden">
            <div className="text-[#ff3333] text-xs font-medium font-['Satoshi']">
              {product.discount}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ProductGrid = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  const showLess = () => {
    setVisibleCount(4);
  };

  return (
    <>
      <div className="pt-20 pb-10  text-center text-black text-5xl font-bold font-['Integral CF']">
        NEW ARRIVALS
      </div>
      <div className="flex flex-wrap max-sm:flex-nowrap justify-center max-sm:justify-start">
        {products.slice(0, visibleCount).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center items-center pt-6 pb-16">
        {visibleCount < products.length ? (
          <button
            onClick={loadMore}
            className="w-[218px] h-[52px] py-4 px-[54px] rounded-[62px] border border-black/10 justify-center items-center gap-3 inline-flex overflow-hidden"
          >
            <div className="text-black text-base font-medium font-['Satoshi']">
              View All
            </div>
          </button>
        ) : (
          <button
            onClick={showLess}
            className="w-[218px] h-[52px] p-4 px-[54px] rounded-[62px] border border-black/10 justify-center items-center gap-3 inline-flex overflow-hidden"
          >
            <div className="text-black text-base font-medium font-['Satoshi']">
              View Less
            </div>
          </button>
        )}
      </div>
      <div className="border border-black/10"></div>
    </>
  );
};

export default ProductGrid;
