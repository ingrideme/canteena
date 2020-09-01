import React, {useState } from 'react';
import './Form.css';
import axios from 'axios';

const Form = () => {
	const [userDetails, setUserDetails] = useState({
		userName: '',
		userEmail: '',
		message: ''	
	});

	const formValues = (event) => {
		setUserDetails ({
			...userDetails,
			[event.target.name]: event.target.value
		})
	}

		const register = async (event) => {
			event.preventDefault(); 

			const body = JSON.stringify({
				userName: userDetails.userName,
				userEmail: userDetails.userEmail,
			});

			const response = await axios.post("/api/register", body, {
				headers: {
					'Content-Type': 'application/json'
				}
			})
			
			setUserDetails({
				...setUserDetails,
				message: response.data.message
			})
		}		
	
    return (
        <div className="container">
            <h1 className="titulo">Cadastre-se</h1>
						<form onSubmit={register}>
							<label>Nome:</label>
							<input required type="text" id="userName" name="userName" onChange={formValues}/>
							<br/>
							<label>Email:</label>
							<input required type="email" id="userEmail" name="userEmail"  onChange={formValues}/>
							<br/>
							<button type="submit">Cadastre-se</button>
						{ userDetails.message 
							? <h1 className="resultMessage">{userDetails.message}</h1>
							: null
						}
						</form>
        </div>
    )
}


export default Form;
