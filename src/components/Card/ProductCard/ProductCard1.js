import React from "react";

const ProductCard1 = ({ product }) => {
  const { id, href, imageAlt, imageSrc, name, price, availability } = product;
  return (
    <div>
      <a key={id} href={href} className="group text-sm">
        <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100 group-hover:opacity-75">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-center object-cover"
          />
        </div>
        <h3 className="mt-4 font-medium text-gray-900">{name}</h3>
        <p className="text-gray-500 italic">{availability}</p>
        <p className="mt-2 font-medium text-gray-900">{price}</p>
      </a>
    </div>
  );
};

export default ProductCard1;
