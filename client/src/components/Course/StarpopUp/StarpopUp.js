import React from "react";
import "./StarpopUp.css";

const StarpopUp = props => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="scale-up-center">Congratulations! You have earned {props.value} Stars!</div>
      </div>
    </div>
  );
};

export default StarpopUp;
