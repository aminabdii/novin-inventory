import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="w-full">
      <div className="container xl:max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center justify-center lg:flex-row gap-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
