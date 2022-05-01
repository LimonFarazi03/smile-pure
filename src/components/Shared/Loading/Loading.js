import React from 'react';
import spinner from '../../../images/spinner/spinner.gif';

const Loading = () => {
  return (
    <div className='w-100 d-flex align-items-center justify-content-center'>
      <img className='rounded' src={spinner} alt="" />
    </div>
  );
};

export default Loading;