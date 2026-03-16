"use client";
import React from "react";

const StarIcon = ({ filled }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill={filled ? "#FFC633" : "#E0E0E0"} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
  </svg>
);

const StarRating = ({ rating }) => {
  const stars = Math.round(rating);
  return (
    <div className="flex items-center gap-3">
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} filled={i < stars} />
        ))}
      </div>
      <span className="text-sm font-normal">
        <span className="text-black">{rating.toFixed(1)}/</span>
        <span className="text-black/60">5</span>
      </span>
    </div>
  );
};

const DiscountBadge = ({ discount }) => (
  <div className="h-7 px-3.5 py-1 bg-[#ff3333]/10 rounded-full flex items-center">
    <span className="text-[#ff3333] text-xs font-medium">{discount}</span>
  </div>
);

export default function ProductCard({ product }) {
  return (
    <article className="group cursor-pointer w-[200px] sm:w-full">
      <div className="aspect-square relative bg-[#f0eeed] rounded-2xl overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="mt-3 space-y-1.5">
        <h3 className="text-base sm:text-lg font-bold text-black leading-tight">
          {product.title}
        </h3>

        <StarRating rating={product.rating} />

        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="text-xl sm:text-2xl font-bold text-black">
            ${product.price}
          </span>
          {product.oldPrice && (
            <span className="text-xl sm:text-2xl font-bold text-black/40 line-through">
              ${product.oldPrice}
            </span>
          )}
          {product.discount && <DiscountBadge discount={product.discount} />}
        </div>
      </div>
    </article>
  );
}
