import React from 'react';

const Bins = ({ growingBin, onHandleTrash }) => {
  return (
    <div className="bins d-flex justify-content-around position-absolute bottom-0 w-100">
      <div
        className={`bin plastic-bin ${growingBin === 'plastic' ? 'grow' : ''}`}
        onClick={() => onHandleTrash('plastic')}
      >
        <img src="/images/plasticbin.png" alt="Plastic Bin" />
      </div>
      <div
        className={`bin paper-bin ${growingBin === 'paper' ? 'grow' : ''}`}
        onClick={() => onHandleTrash('paper')}
      >
        <img src="/images/paperbin.png" alt="Paper Bin" />
      </div>
    </div>
  );
};

export default Bins;
