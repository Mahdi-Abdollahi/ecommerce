import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CartSummery from "../../components/Cart/CartSummery";

import ProductCartItem from "../../components/Cart/ProductCartItem";
import Policy from "../../components/Policy/Policy";
import {
  addToCart,
  decreaseItem,
  selectCartItems,
} from "../../features/cart/cartSlice";

const ShoppingCart = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  if (!cartItems?.length) {
    return (
      <div className="w-full">
        <div className="h-80 bg-gray-600 rounded-lg mt-auto mx-auto w-6/12 border flex flex-col justify-center items-center">
          <div className=" text-white">NO ITEM ADDED TO CART!!!!</div>
          <div className="mt-6 text-sm text-center text-gray-500">
            <p>
              <Link
                to="/products/all"
                className="text-white font-medium hover:text-indigo-500"
              >
                Continue Shopping<span aria-hidden="true"> &rarr;</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto pt-16">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
              Shopping Cart
            </h1>

            <div className="mt-12">
              <section aria-labelledby="cart-heading">
                <h2 id="cart-heading" className="sr-only">
                  Items in your shopping cart
                </h2>

                <ul className="border-t border-b border-gray-200 divide-y divide-gray-200">
                  {cartItems.map((product, productIdx) => (
                    <ProductCartItem
                      key={product.id}
                      addItem={() => dispatch(addToCart(product))}
                      decreaseItem={() => dispatch(decreaseItem(product.id))}
                      product={{ ...product, productIdx }}
                    />
                  ))}
                </ul>
              </section>

              {/* Order summary */}
              <section
                aria-labelledby="summary-heading"
                className="mt-10 sm:ml-32 sm:pl-6"
              >
                <CartSummery
                  subtotal={cartItems?.reduce(
                    (sum, orderItem) =>
                      sum + orderItem.price * orderItem.amount,
                    0
                  )}
                />
                <div className="mt-10">
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                    onClick={() => navigation("/checkout")}
                  >
                    Checkout
                  </button>
                </div>

                <div className="mt-6 text-sm text-center text-gray-500">
                  <p>
                    or{" "}
                    <Link
                      to="/products/all"
                      className="text-indigo-600 font-medium hover:text-indigo-500"
                    >
                      Continue Shopping<span aria-hidden="true"> &rarr;</span>
                    </Link>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>

        <Policy />
      </main>
    </div>
  );
};

export default ShoppingCart;
