import { CheckIcon, ClockIcon } from "@heroicons/react/solid";
import React from "react";

export const ProductCart = ({ product }) => {
  const {
    imageAlt,
    imageSrc,
    href,
    name,
    color,
    size,
    price,
    inStock,
    leadTime,
    productIdx,
  } = product;
  return (
    <li className="flex py-6 sm:py-10">
      <div className="flex-shrink-0">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-24 h-24 rounded-lg object-center object-cover sm:w-32 sm:h-32"
        />
      </div>

      <div className="relative ml-4 flex-1 flex flex-col justify-between sm:ml-6">
        <div>
          <div className="flex justify-between sm:grid sm:grid-cols-2">
            <div className="pr-6">
              <h3 className="text-sm">
                <a
                  href={href}
                  className="font-medium text-gray-700 hover:text-gray-800"
                >
                  {name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{color}</p>
              {size ? (
                <p className="mt-1 text-sm text-gray-500">{size}</p>
              ) : null}
            </div>

            <p className="text-sm font-medium text-gray-900 text-right">
              {price}
            </p>
          </div>

          <div className="mt-4 flex items-center sm:block sm:absolute sm:top-0 sm:left-1/2 sm:mt-0">
            <label htmlFor={`quantity-${productIdx}`} className="sr-only">
              Quantity, {name}
            </label>
            <select
              id={`quantity-${productIdx}`}
              name={`quantity-${productIdx}`}
              className="block max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
            </select>

            <button
              type="button"
              className="ml-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:ml-0 sm:mt-3"
            >
              <span>Remove</span>
            </button>
          </div>
        </div>

        <p className="mt-4 flex text-sm text-gray-700 space-x-2">
          {inStock ? (
            <CheckIcon
              className="flex-shrink-0 h-5 w-5 text-green-500"
              aria-hidden="true"
            />
          ) : (
            <ClockIcon
              className="flex-shrink-0 h-5 w-5 text-gray-300"
              aria-hidden="true"
            />
          )}

          <span>{inStock ? "In stock" : `Ships in ${leadTime}`}</span>
        </p>
      </div>
    </li>
  );
};
