import React from 'react';
import './LandingPage.css';
import TopComponent from './TopComponent.jsx';
import Process from './Process.jsx';
import ResourcesBtns from './ResourcesBtns';

function LandingPage() {

	return (
		<div>
			<TopComponent />
			<Process/>
			<ResourcesBtns/>
		</div>
	)
};

export default LandingPage;
