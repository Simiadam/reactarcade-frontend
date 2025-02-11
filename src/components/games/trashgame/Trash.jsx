import React from 'react';

const Trash = ({ type, x, y }) => {
  return (
    <img
      src={`/images/${type}.png`}
      alt={type}
      className="trash spinning-image position-absolute"
      style={{ left: x, top: y, zIndex: 1 }}
    />
  );
};

export default Trash;
