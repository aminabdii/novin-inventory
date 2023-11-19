import React from "react";
import { useCategory } from "../../contexts/CategoryContext/CategoryProvider";

const CategoryForm = () => {
  const { categoryData, setCategortyData, inputsHandler, submitHandler } =
    useCategory();

  return (
    <div className="w-full max-w-screen-sm font-vazir ">
      <h2 className="text-base px-3 sm:text-lg text-neutral-600 mb-3">
        اضافه کردن دسته بندی جدید
      </h2>
      <form className="bg-white flex flex-col gap-y-10 p-4 mx-2 rounded-xl shadow-md">
        <div className="">
          <label className="block mb-2 text-slate-600" htmlFor="product-title">
            عنوان دسته بندی
          </label>
          <input
            name="title"
            className="rounded-lg w-full bg-white border border-gray-400 text-slate-500 "
            type="text"
            value={categoryData["title"]}
            onChange={inputsHandler}
          />
        </div>
        <div>
          <label
            className="block mb-2 text-slate-600"
            htmlFor="categoty-decription"
          >
            توضیحات
          </label>
          <textarea
            cols={50}
            rows={5}
            className="rounded-lg bg-white border py-3 border-gray-400 text-slate-500 mb-0.5 w-full resize-none"
            name="description"
            value={categoryData["description"]}
            onChange={inputsHandler}
          ></textarea>
        </div>

        <div className="flex items-center justify-between gap-x-4">
          <button
            onClick={(e) => {
              e.preventDefault();
              setCategortyData({
                title: "",
                decription: "",
              });
              console.log("click");
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

export default CategoryForm;
