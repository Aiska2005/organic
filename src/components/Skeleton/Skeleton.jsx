import React from "react";
// css
import "./Skeleton.scss";
const Skeleton = () => {
  return (
    <div>
      <div class="card">
        <div class="card__image"></div>
        <div class="card__content">
          <h2></h2>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
