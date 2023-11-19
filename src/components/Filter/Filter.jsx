import React from "react";
import { useCategory } from "../../contexts/CategoryContext/CategoryProvider";
import { useFilteredProducts } from "../../contexts/FilterProductsProvider/FilterProductsProvider";

const Filter = () => {
  const {
    searchHandler,
    sortHandler,
    sortCategoryHandler,
    selectedCategory,
    sort,
    searchValue,
  } = useFilteredProducts();
  const { categories } = useCategory();
  return (
    <div className="flex flex-col md:flex-row items-end gap-2 md:items-center my-2 ml-2 ">
      <input
        className="font-vazir text-sm sm:text-base bg-white border-1 border-gray-500 text-gray-600 font-normal shadow-md rounded-md"
        type="search"
        placeholder="جستجو"
        value={searchValue}
        onChange={searchHandler}
      />
      <select
        value={sort}
        onChange={sortHandler}
        className="font-vazir cursor-pointer text-sm sm:text-base bg-white w-32 border-1 border-gray-500 text-gray-600 font-normal shadow-md rounded-md"
      >
        <option value="latest">جدید ترین</option>
        <option value="earliest">قدیمی ترین</option>
        <option value="least">کمترین</option>
        <option value="most">بیشترین</option>
      </select>

      {/* ....... categoreis sort  */}

      <select
        value={selectedCategory}
        onChange={sortCategoryHandler}
        className="font-vazir cursor-pointer text-sm sm:text-base bg-white w-32 border-1 border-gray-500 text-gray-600 font-normal shadow-md rounded-md"
      >
        <option value="">همه</option>
        {categories.map((category) => {
          return (
            <option value={category.id} key={category.id}>
              {category.title}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Filter;
