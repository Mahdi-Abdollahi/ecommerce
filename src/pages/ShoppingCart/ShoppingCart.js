import React from "react";
import CartSummery from "../../components/Cart/CartSummery";

import { ProductCart } from "../../components/Cart/ProductCartItem";
import Policy from "../../components/Policy/Policy";

const products = [
  {
    id: 1,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35.00",
    color: "White",
    inStock: true,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg",
    imageAlt: "Insulated bottle with white base and black snap lid.",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    price: "$32.00",
    color: "Sienna",
    inStock: true,
    size: "Large",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in sienna.",
  },
  // More products...
];

const ShoppingCart = () => {
  return (
    <div className="bg-white">
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto pt-16">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
              Shopping Cart
            </h1>

            <form className="mt-12">
              <section aria-labelledby="cart-heading">
                <h2 id="cart-heading" className="sr-only">
                  Items in your shopping cart
                </h2>

                <ul className="border-t border-b border-gray-200 divide-y divide-gray-200">
                  {products.map((product, productIdx) => (
                    <ProductCart product={{ ...product, productIdx }} />
                  ))}
                </ul>
              </section>

              {/* Order summary */}
              <section
                aria-labelledby="summary-heading"
                className="mt-10 sm:ml-32 sm:pl-6"
              >
                <CartSummery />
                <div className="mt-10">
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                  >
                    Checkout
                  </button>
                </div>

                <div className="mt-6 text-sm text-center text-gray-500">
                  <p>
                    or{" "}
                    <a
                      href="#"
                      className="text-indigo-600 font-medium hover:text-indigo-500"
                    >
                      Continue Shopping<span aria-hidden="true"> &rarr;</span>
                    </a>
                  </p>
                </div>
              </section>
            </form>
          </div>
        </div>

        <Policy />
      </main>
    </div>
  );
};

export default ShoppingCart;
