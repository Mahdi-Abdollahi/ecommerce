import React from "react";
import { Link } from "react-router-dom";

const CategoryCard2 = ({ category }) => {
  const { name, description, href, imageSrc, imageAlt } = category;
  return (
    <div>
      <Link key={name} to={href} className="group block">
        <div
          aria-hidden="true"
          className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-center object-cover"
          />
        </div>
        <h3 className="mt-4 text-base font-semibold text-gray-900">{name}</h3>
        <p className="mt-2 text-sm text-gray-500">{description}</p>
      </Link>
    </div>
  );
};

export default CategoryCard2;
