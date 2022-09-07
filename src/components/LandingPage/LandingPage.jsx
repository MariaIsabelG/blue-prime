import React from 'react';
import './LandingPage.css';
import TopComponent from './TopComponent.jsx';
import Process from './Process.jsx';
import ResourcesBtns from './ResourcesBtns';
import Agents from './Agents';

function LandingPage() {

	return (
		<div>
			<TopComponent />
			<Process/>
			<ResourcesBtns/>
			<Agents/>
		</div>
	)
};

export default LandingPage;
