import React, { memo, useContext, useEffect } from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import { MenuIcon, XIcon, ShoppingBagIcon } from "@heroicons/react/outline";

import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategories,
  selectAllCategory,
} from "../../features/category/categorySlice";
import { selectCartItems } from "../../features/cart/cartSlice";
import { AuthContext } from "../../context/AuthContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const { logout, user } = useContext(AuthContext);
  const dispatch = useDispatch();
  const categories = useSelector(selectAllCategory);
  const cartItems = useSelector(selectCartItems);
  const cartTotalAmount = cartItems?.reduce(
    (sum, orderItem) => sum + orderItem.amount,
    0
  );
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);
  const selectedCategory = useParams().id;
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex items-center px-2 lg:px-0">
                <div className="flex-shrink-0">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden lg:block lg:ml-6">
                  <div className="flex space-x-4">
                    {selectedCategory === "Home" ? (
                      <Link
                        to="/"
                        className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Home
                      </Link>
                    ) : (
                      <Link
                        to="/"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Home
                      </Link>
                    )}

                    {categories.map((category) => {
                      const {
                        attributes: { name },
                      } = category;

                      if (selectedCategory === name) {
                        return (
                          <Link
                            key={category.id}
                            to={`/products/${name}`}
                            className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                          >
                            {category.attributes.name}
                          </Link>
                        );
                      }
                      return (
                        <Link
                          key={category.id}
                          to={`/products/${name}`}
                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                          {category.attributes.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
                <div className="max-w-lg w-full lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <SearchIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
                <Link
                  to="/cart"
                  className="relative ml-auto flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
                  <span className="absolute top-0 bg-violet-600 rounded-full px-1 text-xs text-white font-bold">
                    {cartItems && cartTotalAmount}
                  </span>
                </Link>
              </div>
              <div className="flex lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:block lg:ml-4">
                <div className="flex items-center">
                  {/* <button
                    type="button"
                    className="flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">View notifications</span>
                    <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
                  </button> */}

                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-4 relative flex-shrink-0">
                    <div>
                      <Menu.Button className="bg-gray-800 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/profile"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={logout}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {selectedCategory ? (
                <Disclosure.Button
                  as={Link}
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </Disclosure.Button>
              ) : (
                <Disclosure.Button
                  as={Link}
                  to="/"
                  className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </Disclosure.Button>
              )}
              {categories.map((category) => {
                const {
                  attributes: { name },
                  id,
                } = category;

                if (selectedCategory === name) {
                  return (
                    <Disclosure.Button
                      as={Link}
                      to={`/products/${name}`}
                      key={id}
                      className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      {name}
                    </Disclosure.Button>
                  );
                }
                return (
                  <Disclosure.Button
                    as={Link}
                    to={`/products/${name}`}
                    key={id}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {name}
                  </Disclosure.Button>
                );
              })}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              {user && (
                <div className="flex items-center px-5">
                  {/* <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div> */}
                  <div className="ml-3">
                    <div className="text-base font-medium text-white">
                      {user.username}
                    </div>
                    <div className="text-sm font-medium text-gray-400">
                      {user.email}
                    </div>
                  </div>
                </div>
              )}

              {user ? (
                <div className="mt-3 px-2 space-y-1">
                  <button
                    onClick={logout}
                    className="w-full block px-3 py-2 rounded-md text-left text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                  >
                    Sign out
                  </button>
                </div>
              ) : (
                <div className="mt-3 px-2 space-y-1">
                  <Disclosure.Button
                    as={Link}
                    to="/login"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                  >
                    Log In
                  </Disclosure.Button>
                </div>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default memo(Navbar);
