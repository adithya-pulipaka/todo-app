import React from "react";

const Header = () => {
  return (
    <div className="bg-accent pl-4 py-3 text-primary flex justify-between">
      <h4>Todo App</h4>
      <div className="mr-8 my-1">
        {/* <input
          type="text"
          name="search"
          id="search"
          placeholder="Search here - TODO"
          className="rounded-lg w-[15rem] pl-2 py-[2px]"
        /> */}
      </div>
    </div>
  );
};

export default Header;
