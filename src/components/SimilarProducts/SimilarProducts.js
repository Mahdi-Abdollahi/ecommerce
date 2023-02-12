import React from "react";
import ProductCard2 from "../Card/ProductCard/ProductCard2";

const SimilarProducts = ({ relatedProducts }) => {
  return (
    <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
      {relatedProducts.map((product) => {
        const {
          attributes: {
            name,
            description,
            price,
            image: { data: images },
          },
          id,
        } = product;
        return (
          <ProductCard2
            key={id}
            product={{
              name,
              description,
              price,
              imageSrc: images[0]?.attributes?.url,
              imageAlt: name,
              id,
              href: `/product/${id}`,
            }}
          />
        );
      })}
    </div>
  );
};

export default SimilarProducts;
