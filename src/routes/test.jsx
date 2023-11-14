import React, { useEffect, useState } from 'react';
import TestCmp from '../components/testCmp';

function Test() {
  const [images, setImages] = useState([]);
  const [comment, setComment] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
      });
  }, []);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
      setComment(data);
    });
  },[]);

  return (
    <div>
      <TestCmp data={images} />
      <TestCmp data={comment}/>
    </div>
  );
}

export default Test;
