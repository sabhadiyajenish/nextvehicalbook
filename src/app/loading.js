import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-row justify-center items-center h-screen">
      <div
        className="w-12 h-12 rounded-full animate-spin
        border-y-8 border-solid border-purple-500 border-t-transparent"
      ></div>
    </div>
  );
};

export default Loading;
