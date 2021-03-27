import React, { useEffect, useState } from "react";


interface Props {
  isImages: any;
}

const Content = ({ isImages }: Props) => {
 
  return (
    <div>
      {isImages && (
        <div style={{ width: "150px", height: "150px" }}>
          <img src={isImages?.data?.image_original_url} />
        </div>
      )}
    </div>
  );
};

export default Content;
