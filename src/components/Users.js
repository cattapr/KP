import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const Users = ({users, showUsersButton, getUserById, getUsers }) => (
	<div className="mh5-l">
		<div className="bg-beige min-h-100 mv3 pv4">
			<ul className="list p10 mv0 pad-bottom">
				{users.map(user => (
				<li key={user.id} className="br3 ph3 ph4-l bg-white mr4 mb2">
					<div className="pv3 flex justify-between items-center">
						<p className="f5P-l mv0 folksam-blue b pr2">{user.name}</p>
						<Link to={`/user/${user.id}`}>
							<button className="f6 f5-l w4 w5-l bn b pa2 pa3-l ph4 folksam-bg white pointer br4" onClick={() => getUserById(user.id)}>Gå till användaren</button>
						</Link>
					</div>
				</li>
				))}
			</ul>
		</div>
	</div>
)

export default Users;