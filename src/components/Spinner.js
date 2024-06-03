import React from 'react';
import Loading from './Loading.gif';

const Spin=()=> {
 
    return (
      <div className='text-center'>
        <img className='my-3' src={Loading} alt="Loading..." />
      </div>
    );
  
}

export default Spin;
