import  React from "react";
import "../styles/news.css";
import { useState } from "react";
import { news1 } from "../components/news1";
import { news2 } from "../components/news2";

function News() {
  const [newsId, setNewsId] = useState(0);

  const btnArr = [
    { name: "back", id: 0 },
    { name: "forward", id: 1 },
  ];

  const getProductArray = () => {
    if (newsId === 0) return news1;
    if (newsId === 1) return news2;
  };

  return (
    <div>
      <div className="buttons">
        {btnArr.map((btn, idx) => (
          <button
            className="mainBtn"
            key={idx}
            onClick={() => setNewsId(btn.id)}
          >
            {btn.name}
          </button>
        ))}

        <div className="newsSection">
          {getProductArray()?.map((item, index) => (
            <div className="newsItem" key={index}>
              <h2>{item.title}</h2>
              <img src={item.image} alt="" />
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
