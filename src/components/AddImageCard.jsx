import React from "react";
import { MdOutlineImage } from "react-icons/md";

const AddImageCard = () => {
  return (
    <div
      id="add-img-container"
      className="flex flex-col justify-center items-center"
    >
      <MdOutlineImage className="add-img-icon" />
      <p className="font-semibold">Add Images</p>
    </div>
  );
};

export default AddImageCard;
