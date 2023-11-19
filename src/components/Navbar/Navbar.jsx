import React from "react";
import { MdOutlineInventory } from "react-icons/md";
import { useProducts } from "../../contexts/ProductProvider/ProductProvider";
const Navbar = () => {
  const { products } = useProducts();
  const e2p = (s) => s.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
  return (
    <div className="w-full bg-white shadow-md px-5 py-3 mb-12">
      <div className="container xl:max-w-screen-xl mx-auto ">
        <div className="flex items-center justify-between">
          <span className="flex items-center font-vazir">
            <MdOutlineInventory size={25} />
            <p className="text-base sm:text-2xl font-normal mr-1 text-red-600">
              انبارداری نوین
            </p>
          </span>

          <span className="font-vazir text-base sm:text-lg font-normal flex items-center gap-2">
            تعداد محصولات انبار :
            <p className="flex items-center justify-center bg-red-500 text-white w-6 h-6 p-1 rounded-full">
              {e2p(products.length)}
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
