import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState({
    title: "",
    quantity: 0,
    categoryID: 0,
  });

  const [updatedProduct, setUpdatedProduct] = useState({
    title: productData.title,
    quantity: productData.quantity,
    categoryID: productData.categoryID,
  });

  console.log(updatedProduct);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (products.length) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, [products]);

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(savedProducts);
  }, []);

  const inputsHandler = ({ target }) => {
    const { name, value } = target;
    setProductData({ ...productData, [name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setProducts((prevProducts) => [
      ...prevProducts,
      { ...productData, id: Date.now(), createdAt: new Date().toISOString() },
    ]);
    setProductData({ title: "", quantity: 0, categoryID: 0 });
  };

  const deleteProduct = (id) => {
    const filteredProducts = products.filter((product) => product.id !== id);
    setProducts(filteredProducts);
  };

  const increaseProduct = (id) => {
    const selectedProduct = products.find((product) => product.id === id);
    console.log(selectedProduct);
    setUpdatedProduct({
      ...selectedProduct,
      quantity: selectedProduct.quantity++,
    });
  };
  const decreaseProduct = (id) => {
    const selectedProduct = products.find((product) => product.id === id);

    setUpdatedProduct({
      ...selectedProduct,
      quantity: selectedProduct.quantity--,
    });
  };

  return (
    <ProductContext.Provider
      value={{
        productData,
        products,
        setProductData,
        deleteProduct,
        inputsHandler,
        submitHandler,
        increaseProduct,
        decreaseProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

export const useProducts = () => useContext(ProductContext);
