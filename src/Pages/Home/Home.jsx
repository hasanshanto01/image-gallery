import React, { useState } from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdOutlineImage,
} from "react-icons/md";
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

const Home = () => {
  const images = [
    {
      id: 1,
      path: image1,
    },
    {
      id: 2,
      path: image2,
    },
    {
      id: 3,
      path: image3,
    },
    {
      id: 4,
      path: image4,
    },
    {
      id: 5,
      path: image5,
    },
    {
      id: 6,
      path: image6,
    },
    {
      id: 7,
      path: image7,
    },
    {
      id: 8,
      path: image8,
    },
    {
      id: 9,
      path: image9,
    },
    {
      id: 10,
      path: image10,
    },
    {
      id: 11,
      path: image11,
    },
  ];

  const [imgList, setImgList] = useState(images);

  return (
    <div id="main-container" className="min-h-screen m-10 rounded-md">
      <div className="img-action flex justify-between items-center p-5">
        <div className="flex items-center">
          <MdCheckBoxOutlineBlank className="checkbox-icon" />
          <h2 className="font-semibold">3 Files Selected</h2>
        </div>
        <button className="btn btn-sm btn-outline btn-error">
          Delete Files
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 p-5">
        {imgList.map((img, index) => (
          <ImageCard key={img.id} img={img} index={index}></ImageCard>
        ))}
        <div
          id="add-img-container"
          className="flex flex-col justify-center items-center"
        >
          <MdOutlineImage className="add-img-icon" />
          <p className="font-semibold">Add Images</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
