import React, { useState } from 'react';
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

  setSeconds(createArrayOfNums(time.getSeconds()));
  setMinutes(createArrayOfNums(time.getMinutes()));
  setHours(createArrayOfNums(time.getHours()));
  };

  setInterval(setTime, 1000);

  
  return (
    <div className='clock-wrapper'>
        <div className='clock-body'>
          {hours.map((num: number, index: any) => {
            return <Number key={index} number={num} id={index}/>
          })}
          {minutes.map((num: number, index: any) => {
            return <Number key={index+2} number={num} id={index+2}/>
          })}
          {seconds.map((num: number, index: any) => {
            return <Number key={index+4} number={num} id={index+4}/>
          })}
        </div>       
    </div>
  );
}

export default Clock;