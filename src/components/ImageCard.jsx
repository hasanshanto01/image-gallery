import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

const ImageCard = ({ img, index }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: img.id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      id="card-container"
      className={` ${index === 0 ? `col-span-2 row-span-2` : ``}`}
    >
      <div
        className="img-container flex justify-center relative"
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
      >
        <img src={img?.path} alt="image" />
        <div className="checkbox-container">
          <MdOutlineCheckBoxOutlineBlank className="checkbox-icon absolute top-3 left-3" />
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
