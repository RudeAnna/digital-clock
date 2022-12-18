import React, { useEffect, useState } from 'react';
import Divider from '../Divider/indfex';
import Number from '../Number';
import './styles.css';
import { createArrayOfNums } from './utils';

const Clock = () => {
  const time = new Date();
  const [hours, setHours] = useState<number[]>(createArrayOfNums(time.getHours()));
  const [minutes, setMinutes] = useState<number[]>(createArrayOfNums(time.getMinutes()));
  const [seconds, setSeconds] = useState<number[]>(createArrayOfNums(time.getSeconds()));

  const setTime = () => {
    let time = new Date();

    const newMinutes = time.getMinutes();
    const newHours = time.getHours();

    setSeconds(createArrayOfNums(time.getSeconds()));

    if (createArrayOfNums(newMinutes) !== minutes){
      setMinutes(createArrayOfNums(time.getMinutes()));
    }

    if (createArrayOfNums(newHours) !== hours){
      setHours(createArrayOfNums(time.getHours()));
    }

  };

  setInterval(setTime, 1000);
  
  return (
    <div className='clock-wrapper'>
        <div className='clock-body'>
          {hours.map((num: number, index: any) => {
            return <Number key={index} number={num} id={index}/>
          })}
          <Divider />
          {minutes.map((num: number, index: any) => {
            return <Number key={index+2} number={num} id={index+2}/>
          })}
          <Divider />
          {seconds.map((num: number, index: any) => {
            return <Number key={index+4} number={num} id={index+4}/>
          })}
        </div>       
    </div>
  );
}

export default Clock;