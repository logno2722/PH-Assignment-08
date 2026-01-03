import React from "react";
const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <div className="flex flex-col items-center">
        <span className="loading loading-spinner loading-lg text-[#632EE3]"></span>
      </div>
    </div>
  );
};

export default Loading;