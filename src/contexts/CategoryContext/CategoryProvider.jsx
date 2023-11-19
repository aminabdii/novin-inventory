import React, { createContext, useContext, useEffect, useState } from "react";

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [categoryData, setCategortyData] = useState({
    title: "",
    description: "",
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (categories.length) {
      localStorage.setItem("categories", JSON.stringify(categories));
    }
  }, [categories]);

  useEffect(() => {
    const savedCategories =
      JSON.parse(localStorage.getItem("categories")) || [];
    setCategories(savedCategories);
  }, []);

  const inputsHandler = ({ target }) => {
    const { name, value } = target;
    setCategortyData({ ...categoryData, [name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (categoryData.title === "" || categoryData.description === "") return;
    setCategories((prevState) => [
      ...prevState,
      { ...categoryData, id: Date.now(), createdAt: new Date().toISOString() },
    ]);
    setCategortyData({ title: "", description: "" });
  };

  return (
    <CategoryContext.Provider
      value={{
        categoryData,
        setCategortyData,
        categories,
        inputsHandler,
        submitHandler,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;

export const useCategory = () => useContext(CategoryContext);
