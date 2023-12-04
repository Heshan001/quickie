import React from 'react';
import Pagination from '../components/pagination';

const data = [
  { id: 1, content: 'Item 1' },
  { id: 2, content: 'Item 2' },
  { id: 3, content: 'Item 3' },
  { id: 4, content: 'Item 4' },
  { id: 5, content: 'Item 5' },
  { id: 6, content: 'Item 5' },
  { id: 7, content: 'Item 1' },
  { id: 8, content: 'Item 2' },
  { id: 9, content: 'Item 3' },
  { id: 10, content: 'Item 4' },
  { id: 11, content: 'Item 5' },
  { id: 12, content: 'Item 5' },
];

const Test = () => (
  <div>
    <Pagination data={data} itemsPerPage={3} />
  </div>
);

export default Test;