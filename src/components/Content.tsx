import React  from "react";
import "../index.css"

interface Props {
  isImages: any;
}

const Content = ({ isImages }: Props) => {
 
  return (
    <div className="imageContainer">
      {isImages && (
        <div>
          <img src={isImages?.data?.image_original_url} className="image"/>
        </div>
      )}
    </div>
  );
};

export default Content;
