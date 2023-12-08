import  React,{ useState, useEffect } from "react";
import "../styles/news.css";
import  NewsCard from "../components/NewsCard";
import axios from "axios";

// /news/get_list/{limit?}/{page?}/{query?}


function News() {
  const [page, setPage] = useState(1);
  const [finalPage, setFinalPage] = useState(0);
  const [news, setNews] = useState([]);
  const getNews = async () => {
    try{
      const response = await axios.get("/news/get_list/", {
        params: {
          limit: 3,
          page,
        }
      });
      
      setNews(response.data.data.news);
      setFinalPage(Math.ceil(response.data.data.pagination.total / 3))
    }catch(error){
      console.log(error)
    }
  }

const onBackClick =()=>{
  if (page !== 1) {
    setPage(page-1)
  }else{
    return
  }
}

  const onForwardClick = () => {
  console.log(setFinalPage)
 if (page !== finalPage) {
    setPage(page+1)
  }else{
    return
  }
}
  useEffect(() => {
  getNews()
},[page])


  return (
    <div>
      <div className="buttons">
        
        <button  className="mainBtn" onClick={onBackClick}>back</button>
        <button  className="mainBtn" onClick={onForwardClick}>forward</button>  
        <div className="newsSection">
          {news.length > 0 ? (
            <>
              {
                news.map((item,key)=><NewsCard key={key} image={item.Image} title={item.title} content={item.description} />)
            }
            </>
          ) : null}
        
        </div>
      </div>
    </div>
  );
}

export default News;
