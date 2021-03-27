import React, { useState } from "react";
import Content from "./Content";
import { getResponse } from "../API/index";
import { API_KEY } from "../API/API_KEY";

export const AppContainer: React.FC = () => {
  const [isImages, setImages] = useState<any>("");
  const [tagName, setTagName] = useState<string>("");

  const onClickDownload = (e: any) => {
    e.preventDefault();
    const response = getResponse(
      `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tagName}`
    );
    console.log("pizda", response);

    response.then((res: any) => {
      if ( !res.data ) {
         return;
      } else if (res?.data?.length=== 0) {
        alert("По тегу ничего не найдено");
      } else {
        setImages(res);
      }
    });
  };

  const onClickClean = (e: any) => {
    e.preventDefault();
    setImages("");
    setTagName("");
  };

  return (
    <>
      <div className="UserInterface">
        <input
          className="inputStyle"
          placeholder="введите тег"
          value={tagName}
          onChange={(e: any) => setTagName(e.target.value)}
        />
        <button className="loadButton" onClick={onClickDownload}>
          Загрузить
        </button>
        <button className="clearButton" onClick={onClickClean}>
          Очистить
        </button>
        <button className="groupButton">Группировать</button>
      </div>
      <Content isImages={isImages} />
    </>
  );
};
