import React from "react";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

const ImageCard = ({ img, index }) => {
  return (
    <div
      id="card-container"
      className={` ${index === 0 ? `col-span-2 row-span-2` : ``}`}
    >
      <div className="img-container flex justify-center relative">
        <img src={img?.path} alt="image" />
        <div className="checkbox-container">
          <MdOutlineCheckBoxOutlineBlank className="checkbox-icon absolute top-3 left-3" />
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
