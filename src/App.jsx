import { useState } from 'react'
import FormInput from './components/FormInput'
import './App.css'

function App() {
	const [values, setValues] = useState({
		username: '',
		email: '',
		birthday: '',
		password: '',
		confirmPassoword: '',
	})

	const inputs = [
		{
			id: 1,
			name: 'username',
			type: 'text',
			placeholder: 'Username',
			label: 'Username',
			errorMessage: 'Username should be 3-16 characters and shoudn\'t include any special character',
			pattern: '^[A-Za-z0-9]{3,16}$',
			required: true
		},
		{
			id: 2,
			name: 'email',
			type: 'text',
			placeholder: 'Email',
			label: 'Email',
			errorMessage: 'It should be a valid email address',
			required: true
		},
		{
			id: 3,
			name: 'birthday',
			type: 'date',
			placeholder: 'Birthday',
			label: 'Birthday',
		},
		{
			id: 4,
			name: 'password',
			type: 'password',
			placeholder: 'Password',
			label: 'Password',
			errorMessage: 'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character.',
			pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
			required: true
		},
		{
			id: 5,
			name: 'confirmPassoword',
			type: 'password',
			placeholder: 'Confirm Passoword',
			label: 'Confirm Passoword',
			errorMessage: 'Passwords don\'t match',
			pattern: values.password,
			required: true
		},
	]

	const onSubmitForm = e => {
		e.preventDefault()
	}

	const onChangeFormInput = e => {
		setValues({ ...values, [e.target.name]: e.target.value })
	}

	return (
		<div className='app'>
			<form onSubmit={onSubmitForm}>
				<h1>Register</h1>
				{inputs.map(input => (
					<FormInput key={input.id} {...input} value={values[input.name]} onChangeFormInput={onChangeFormInput} />
				))}
				<button>Submit</button>
			</form>
		</div>
	)
}

export default App
