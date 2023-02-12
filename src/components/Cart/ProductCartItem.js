import React, { memo } from "react";
import { Link } from "react-router-dom";

const ProductCart = ({ product, addItem, decreaseItem }) => {
  return (
    <li className="flex py-6 sm:py-10">
      <div className="flex-shrink-0">
        <img
          src={
            process.env.REACT_APP_ASSETS_URL +
            product.image.data[0].attributes.url
          }
          alt={product.name}
          className="w-24 h-24 rounded-lg object-center object-cover sm:w-32 sm:h-32"
        />
      </div>

      <div className="relative ml-4 min-h-full flex-1 flex flex-col justify-between sm:ml-6">
        <div className="h-full">
          <div className="h-full flex justify-between sm:grid sm:grid-cols-2">
            <div className="pr-6">
              <h3 className="text-sm">
                <Link
                  to={`/product/${product.name}`}
                  className="font-medium text-gray-700 hover:text-gray-800"
                >
                  {product.name}
                </Link>
              </h3>
            </div>
            <div className="flex flex-col">
              <p className="text-sm font-bold text-gray-900 text-right">
                ${product.price.toFixed(2)}{" "}
                <span className="text-green-700">*{product.amount}</span>
              </p>
              <div className="flex align-center ml-auto mt-auto">
                <button
                  className="inline-flex items-center justify-center w-10 h-10 text-white font-bold transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800 disabled:bg-gray-800"
                  onClick={() => decreaseItem(product.id)}
                >
                  -
                </button>
                <div className="p-2 font-bold">{product?.amount}</div>
                <button
                  onClick={() => addItem({ ...product, id: product.id })}
                  disabled={product?.amount >= product?.count}
                  className="inline-flex items-center justify-center w-10 h-10  text-white font-bold transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800 disabled:bg-gray-800"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center sm:block sm:absolute sm:top-0 sm:left-1/2 sm:mt-0">
            <label
              htmlFor={`quantity-${product.productIdx}`}
              className="sr-only"
            >
              Quantity, {product.name}
            </label>
          </div>
        </div>
      </div>
    </li>
  );
};

export default memo(ProductCart);
