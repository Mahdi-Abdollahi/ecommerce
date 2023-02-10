import React from "react";

const CartSummery = () => {
  return (
    <div className="bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8">
      <h2 id="summary-heading" className="sr-only">
        Order summary
      </h2>

      <div className="flow-root">
        <dl className="-my-4 text-sm divide-y divide-gray-200">
          <div className="py-4 flex items-center justify-between">
            <dt className="text-gray-600">Subtotal</dt>
            <dd className="font-medium text-gray-900">$99.00</dd>
          </div>
          <div className="py-4 flex items-center justify-between">
            <dt className="text-gray-600">Shipping</dt>
            <dd className="font-medium text-gray-900">$5.00</dd>
          </div>
          <div className="py-4 flex items-center justify-between">
            <dt className="text-gray-600">Tax</dt>
            <dd className="font-medium text-gray-900">$8.32</dd>
          </div>
          <div className="py-4 flex items-center justify-between">
            <dt className="text-base font-medium text-gray-900">Order total</dt>
            <dd className="text-base font-medium text-gray-900">$112.32</dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default CartSummery;
