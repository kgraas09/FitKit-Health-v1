import React, { useState, useEffect } from 'react';
import getSupplements from '../lib/routes.js';
import getPreworkouts from '../lib/routes.js';
import getPostworkouts from '../lib/routes.js';
import LandingPage from './components/Landing/landing.jsx';
import Header from './components/Header/header.jsx';
import MasterForm from './components/RecommendationForm/masterForm.jsx';
import Results from './components/RecommendationForm/results.jsx';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => {
  const [supplements, setSupplements] = useState([]);
  const [preworkouts, setPreworkouts] = useState([]);
  const [postworkouts, setPostworkouts] = useState([]);
  const [siteShown, setSiteShown] = useState(false);
  const [buttonView, setButtonView] = useState(true);
  const [form, setForm] = useState({});
  const [shown, setShown] = useState(false);

  useEffect(() => {
    getSupplements()
      .then((data) => { setSupplements(data) 
      return getPreworkouts() })
      .then((data) => { setPreworkouts(data)
      return getPostworkouts() })
      .then((data) => { setPostworkouts(data) })
      .catch((err) => console.log(err));
  }, []);

  const handleFormViewer = () => {
    console.log('Welcome to FitKit.');
    setSiteShown(true);
    setButtonView(false);
  }

  return (
    <>
      <div>
      <Router>
      <Header / >
      <div class="background"></div>
        <Switch>
          <Route path="/" component={LandingPage} loadSite={handleFormViewer} buttonAvailable={buttonView}/>
          <MasterForm path="/formentry" form={form} setForm={setForm}/>
          <Results path="/results" form={form} supplements={supplements} preworkouts={preworkouts} postworkouts={postworkouts}/>
        </Switch>
      </Router>
      </div>
    </>
  )
};

export default App;
