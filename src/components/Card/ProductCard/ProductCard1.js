import React from "react";
import { Link } from "react-router-dom";

const ProductCard1 = ({ product }) => {
  const {
    href,
    imageAlt,
    imageSrc = process.env.PUBLIC_URL + "/images/product.jpg",
    name,
    price,
  } = product;
  return (
    <div>
      <Link to={href} className="block group text-sm h-full w-full">
        <div className="w-full h-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100 group-hover:opacity-75">
          <img
            src={process.env.REACT_APP_ASSETS_URL + imageSrc}
            alt={imageAlt}
            className="w-full h-full object-center object-cover"
          />
        </div>
        <h3 className="mt-4 font-medium text-gray-900">{name}</h3>
        {/* <p className="text-gray-500 italic">{availability}</p> */}
        <p className="mt-2 font-medium text-gray-900">{price}</p>
      </Link>
    </div>
  );
};

export default ProductCard1;
