import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div id="loading-spinner-wrapper">
      <div id="spinner" class="spinner-border text-warning" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
