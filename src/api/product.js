import API from "./axios";

const getProductByIdAPI = async (id) => {
  try {
    const response = await API.get(`/products/${id}?populate=*`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
const getProductsPerCategoryAPI = async (categoryName, sort = null) => {
  try {
    const response = await API.get(
      `/products?populate=*&[filters][categories][name]=${categoryName}${
        sort ? `&sort=${sort?.key}:${sort?.value}` : ""
      }`
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getProductsPerCategoryIdAPI = async (categoryId) => {
  try {
    const response = await API.get(`/products?populate=*`, {
      params: {
        _q: `categories.id:${categoryId}`,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getAllCategoriesAPI = async () => {
  try {
    const response = await API.get(`/categories`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getSimilarProductsAPI = async (productCategory) => {
  try {
    return await getProductsPerCategoryAPI(productCategory);
  } catch (error) {
    console.log(error);
  }
};

const getProductAndSimilarProductsAPI = async (productId) => {
  try {
    const product = await getProductByIdAPI(productId);
    const similarProducts = await getSimilarProductsAPI(
      product.data.attributes.categories.data[0].attributes.name
    );
    return { product: product.data, similarProducts: similarProducts.data };
  } catch (e) {
    console.log(e);
  }
};

const getSubCategoriesByCategoryAPI = async (categoryId) => {
  try {
    const response = await API.get("/sub-categories", {
      params: {
        "category.name": categoryId,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getCategoryAPI = async (category) => {
  try {
    const response = await API.get(
      `/categories?populate=*&[products][populate]=*&filters[name][$eq]=${category}`,
      {
        params: {
          name: category,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getProductsBySubCategoriesAPI = async (
  categoryName,
  subCategories,
  sort
) => {
  try {
    const response = await API.get(
      `/products?populate=*&[filters][categories][name]=${categoryName}${subCategories.map(
        (item) => `&[filters][sub_categories][id][$eq]=${item}`
      )}&sort=${sort.key}:${sort.value}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const updateProductsCountAPI = async (product) => {
  const updatedData = {
    data: {
      count: product.count - product.amount,
    },
  };
  fetch(`http://localhost:1337/api/products/${product.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify(updatedData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const productServices = {
  getProductsPerCategoryAPI,
  getProductsPerCategoryIdAPI,
  getAllCategoriesAPI,
  getProductByIdAPI,
  getSimilarProductsAPI,
  getProductAndSimilarProductsAPI,
  getSubCategoriesByCategoryAPI,
  getCategoryAPI,
  getProductsBySubCategoriesAPI,
  updateProductsCountAPI,
};

export default productServices;
