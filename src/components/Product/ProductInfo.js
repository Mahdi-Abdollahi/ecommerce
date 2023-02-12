import { StarIcon } from "@heroicons/react/solid";
import React from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProductInfo = ({ product }) => {
  const { name, price, rating: _rating = 4, description } = product;
  return (
    <div>
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
        {name}
      </h1>

      <div className="mt-3">
        <h2 className="sr-only">Product information</h2>
        <p className="text-3xl text-gray-900">{price}</p>
      </div>

      {/* Reviews */}
      <div className="mt-3">
        <h3 className="sr-only">Reviews</h3>
        <div className="flex items-center">
          <div className="flex items-center">
            {[0, 1, 2, 3, 4].map((rating) => (
              <StarIcon
                key={rating}
                className={classNames(
                  _rating > rating ? "text-indigo-500" : "text-gray-300",
                  "h-5 w-5 flex-shrink-0"
                )}
                aria-hidden="true"
              />
            ))}
          </div>
          <p className="sr-only">{_rating} out of 5 stars</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="sr-only">Description</h3>

        <div
          className="text-base text-gray-700 space-y-6"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
};

export default ProductInfo;
