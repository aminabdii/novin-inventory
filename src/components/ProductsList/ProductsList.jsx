import React, { useEffect, useState } from "react";

import { useCategory } from "../../contexts/CategoryContext/CategoryProvider";
import { useProducts } from "../../contexts/ProductProvider/ProductProvider";
import Filter from "../Filter/Filter";
import { useFilteredProducts } from "../../contexts/FilterProductsProvider/FilterProductsProvider";
import { HiOutlinePlusSmall } from "react-icons/hi2";
import { HiMinus } from "react-icons/hi2";
import { BsTrash3 } from "react-icons/bs";
import NothingPoducts from "../Nothing/Nothing";
import { IoChevronUpCircleOutline } from "react-icons/io5";
import { IoChevronDownCircleOutline } from "react-icons/io5";

const ProductList = () => {
  const [isClick, setIsClick] = useState(true);
  const { filteredProducts } = useFilteredProducts();
  const { deleteProduct, increaseProduct, decreaseProduct, products } =
    useProducts();
  const { categories } = useCategory();

  const e2p = (s) => s.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

  const findCategory = (cId) => {
    return categories.find((category) => category.id === Number(cId))?.title;
  };

  if (!products.length) return <NothingPoducts />;

  return (
    <div className="mx-2">
      <div className="w-full max-w-screen-sm lg:max-w-screen-xl mx-auto">
        <div className="container xl:max-w-screen-xl mx-auto border border-gray-400 rounded-md my-8  ">
          <div className="flex items-center justify-between bg-gray-100  border-b border-b-gray-400 rounded-t-md ">
            <span className="flex items-center justify-center mr-2">
              {isClick ? (
                <IoChevronDownCircleOutline
                  className="cursor-pointer"
                  size={25}
                  color="#6b7280"
                  onClick={() => setIsClick(!isClick)}
                />
              ) : (
                <IoChevronUpCircleOutline
                  className="cursor-pointer"
                  size={25}
                  color="#6b7280"
                  onClick={() => setIsClick(!isClick)}
                />
              )}
              <h2 className="font-vazir text-sm sm:text-lg font-medium text-gray-500 mr-2 ">
                لیست محصولات
              </h2>
            </span>

            <Filter />
          </div>
          {!filteredProducts.length ? (
            <p className="font-vazir text-center p-4 text-xl text-gray-600">
              محصول مورد نظر یافت نشد
            </p>
          ) : (
            <div
              className={`relative overflow-x-auto bg-white overflow-y-auto shadow-md rounded-b-md ${
                isClick ? "block" : "hidden"
              }`}
            >
              <table className="w-full text-sm rtl:text-center text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 bg-white border-b border-gray-500  font-vazir">
                  <tr>
                    <th
                      scope="col"
                      className="text-gray-600 px-6 py-3 text-base"
                    >
                      نام محصول
                    </th>
                    <th
                      scope="col"
                      className="text-gray-600 px-6 py-3 text-base"
                    >
                      تاریخ
                    </th>
                    <th
                      scope="col"
                      className="text-gray-600 px-6 py-3 text-base"
                    >
                      دسته بندی
                    </th>
                    <th
                      scope="col"
                      className="text-gray-600 px-6 py-3 text-base"
                    >
                      تعداد
                    </th>
                    <th
                      scope="col"
                      className="text-gray-600 px-6 py-3 text-base"
                    >
                      عملیات
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product) => {
                    return (
                      <tr
                        key={product.id}
                        className=" font-vazir  border-b border-b-gray-400 last:border-0 last:border-none"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-500  whitespace-nowrap text-base"
                        >
                          {product.title}
                        </th>
                        <td className="px-6 py-4 text-lg text-gray-500">
                          {new Date(product.createdAt).toLocaleDateString(
                            "fa-IR"
                          )}
                        </td>
                        <td className="px-6 py-4 text-lg text-gray-500">
                          {product.categoryID === 0 || product.categoryID === ""
                            ? "بدون دسته بندی"
                            : findCategory(product.categoryID)}
                        </td>
                        <td className="px-6 py-4 text-lg text-gray-500">
                          {e2p(product.quantity)}
                        </td>
                        <td className=" px-6 py-4 ">
                          <span className="flex items-center justify-center">
                            <button
                              onClick={() => {
                                increaseProduct(product.id);
                              }}
                              className=" px-3 py-2 border border-red-500  shadow-md font-vazir font-bold  mx-1 rounded-md  text-white   duration-75"
                            >
                              <HiOutlinePlusSmall color="red" />
                            </button>
                            <button
                              onClick={() => deleteProduct(product.id)}
                              className=" px-3 py-2 bg-red-500 shadow-md font-vazir font-bold  mx-1 rounded-md  text-white   duration-75"
                            >
                              <BsTrash3 />
                            </button>
                            <button
                              disabled={product.quantity <= 0}
                              onClick={() => {
                                decreaseProduct(product.id);
                              }}
                              className=" px-3 py-2 border border-red-500 rounded-md shadow-md font-vazir font-bold  mx-1   text-white   duration-75"
                            >
                              <HiMinus color="red" />
                            </button>
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          {/* .. */}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
