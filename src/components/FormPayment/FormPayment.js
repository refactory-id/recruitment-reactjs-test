import React from 'react';
import Form from '../Form';

function FormPayment(){
  return(
		<Form 
			id={'formPayment'}
			method={'POST'}
			maxLength={30}
		/>
  );
};

export default FormPayment;