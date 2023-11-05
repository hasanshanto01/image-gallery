import React, { useEffect, useState } from "react";
import { MdCheckBox } from "react-icons/md";
import image1 from "../../assets/img/image-1.webp";
import image2 from "../../assets/img/image-2.webp";
import image3 from "../../assets/img/image-3.webp";
import image4 from "../../assets/img/image-4.webp";
import image5 from "../../assets/img/image-5.webp";
import image6 from "../../assets/img/image-6.webp";
import image7 from "../../assets/img/image-7.webp";
import image8 from "../../assets/img/image-8.webp";
import image9 from "../../assets/img/image-9.webp";
import image10 from "../../assets/img/image-10.jpeg";
import image11 from "../../assets/img/image-11.jpeg";
import ImageCard from "../../components/ImageCard";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import AddImageCard from "../../components/AddImageCard";

const Home = () => {
  const images = [
    {
      id: 1,
      path: image1,
      selected: false,
    },
    {
      id: 2,
      path: image2,
      selected: false,
    },
    {
      id: 3,
      path: image3,
      selected: false,
    },
    {
      id: 4,
      path: image4,
      selected: false,
    },
    {
      id: 5,
      path: image5,
      selected: false,
    },
    {
      id: 6,
      path: image6,
      selected: false,
    },
    {
      id: 7,
      path: image7,
      selected: false,
    },
    {
      id: 8,
      path: image8,
      selected: false,
    },
    {
      id: 9,
      path: image9,
      selected: false,
    },
    {
      id: 10,
      path: image10,
      selected: false,
    },
    {
      id: 11,
      path: image11,
      selected: false,
    },
  ];

  const [imgList, setImgList] = useState(images);
  const [selectImages, setSelectedImages] = useState([]);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!active || !over || active.id === over.id) {
      return;
    }

    setImgList((currentItems) => {
      const currentIndex = currentItems.findIndex(
        (item) => item.id === active.id
      );
      const newIndex = currentItems.findIndex((item) => item.id === over.id);

      const newItems = [...currentItems];

      const [movedItem] = newItems.splice(currentIndex, 1);
      newItems.splice(newIndex, 0, movedItem);

      return newItems;
    });
  };

  const handleSelectImg = (img) => {
    setImgList((currentItems) => {
      return currentItems.map((item) => {
        if (item.id === img.id) {
          const updatedItem = { ...item, selected: !item.selected };
          return updatedItem;
        }
        return item;
      });
    });

    setSelectedImages((currentSelectedImages) => {
      const imageIndex = currentSelectedImages.findIndex(
        (item) => item.id === img.id
      );
      if (imageIndex !== -1) {
        const updatedSelectedImages = [...currentSelectedImages];
        updatedSelectedImages.splice(imageIndex, 1);
        return updatedSelectedImages;
      } else {
        return [...currentSelectedImages, img];
      }
    });
  };

  const handleDelete = () => {
    const newImgList = imgList.filter((item) => !item.selected);
    setImgList(newImgList);
    setSelectedImages([]);
  };

  useEffect(() => {}, [imgList, selectImages]);

  return (
    <div id="main-container" className="min-h-screen m-10 rounded-md">
      <div className="img-action flex justify-between items-center p-5">
        {selectImages.length ? (
          <div className="flex items-center">
            <MdCheckBox className="checkbox-icon text-blue-500" />
            <h2 className="font-semibold">
              {selectImages.length} {selectImages.length > 1 ? "Files" : "File"}{" "}
              selected
            </h2>
          </div>
        ) : (
          <h2 className="font-semibold">Gallery</h2>
        )}

        <button
          className="btn btn-sm btn-outline btn-error"
          onClick={handleDelete}
        >
          Delete Files
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 p-5">
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={imgList}
            // strategy={verticalListSortingStrategy}
          >
            {imgList.map((img, index) => (
              <ImageCard
                key={img.id}
                img={img}
                index={index}
                handleSelectImg={handleSelectImg}
              ></ImageCard>
            ))}
          </SortableContext>
        </DndContext>
        <AddImageCard></AddImageCard>
      </div>
    </div>
  );
};

export default Home;
