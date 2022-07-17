import React from 'react';

// styles
import './styles.css';
import Number from '../Number';

const Clock = () => {
  return (
    <div className='clock-wrapper'>
        <div className='clock-body'>
            <Number number={8} />
        </div>        
    </div>
  );
}

export default Clock;