import React from 'react'
import {
  HashRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import MainLayout from '../layouts/MainLayout.js'
import MessageBox from './messages'
import AppHome from './home';
import My from './my';
import Register from './register/Register';
import {  connect } from 'react-redux';
import PrivateRoute from './container/PrivateRoute';

import TabLogin from './login/TabLogin';
import MyOrders from './orders/MyOrder'
import { getStore } from '../config/mUtils';
import Test from './checkbox'
import About from './home/shop_cart';





import createHistory from 'history/createHashHistory';
const history = createHistory();




const Home = ({ match }) => (
    <AppHome path={match.path} />
  )

// const About = () => (
//   <div>
//     <h2>About</h2>
//   </div>
// )

const Messages = ({match}) => (
  <MessageBox path={match.path} />
)

// const My =  ({match}) => (
//   <AppMy path={match.path} />
// )

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

class App extends React.Component {
  render() {
    // const authenticated = this.props.user.authenticated
    const authenticated = getStore('authenticated');
    return (
      <Router >
          <MainLayout history={history}>
          {/*
              <PrivateRoute exact path="/" component={Home} authenticated={authenticated}/>
              <PrivateRoute path="/messages" component={Messages} authenticated={authenticated}/>
              <PrivateRoute path="/shop_cart" component={About} authenticated={authenticated}/>
              <PrivateRoute path="/my" component={My} authenticated={authenticated}/>
<<<<<<< HEAD
                */}
              <Route path="/tablogin" component={TabLogin} />

              <Route path="/" component={Home}/>
              {/* <PrivateRoute path="/login" component={Login}/> */}
              <PrivateRoute path="/register" component={Register}/>
              {/* <Route path="/map" component={Map} />
              <Route path="/reactmap" component={ReactMap} /> */}
              <Route path="/my" component={My} />
              <Route path="/messages" component={MessageBox}/>
              <Route path="/shop_cart" component = {About}/>
          </MainLayout>
{/* =======
              <Route path="/register" component={Register}/>
              <Route path="/tablogin" component={TabLogin} />
              {/* <Route path="/my" component={My}  /> *}
              <Route path="/myorders" component={MyOrders}  />
              <Route path="/test" component={Test}  />
          </MainLayout>
>>>>>>> ac4af22e0c865ba1ea490a3d5f278ebecb2c9645 */}
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
