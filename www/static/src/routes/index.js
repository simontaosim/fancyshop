import React from 'react'
import {
  HashRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import MainLayout from '../layouts/MainLayout.js'
import MessageBox from './messages'
import AppHome from './home';
import AppMy from './my';
import Login from './home/components/Login';
import Register from './home/components/Register';
import configureStore from "../stores/";
import { Provider,  connect } from 'react-redux';
import PrivateRoute from './container/PrivateRoute';
import TabLogin from './container/TabLogin';
import ReactMap from './container/ReactMap';
import Map from './container/Map';



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


const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
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

class App extends React.Component {
  render() {
    const authenticated = this.props.user.authenticated
    return (
      <Router>
          <MainLayout history={history}>
              <PrivateRoute exact path="/" component={Home} authenticated={authenticated}/>
              <PrivateRoute path="/messages" component={Messages} authenticated={authenticated}/>
              <PrivateRoute path="/shop_cart" component={About} authenticated={authenticated}/>
              {/* <PrivateRoute path="/my" component={My} authenticated={authenticated}/> */}
              <Route path="/login" component={Login}/>
              <Route path="/register" component={Register}/>
              <Route path="/tablogin" component={TabLogin} />
              <Route path="/map" component={Map} />
              <Route path="/reactmap" component={ReactMap} />
              <Route path="/my" component={My} />
          </MainLayout>    
      </Router>
    )
  }
}



function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App);


