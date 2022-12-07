import React from "react";
import Button from "../Button";

const ButtonSubmit = ({onClick}) => {
	return (
		<Button 
			textButton={'Submit'}
			onClick={() => onClick()}
		/>
	)
};

export default ButtonSubmit;