import React, { useCallback, useEffect } from "react";
import "./styles.css";
import { NumberProps } from "./types";

const Number = (props: NumberProps) => {
	const { number } = props;

    useEffect(() => {
        const segmentA = document.getElementById('A') as HTMLDivElement;
        const segmentB = document.getElementById('B') as HTMLDivElement;
        const segmentC = document.getElementById('C') as HTMLDivElement;
        const segmentD = document.getElementById('D') as HTMLDivElement;
        const segmentE = document.getElementById('E') as HTMLDivElement;
        const segmentF = document.getElementById('F') as HTMLDivElement;
        const segmentG = document.getElementById('G') as HTMLDivElement;
        
        segmentA.classList.remove('active');
        segmentB.classList.remove('active');
        segmentC.classList.remove('active');
        segmentD.classList.remove('active');
        segmentE.classList.remove('active');
        segmentF.classList.remove('active');
        segmentG.classList.remove('active');

    
    switch(number) {
        case 0:
            segmentA.classList.add('active');
            segmentB.classList.add('active');
            segmentC.classList.add('active');
            segmentD.classList.add('active');
            segmentE.classList.add('active');
            segmentF.classList.add('active');
            break;
        case 1:
            segmentB.classList.add('active');
            segmentC.classList.add('active');
            break;
        case 2:
            segmentA.classList.add('active');
            segmentB.classList.add('active');
            segmentD.classList.add('active');
            segmentE.classList.add('active');
            segmentG.classList.add('active');
            break;
        case 3:
            segmentA.classList.add('active');
            segmentB.classList.add('active');
            segmentC.classList.add('active');
            segmentD.classList.add('active');
            segmentG.classList.add('active');
            break;
        case 4: 
            segmentB.classList.add('active');
            segmentC.classList.add('active');
            segmentF.classList.add('active');
            segmentG.classList.add('active');
            break;
        case 5:
            segmentA.classList.add('active');
            segmentC.classList.add('active');
            segmentD.classList.add('active');
            segmentF.classList.add('active');
            segmentG.classList.add('active');
            break;
        case 6:
            segmentA.classList.add('active');
            segmentC.classList.add('active');
            segmentD.classList.add('active');
            segmentE.classList.add('active');
            segmentF.classList.add('active');
            segmentG.classList.add('active');
            break;
        case 7:
            segmentA.classList.add('active');
            segmentB.classList.add('active');
            segmentC.classList.add('active');
            break;
        case 8:
            segmentA.classList.add('active');
            segmentB.classList.add('active');
            segmentC.classList.add('active');
            segmentD.classList.add('active');
            segmentE.classList.add('active');
            segmentF.classList.add('active');
            segmentG.classList.add('active');
            break;
        case 9:
            segmentA.classList.add('active');
            segmentB.classList.add('active');
            segmentC.classList.add('active');
            segmentD.classList.add('active');
            segmentF.classList.add('active');
            segmentG.classList.add('active');
            break;
    }
}, [number]);


	return (
		<div className="number-wrapper">
			<div id="A" className="segment horizontal"></div>
			<div id="B" className="segment vertical"></div>
			<div id="C" className="segment vertical"></div>
			<div id="D" className="segment horizontal"></div>
			<div id="E" className="segment vertical"></div>
			<div id="F" className="segment vertical"></div>
			<div id="G" className="segment horizontal"></div>
		</div>  
	);
};

export default Number;
