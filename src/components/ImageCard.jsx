import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React, { useState } from "react";
import { MdCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

const ImageCard = ({ img, index, handleSelectImg }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: img.id });

  const [hovered, setHovered] = useState(false);

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      id="card-container"
      className={` ${index === 0 ? `col-span-2 row-span-2` : ``} relative `}
    >
      <div
        // className="img-container flex justify-center "
        className={`img-container flex justify-center relative ${
          hovered ? "hover-effect" : ""
        }`}
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
      >
        <img src={img?.path} alt="image" />
      </div>
      <div
        className="checkbox-container absolute top-3 left-3 "
        onClick={() => handleSelectImg(img)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {img.selected === true ? (
          <MdCheckBox className="checkbox-icon text-blue-500" />
        ) : (
          <MdOutlineCheckBoxOutlineBlank className="checkbox-icon w-full" />
        )}
      </div>
    </div>
  );
};

export default ImageCard;
