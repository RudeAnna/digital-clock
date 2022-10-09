import React, { useEffect } from "react";
import "./styles.css";
import { NumberProps } from "./types";
import { getSectionBackgroundColor } from "./utils";

export const Number = (props: NumberProps) => {
	const { number, id } = props;

    useEffect(() => {
        const segmentA = document.querySelector(`.a-${id}`) as HTMLDivElement;
        const segmentB = document.querySelector(`.b-${id}`) as HTMLDivElement;
        const segmentC = document.querySelector(`.c-${id}`) as HTMLDivElement;
        const segmentD = document.querySelector(`.d-${id}`) as HTMLDivElement;
        const segmentE = document.querySelector(`.e-${id}`) as HTMLDivElement;
        const segmentF = document.querySelector(`.f-${id}`) as HTMLDivElement;
        const segmentG = document.querySelector(`.g-${id}`) as HTMLDivElement;
        getSectionBackgroundColor(
            number,
            segmentA,
            segmentB,
            segmentC,
            segmentD,
            segmentE,
            segmentF,
            segmentG);
    }, [number]);


	return (
		<div className="number-wrapper">
			<div className={`horizontal a a-${id}`} />
			<div className={`vertical b b-${id}`} />
			<div className={`vertical c c-${id}`} />
			<div className={`horizontal d d-${id}`} />
			<div className={`vertical e e-${id}`} />
			<div className={`vertical f f-${id}`} />
			<div className={`horizontal g g-${id}`} />
		</div>  
	);
};

export default Number;
