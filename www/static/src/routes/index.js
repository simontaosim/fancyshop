import React from 'react'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import MainLayout from '../layouts/MainLayout.js'
import MessageBox from './messages'
import configureStore from "../stores/";
import { Provider, connect } from 'react-redux';
const store = configureStore();

const Home = () => (
  <div>
    <h1>此处是首页</h1>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Routes = () => (
  <Provider store={store}>
    <Router>
        <MainLayout>
          <Route exact path="/" component={Home}/>
          <Route exact path="/messages" component={MessageBox}/>
          <Route path="/about" component={About}/>
          <Route path="/topics" component={Topics}/>
        </MainLayout>
    </Router>
  </Provider>
)
export default Routes
