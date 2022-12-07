import React, { useState } from "react";

const Input = ({stages, inputRef, max}) => {

  const [stage = stages, setStage] = useState("");

	const maxLength = max? max : 30;

  return (
		<div>
			<input 
				ref={inputRef}
				type="text" 
				value={stage}
				onChange={e=>setStage(e.target.value)}
				maxLength={maxLength}
			/>
		</div>
  );
};

export default Input;