import React from "react";

function Title() {
  return (
    <div className="w-full h-[15%] flex flex-col justify-center items-center gap-1 p-2 mb-2">
      <h1 className="text-3xl font-bold font-madimi-one bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        TO DO LIST
      </h1>
      <p className="text-lg font-semibold font-truculenta">
        Plan your daily activities
      </p>
    </div>
  );
}

export default Title;
