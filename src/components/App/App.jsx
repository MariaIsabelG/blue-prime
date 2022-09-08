import React, { useEffect } from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ProtectedRouteAdmin from '../ProtectedRoute/ProtectedRouteAdmin';
import ProtectedRouteAgent from '../ProtectedRoute/ProtectedRouteAgent';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import AboutPage from '../AboutPage/AboutPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import JoinTeam from '../JoinOurTeam/JoinTeam';
import ResourcesPage from '../ResourcesPage/ResourcesPage';

import ArticleOne from '../Articles/ArticleOne';
import ArticleTwo from '../Articles/ArticleTwo';
import ArticleThree from '../Articles/ArticleThree';
import ArticleFour from '../Articles/ArticleFour';
import ArticleFive from '../Articles/ArticleFive';

import CategoryNav from '../CategoryNav/CategoryNav';
import CategoryOne from '../Catergories/Home';
import CategoryTwo from '../Catergories/Auto';
import CategoryThree from '../Catergories/Disability';
import CategoryFour from '../Catergories/Renters';
import CategoryFive from '../Catergories/Life';

import FindPro from '../FindPro/FindPro';
import Canopy from '../Canopy/Canopy';
import ClientConfirmation from '../ClientConfirmation/ClientConfirmation';
import AgentDashboard from '../AgentDashboard/AgentDashboard';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import AgentLeads from '../AgentLeads/AgentLeads';
import AgentPotentials from '../Agent Potentials/AgentPotentials';
import AgentWon from '../AgentWon/AgentWon';
import AgentLost from '../AgentLost/AgentLost';
import ClientInfo from '../ClientInfo/ClientInfo';

import './App.css';

function App() {
	const dispatch = useDispatch();

	const user = useSelector((store) => store.user);

	useEffect(() => {
		dispatch({ type: 'FETCH_USER' });
	}, [dispatch]);

	return (
		<Router>
			<div>
				<Nav />
				<Switch>


					{/* Articles */}

					<Route exact path="/a1">
						<CategoryNav />
						<ArticleOne />
					</Route>

					<Route exact path="/a2">
						<CategoryNav />
						<ArticleTwo />
					</Route>

					<Route exact path="/a3">
						<CategoryNav />
						<ArticleThree />
					</Route>

					<Route exact path="/a4">
						<CategoryNav />
						<ArticleFour />
					</Route>

					<Route exact path="/a5">
						<CategoryNav />
						<ArticleFive />
					</Route>
					{/* Categories */}
					<Route exact path="/c1">
						<CategoryNav />
						<CategoryOne />
					</Route>

					<Route exact path="/c2">
						<CategoryNav />
						<CategoryTwo />
					</Route>

					<Route exact path="/c3">
						<CategoryNav />
						<CategoryThree />
					</Route>

					<Route exact path="/c4">
						<CategoryNav />
						<CategoryFour />					
					</Route>

					<Route exact path="/c5">
						<CategoryNav />
						<CategoryFive />
					</Route>



					<Route exact path='/registerforbluevest2022'>
						<RegisterPage />
					</Route>
					<Route exact path='/findPro'>
						<FindPro />
					</Route>

					<Route exact path='/jointeam'>
						<JoinTeam />
					</Route>

					<Route exact path='/canopy'>
						<Canopy />
					</Route>

					<Route exact path='/confirmation'>
						<ClientConfirmation />
					</Route>

					{/* Agent Dashboard */}
					<ProtectedRouteAgent exact path='/agent'>
						<AgentDashboard />
					</ProtectedRouteAgent>

					<ProtectedRouteAdmin exact path='/admin'>
						<AdminDashboard />
					</ProtectedRouteAdmin>

					<ProtectedRouteAgent exact path='/agent/leads'>
						<AgentLeads />
					</ProtectedRouteAgent>

					<ProtectedRouteAgent exact path='/agent/potentials'>
						<AgentPotentials />
					</ProtectedRouteAgent>

					<ProtectedRouteAgent exact path='/agent/won'>
						<AgentWon />
					</ProtectedRouteAgent>

					<ProtectedRouteAgent exact path='/agent/lost'>
						<AgentLost />
					</ProtectedRouteAgent>

					<ProtectedRouteAgent exact path='/client/:id'>
						<ClientInfo />
					</ProtectedRouteAgent>

					{/* Resource Landing Page */}
					<Route exact path='/resources'>
						<CategoryNav />
						<ResourcesPage />
					</Route>


					{/* Visiting localhost:3000 will redirect to localhost:3000/home */}
					<Redirect exact from='/' to='/home' />

					{/* Visiting localhost:3000/about will show the about page. */}
					<Route
						// shows AboutPage at all times (logged in or not)
						exact
						path='/about'>
						<AboutPage />
					</Route>

					{/* For protected routes, the view could show one of several things on the same route.

            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}

					<Route exact path='/login'>
						{user.id ? (
							// If the user is already logged in,
							// redirect to the /user page
							<Redirect to='/agent' />
						) : (
							// Otherwise, show the login page
							<LoginPage />
						)}
					</Route>

					<Route exact path='/home'>
						<LandingPage />
					</Route>

					<Route exact path='/home'>
						<LandingPage />
					</Route>

					{/* If none of the other routes matched, we will show a 404. */}
					<Route>
						<h1>404</h1>
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
