const postOrderAPI = async (orderData) => {
  const _orderData = {
    data: {
      price: orderData.price,
      status: orderData.status,
      user: orderData.user,
      shipping: orderData.shipping,
      orderItems: orderData.orderItems,
    },
  };
  fetch("http://localhost:1337/api/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify(_orderData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const orderServices = {
  postOrderAPI,
};

export default orderServices;
