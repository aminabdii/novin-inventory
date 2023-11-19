import React, { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { useProducts } from "../ProductProvider/ProductProvider";

const FilterProductsContext = createContext();

const FilterProductsProvider = ({ children }) => {
  const { products } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sort, setSort] = useState("latest");
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  //   multiple filter

  useEffect(() => {
    let result = products;
    result = filterSearchTitle(result);
    result = sortProducts(result);
    result = sortQuantity(result);
    result = sortCategory(result);
    setFilteredProducts(result);
  }, [products, sort, searchValue, selectedCategory]);

  //  filter handlers

  const searchHandler = (event) => {
    setSearchValue(event.target.value.trim().toLowerCase());
  };
  const sortHandler = (event) => {
    setSort(event.target.value);
  };
  const sortCategoryHandler = (event) => {
    setSelectedCategory(event.target.value);
  };

  //   filter core methods
  //   search
  const filterSearchTitle = (array) => {
    return array.filter((product) =>
      product.title.trim().toLowerCase().includes(searchValue)
    );
  };

  //   products sort based date

  const sortProducts = (array) => {
    return [...array].sort((a, b) => {
      if (sort === "latest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
      } else if (sort === "earliest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
      }
    });
  };
  //   products sort based quantity
  const sortQuantity = (array) => {
    return [...array].sort((a, b) => {
      if (sort === "most") {
        return b.quantity - a.quantity;
      } else if (sort === "least") {
        return a.quantity - b.quantity;
      }
    });
  };
  //   products sort based category

  const sortCategory = (array) => {
    if (!selectedCategory) return array;
    return array.filter((item) => item.categoryID === selectedCategory);
  };

  return (
    <FilterProductsContext.Provider
      value={{
        searchHandler,
        sortHandler,
        sortCategoryHandler,
        sort,
        searchValue,
        filteredProducts,
        selectedCategory,
      }}
    >
      {children}
    </FilterProductsContext.Provider>
  );
};

export default FilterProductsProvider;

export const useFilteredProducts = () => useContext(FilterProductsContext);
