"use client";
import React, { useState } from "react";
import products from "./products.json";
import ProductCard from "../ui/ProductCard";

export default function Arrivals() {
  const [visibleCount, setVisibleCount] = useState(4);

  const toggleView = () => {
    setVisibleCount((prev) => (prev < products.length ? prev + 4 : 4));
  };

  const isShowingAll = visibleCount >= products.length;

  return (
    <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="pt-12 sm:pt-20 pb-6 sm:pb-10 text-center text-3xl sm:text-4xl lg:text-5xl font-bold font-['Integral_CF'] text-black">
        NEW ARRIVALS
      </h2>

      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:overflow-visible sm:gap-5 sm:place-items-center">
        {products.slice(0, visibleCount).map((product) => (
          <div key={product.id} className="snap-start flex-shrink-0 sm:flex-shrink sm:w-full">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center pt-6 pb-10 sm:pb-16">
        <button
          onClick={toggleView}
          className="h-[52px] px-12 rounded-full border border-black/10 text-black text-base font-medium hover:bg-black hover:text-white transition-colors duration-300"
        >
          {isShowingAll ? "View Less" : "View All"}
        </button>
      </div>

      <div className="border-t border-black/10" />
    </section>
  );
}
