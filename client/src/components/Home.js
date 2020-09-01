import React, { useState, useEffect } from 'react';
import './Home.css';
import axios from 'axios';

const Home = () => {
	const [users, setUsers ] = useState([]);

	const getUsers = async () => {
		const res = await axios.get('/api/users');
		console.log ( res.data.users );
		setUsers(res.data.users);
	}

	useEffect(() => {
		getUsers();
	}, []);

	const allUsers = users.length > 0 && users.map ( (user, index) => {
		return <li key="{index}">Nome: {user.name} // Email: {user.email}  </li>
	})

	const message = users.length > 0 ? "Todos os Usuarios" : "Não há usuários cadastrados";

    return (
        <div className="container">
					<h1 className="titulo">{ message }</h1>
					<ul className="usuarios">

					{ allUsers }

					</ul>
				</div>
			 )
}

export default Home;
