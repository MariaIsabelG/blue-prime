import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRouteAdmin from '../ProtectedRoute/ProtectedRouteAdmin';
import ProtectedRouteAgent from '../ProtectedRoute/ProtectedRouteAgent';

import AboutPage from '../AboutPage/AboutPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterForm from '../RegisterForm/RegisterForm';

import ResourcesPage from '../ResourcesPage/ResourcesPage';
import CategoryOne from '../Categories/CategoryOne/CategoryOne';
import CategoryTwo from '../Categories/CategoryTwo/CategoryTwo';
import CategoryThree from '../Categories/CategoryThree/CategoryThree';
import CategoryFour from '../Categories/CategoryFour/CategoryFour';

import ArticleOne from '../Articles/ArticleOne/ArticleOne';
import ArticleTwo from '../Articles/ArticleTwo/ArticleTwo';
import ArticleThree from '../Articles/ArticleThree/ArticleThree';
import ArticleFour from '../Articles/ArticleFour/ArticleFour';
import ArticleFive from '../Articles/ArticleFive/ArticleFive';
import ArticleSix from '../Articles/ArticleSix/ArticleSix';

import FindPro from '../FindPro/FindPro';
import Canopy from '../Canopy/Canopy';
import AgentDashboard from '../AgentDashboard/AgentDashboard';
import AgentLeads from '../AgentLeads/AgentLeads';
import AgentPotentials from '../Agent Potentials/AgentPotentials';
import AgentWon from '../AgentWon/AgentWon';
import AgentLost from '../AgentLost/AgentLost';
import ClientInfo from '../ClientInfo/ClientInfo';
// import AdminDashboard from '../AdminDashboard/AdminDashboard'; DELETE AFTER STEPHON PUSHES ADMIN DASHBOARD

import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>


        <Route exact path="/findPro">
          <FindPro />
        </Route>

        <Route exact path="/canopy">
          <Canopy />
        </Route>

          {/* Agent Dashboard */}
          <ProtectedRouteAgent exact path="/agent">
            <AgentDashboard />
          </ProtectedRouteAgent>

          <ProtectedRouteAdmin exact path="/admin">
            {/* <AdminDashboard /> */}
          </ProtectedRouteAdmin>


          <ProtectedRouteAgent exact path="/agent/leads">
            <AgentLeads/>
          </ProtectedRouteAgent>

          <ProtectedRouteAgent exact path="/agent/potentials">
            <AgentPotentials/>
          </ProtectedRouteAgent>

          <ProtectedRouteAgent exact path="/agent/won">
            <AgentWon/>
          </ProtectedRouteAgent>

          <ProtectedRouteAgent exact path="/agent/lost">
            <AgentLost/>
          </ProtectedRouteAgent>

          <ProtectedRouteAgent exact path="/client/:id">
            <ClientInfo/>
          </ProtectedRouteAgent>

        {/* Resource Landing Page */}
          <Route exact path="/resources">
            <ResourcesPage />
          </Route>

          {/* Categories */}
          <Route exact path="/c1">
            <CategoryOne />
          </Route>

          <Route exact path="/c2">
            <CategoryTwo />
          </Route>

          <Route exact path="/c3">
            <CategoryThree />
          </Route>

          <Route exact path="/c4">
            <CategoryFour />
          </Route>


          {/* Articles */}

          <Route exact path="/a1">
            <ArticleOne />
          </Route>

          <Route exact path="/a2">
            <ArticleTwo />
          </Route>

          <Route exact path="/a3">
            <ArticleThree />
          </Route>

          <Route exact path="/a4">
            <ArticleFour />
          </Route>

          <Route exact path="/a5">
            <ArticleFive />
          </Route>

          <Route exact path="/a6">
            <ArticleSix />
          </Route>

          

          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}

          <Route
            exact
            path="/login"
          >
            {user.access_level === 1 && 
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/admin" />}

            {user.access_level === 2 && 
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/agent" />}
        
              {/* Otherwise, show the login page */}
              <LoginPage />
            
          </Route>

          <Route
            exact
            path="/home"
          >
            {/* {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Landing page */}
              <LandingPage />
            {/* } */}
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
