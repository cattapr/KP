import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import logo from '../assets/logo.svg';

const Header = props => (
	<header className="mt3 pb3 bb bw2 b--light-gray">
		<div className="ml6">
			<NavLink to="/"><img src={logo} alt="logo" className="h2" /></NavLink>
		</div>
	</header>
)

export default Header;