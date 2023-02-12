import React, { useEffect, useMemo } from "react";

import { useState } from "react";
import ProductImages from "../../components/Product/ProductImages";
import ProductInfo from "../../components/Product/ProductInfo";
import ProductDetails from "../../components/Product/ProductDetails";
import SimilarProducts from "../../components/SimilarProducts/SimilarProducts";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductAndSimilarProducts,
  selectProduct,
  selectSimilarProducts,
} from "../../features/product/productSlice";
import { useParams } from "react-router-dom";
import {
  addToCart,
  decreaseItem,
  selectCartItems,
} from "../../features/cart/cartSlice";

const Product = () => {
  const dispatch = useDispatch();
  const productId = useParams().id;
  const _product = useSelector(selectProduct);
  const similarProducts = useSelector(selectSimilarProducts);
  const cartItems = useSelector(selectCartItems);
  const productInCart = cartItems.find((product) => product.id === _product.id);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getProductAndSimilarProducts(productId));
    setLoading(false);
  }, [dispatch, productId]);

  const images = useMemo(() => {
    if (loading) return [];
    return _product?.attributes?.image?.data?.map((image) => ({
      url: process.env.REACT_APP_ASSETS_URL + image.attributes.url,
      id: image.attributes.hash,
      alt: _product.attributes.name,
    }));
  }, [_product, loading]);
  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="bg-white">
      <main className="max-w-7xl mx-auto sm:pt-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          {/* Product */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
            {/* Image gallery */}
            <ProductImages images={images} />

            {/* Product info */}
            <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
              {_product?.attributes && (
                <ProductInfo product={_product?.attributes} />
              )}
              <div className="mt-6">
                {/* Colors */}
                {/* <div>
                  <h3 className="text-sm text-gray-600">Color</h3>

                  <RadioGroup
                    value={selectedColor}
                    onChange={setSelectedColor}
                    className="mt-2"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a color
                    </RadioGroup.Label>
                    <div className="flex items-center space-x-3">
                      {product.colors.map((color) => (
                        <RadioGroup.Option
                          key={color.name}
                          value={color}
                          className={({ active, checked }) =>
                            classNames(
                              color.selectedColor,
                              active && checked ? "ring ring-offset-1" : "",
                              !active && checked ? "ring-2" : "",
                              "-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
                            )
                          }
                        >
                          <RadioGroup.Label as="p" className="sr-only">
                            {color.name}
                          </RadioGroup.Label>
                          <span
                            aria-hidden="true"
                            className={classNames(
                              color.bgColor,
                              "h-8 w-8 border border-black border-opacity-10 rounded-full"
                            )}
                          />
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div> */}

                <div className="mt-10 flex sm:flex-col1 align-center">
                  {productInCart && (
                    <>
                      <button
                        className="inline-flex items-center justify-center w-10 h-10 text-white font-bold transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-indigo-800 disabled:bg-gray-800"
                        onClick={() => dispatch(decreaseItem(_product.id))}
                      >
                        -
                      </button>
                      <div className="p-2 font-bold">
                        {productInCart && productInCart?.amount}
                      </div>
                    </>
                  )}
                  <button
                    onClick={() =>
                      dispatch(
                        addToCart({ ..._product.attributes, id: _product.id })
                      )
                    }
                    disabled={
                      productInCart?.amount >= _product?.attributes?.count
                    }
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

              <section aria-labelledby="details-heading" className="mt-12">
                <h2 id="details-heading" className="sr-only">
                  Additional details
                </h2>

                {_product?.attributes?.details && (
                  <ProductDetails details={_product.attributes.details} />
                )}
              </section>
            </div>
          </div>

          <section
            aria-labelledby="related-heading"
            className="mt-10 border-t border-gray-200 py-16 px-4 sm:px-0"
          >
            <h2
              id="related-heading"
              className="text-xl font-bold text-gray-900"
            >
              Customers also bought
            </h2>

            <SimilarProducts relatedProducts={similarProducts} />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Product;
