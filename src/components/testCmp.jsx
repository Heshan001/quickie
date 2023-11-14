import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

export default function Images(props){
  const{ data } = props;
  const [currentItem, setCurrentItem] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0); 
  const itemPerPage = 6 ;

  useEffect(() => {
    const endOffset = itemOffset + itemPerPage;
    setCurrentItem(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length/itemPerPage)); 
  },[itemOffset, itemPerPage,data])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>

    <div className="images">
        {currentItem.map(image => {
            return(
                <div>
                    <img src={image.url} alt={image.title} />
                    
                </div>

            )
        })}
    </div>

 
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}