import React , { Component }  from 'react';

import insurance from '../assets/Group2-1.svg';
import savings from '../assets/Group2.svg';

const Home = ({...props}) => (
	<main className="mb5 mh2 mh6-l">
		<h1 className="f3 mv4 tc folksam-blue">
			Hej Folke!
		</h1>
		<div className="folksam-bg pv5">
			<div className="flex justify-center center w-50-l h4 mb4">
				<div className="fl w-30 h-100 pv3 bg-white tc br2 shadow-2 ma2">
					<img src={insurance} alt="insurance-logo" className="pt2 w-60 h-60" />
					<p className="f6 folksam-blue b">Mina försäkringar</p>
				</div>
				<div className="fl w-30 h-100 pv3 bg-white tc br2 shadow-2 ma2">
					<img src={savings} alt="savings-logo" className="pt2 w-60 h-60" />
					<p className="f6 folksam-blue b">Mitt sparande</p>
				</div>
			</div>
		</div>
	</main>
)

export default Home;