import React from 'react'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import MainLayout from '../layouts/MainLayout.js'
import MessageBox from './messages'
import AppHome from './home';
import AppMy from './my';
import configureStore from "../stores/";
import { Provider, connect } from 'react-redux';



import createHistory from 'history/createHashHistory';
const history = createHistory();


const store = configureStore();


const Home = ({ match }) => (
    <AppHome path={match.path} />
  )

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Messages = ({match}) => (
  <MessageBox path={match.path} />
)

const My =  ({match}) => (
  <AppMy path={match.path} />
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
        <MainLayout history={history}>
          <Route exact path="/" component={Home}/>
          <Route exact path="/messages" component={Messages}/>
          <Route path="/shop_cart" component={About}/>
          <Route exact path="/my" component={My}/>
        </MainLayout>
    </Router>
  </Provider>
)
export default Routes
