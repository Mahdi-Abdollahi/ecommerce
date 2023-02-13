import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "All Products",
    href: "/products/all",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-hero-full-width.jpg",
    imageAlt:
      "Brown leather key ring with brass metal loops and rivets on wood table.",
    description:
      "Keep your phone, keys, and wallet together, so you can lose everything at once.",
  },
  {
    name: "Women",
    href: "/products/women",
    imageSrc:
      "https://i0.wp.com/www.society19.com/wp-content/uploads/2019/05/becca-mchaffie-580884-unsplash-1.jpg?w=768&ssl=1",
    imageAlt:
      "Natural leather mouse pad on white desk next to porcelain mug and keyboard.",
    description:
      "The rest of the house will still be a mess, but your desk will look great.",
  },
];

export const Category3 = () => {
  return (
    <>
      <div
        style={{ height: "92vh" }}
        className="grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2"
      >
        {categories.map((category) => (
          <div key={category.id} className="relative flex">
            <img
              src={category.imageSrc}
              alt={category.imageAlt}
              className="absolute inset-0 w-full h-full object-center object-cover"
            />
            <div className="relative w-full flex flex-col items-start justify-end bg-black bg-opacity-40 p-8 sm:p-12">
              <h2 className="text-lg font-medium text-white text-opacity-75">
                {category.name}
              </h2>
              <p className="mt-1 text-2xl font-medium text-white">
                {category.description}
              </p>
              <Link
                to={category.href}
                className="mt-4 text-sm font-medium text-gray-900 bg-white py-2.5 px-4 rounded-md hover:bg-gray-50"
              >
                Shop now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

/* This example requires Tailwind CSS v2.0+ */
