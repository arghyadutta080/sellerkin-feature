import React from "react";
import "./App.css";

const App: React.FC = () => {
  
  return (
    <>
      <h1 className=" text-3xl font-bold text-center my-5">
        Sellerkin Keyword volume calculation feature
      </h1>
      <div className=" flex flex-row justify-center items-center space-x-2">
        <input
          type="text"
          placeholder="search here"
          className=" w-1/3 px-2 py-1 rounded-md border-2"
        />
        <button className=" border-2 rounded-xl text-lg px-2 py-1">
          Search
        </button>
      </div>
      <div>
        <h1 className=" text-xl font-bold text-center my-5">
          Dashboard Section
        </h1>
      </div>
    </>
  );
};

export default App;
