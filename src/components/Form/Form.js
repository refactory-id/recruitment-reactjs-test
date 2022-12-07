import React from "react";
import ButtonSubmit from "../ButtonSubmit";
import Input from "../Input";
import Label from "../Label";
import Separator from "../Separator/Separator";
import './Form.css'

const Form = ({maxLength, id, method}) => {
  return (
		<>
			<form
				id={id}
				method={method}
			>
				<div className="formDisplay">
					<Label 
						textLabel={'Restaurant Name'}
					/>
					<Separator />
					<Input 
						id={'restaurantName'}
						maxLength={maxLength}
						placeholder={'Input Restaurant Name'}
					/>
				</div>
				<div className='formDisplay'>
					<Label 
						textLabel={'Date of Print'}
					/>
					<Separator />
					<Input 
						id={'dateOfPrint'}
						maxLength={maxLength}
						placeholder={'DD/MM/YYYY'}
					/>
				</div>
				<div className='formDisplay'>
					<Label 
						textLabel={'Cashier Name'}
					/>
					<Separator />
					<Input 
						id={'cashierName'}
						maxLength={maxLength}
						placeholder={'Input Cashier Name'}
					/>
				</div>
				<div className='formDisplay'>
					<ButtonSubmit
						onClick={()=>{}}
					/>
				</div>
			</form>
		</>
	)
}

export default Form;