import React from "react";
import { MdProductionQuantityLimits } from "react-icons/md";

const NothingPoducts = () => {
  return (
    <div className="w-full max-w-screen-sm lg:max-w-screen-xl mx-auto">
      <div className=" container  mx-auto">
        <div className="my-10 border border-gray-400 bg-white rounded-lg mx-2 p-5 ">
          <div className="font-vazir text-lg sm:text-xl text-gray-700 text-center flex flex-col items-center gap-y-4 justify-center">
            <MdProductionQuantityLimits color="#1f2937" size={80} />
            لیستی برای نمایش وجود ندارد!
          </div>
        </div>
      </div>
    </div>
  );
};

export default NothingPoducts;
