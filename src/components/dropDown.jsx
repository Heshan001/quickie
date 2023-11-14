import React, { useState } from 'react';
// import '../App.css';

export default function DropDown(props) {
  const getLimit = e => {
    props.fetchData(e.target.value);
  };
  const dropDownList = [];
  for (let i = 1; i <= 6; i++) {
    // if (i % 2 === 0) {
    dropDownList.push(i);
    // }
  }
  const renderDropDownList = dropDownList.map(id => {
    return (
      <option key={id} value={id}>
        {id}
      </option>
    );
  });
  return (
    <div className="Drop-down">
      <div className="dropdown-item">
        <select onChange={key => getLimit(key)}>
          <option>Select Rows</option>
          {renderDropDownList}
        </select>
      </div>
    </div>
  );
}