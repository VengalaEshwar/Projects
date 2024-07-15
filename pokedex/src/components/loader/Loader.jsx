import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="spinner">
      {[...Array(10)].map((_, index) => (
        <div key={index}></div>
      ))}
    </div>
  );
};

export default Loader;
