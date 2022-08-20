import { useState } from 'react'
import './FormInput.css'

const FormInput = props => {
	const [focus, setFocus] = useState(false)
	const { id, label, name, errorMessage, onChangeFormInput, ...inputProps } = props

	const onBlurInput = e => {
		setFocus(true)
	}

	return (
		<div className='form-input'>
			<label htmlFor={name}>{label}</label>
			<input {...inputProps} id={name} name={name} onChange={onChangeFormInput} focused={focus.toString()} onBlur={onBlurInput} onFocus={() => name === 'confirmPassoword' && setFocus(true)} />
			<span>{errorMessage}</span>
		</div>
	)
}

export default FormInput
