import React from "react";
import { useProducts } from "../../contexts/ProductProvider/ProductProvider";
import { useCategory } from "../../contexts/CategoryContext/CategoryProvider";

const ProductForm = () => {
  const { productData, inputsHandler, submitHandler, setProductData } =
    useProducts();
  const { categories } = useCategory();
  return (
    <div className="w-full max-w-screen-sm font-vazir">
      <h2 className="text-base sm:text-lg text-neutral-600 px-3 mb-3">
        اضافه کردن محصولات
      </h2>
      <form className="bg-white flex flex-col gap-y-10 p-4 mx-2 rounded-xl shadow-md">
        <div className="">
          <label className="block mb-2 text-gray-600" htmlFor="product-title">
            عنوان محصول
          </label>
          <input
            value={productData["title"]}
            className="rounded-lg w-full bg-white border border-gray-400 text-gray-500 "
            type="text"
            name="title"
            onChange={inputsHandler}
          />
        </div>
        <div className="">
          <label
            className="block mb-2 text-gray-600"
            htmlFor="product-quantity"
          >
            تعداد محصول
          </label>
          <input
            className="rounded-lg bg-white  border border-gray-400 text-gray-500 "
            value={productData["quantity"] < 1 ? 0 : productData.quantity}
            type="number"
            name="quantity"
            onChange={inputsHandler}
          />
        </div>
        <div>
          <label
            className="block mb-2 text-gray-600"
            htmlFor="product-category"
          >
            دسته بندی
          </label>
          <select
            onChange={inputsHandler}
            className="rounded-lg bg-white  border border-gray-400 text-gray-500 w-full cursor-pointer"
            name="categoryID"
            value={productData["categoryID"]}
          >
            <option>دسته بندی خود را انتخاب کنید</option>
            {categories.map((category) => {
              return (
                <option value={category.id} key={category.id}>
                  {category.title}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex items-center justify-between gap-x-4">
          <button
            onClick={(e) => {
              e.preventDefault();
              setProductData({ title: "", quantity: 0, categoryId: 0 });
            }}
            className="border border-gray-400 text-gray-600 flex-1 py-2 rounded-xl "
          >
            لغو
          </button>
          <button
            onClick={submitHandler}
            className="bg-red-500  text-white flex-1 py-2 rounded-xl  hover:bg-red-600 duration-100"
          >
            افزودن
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
