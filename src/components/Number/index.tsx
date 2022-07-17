import React from "react";
import "./styles.css";
import { NumberProps } from "./types";

const Number = (props: NumberProps) => {
	const { number } = props;
	return (
		<div className="number-wrapper">
			<div className="segment horizontal A"></div>
			<div className="segment vertical B"></div>
			<div className="segment vertical C"></div>
			<div className="segment horizontal D"></div>
			<div className="segment vertical E"></div>
			<div className="segment vertical F"></div>
			<div className="segment horizontal G"></div>
		</div>  
	);
};

export default Number;
