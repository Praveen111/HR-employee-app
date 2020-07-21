import React,{useState} from 'react';

function Search(props) {
  return (
    <>
     <input placeholder="Search" onChange={props.onSearch} />
    </>
  );
}

export default Search;
