import React from "react";
import { Link } from "react-router-dom";

const ProductCard2 = ({ product }) => {
  const {
    imageSrc = process.env.PUBLIC_URL + "/images/product.jpg",
    imageAlt,
    name,
    price,
    href,
  } = product;
  return (
    <div>
      <Link to={href}>
        <div className="relative">
          <div className="relative w-full h-72 rounded-lg overflow-hidden">
            <img
              src={process.env.REACT_APP_ASSETS_URL + imageSrc}
              alt={imageAlt}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="relative mt-4">
            <h3 className="text-sm font-medium text-gray-900">{name}</h3>
          </div>
          <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
            />
            <p className="relative text-lg font-semibold text-white">{price}</p>
          </div>
        </div>
      </Link>
      <div className="mt-6">
        <button
          // href={href}
          className="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200"
        >
          Add to bag
          <span className="sr-only">, {name}</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard2;
