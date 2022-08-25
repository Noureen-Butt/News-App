import React from "react";
import loading from "./loading.gif";

const Spinner = (props) => {
  return (
    props.loading && (
      <div className="text-center">
        <img src={loading} alt="loading" />
      </div>
    )
  );
};
export default Spinner;
