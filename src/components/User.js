import React, { Component } from 'react';
import Textarea from './TextArea';

const User = ({user, ...props }) => {
	return (
		<main className="mh5">
			<div className="cf bg-beige min-h-100 mv3">
				<div className="fl w-100 pa4">
				  <div className="overflow-auto">
				    <table className="f6 w-100 mw8 center" cellSpacing="0">
				      <thead>
				        <tr className="stripe-dark">
				          <th className="fw6-l tl pa3 bg-white">Name</th>
				          <th className="fw6-l tl pa3 bg-white">Username</th>
				          <th className="fw6-l tl pa3 bg-white">Email</th>
				          <th className="fw6-l tl pa3 bg-white">Phone</th>
				        </tr>
				      </thead>
				      <tbody className="lh-copy">
				        <tr className="folksam-bg white b">
				          <td className="pa3">{user.name}</td>
				          <td className="pa3">{user.username}</td>
				          <td className="pa3">{user.email}</td>
				          <td className="pa3">{user.phone}</td>
				        </tr>
				      </tbody>
				    </table>
				  </div>
				</div>
			 </div>
			 <Textarea {...props} />
		</main>
	)
}


export default User;