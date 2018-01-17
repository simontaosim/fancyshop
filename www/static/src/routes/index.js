import React from 'react'
import {
  HashRouter as Router,
  Route,
  Link,
  BrowserRouter
} from 'react-router-dom';

import MainLayout from '../layouts/MainLayout.js'
import MessageBox from './messages'
import AppHome from './home';
import My from './my';
import Register from './register/Register';
import {  connect } from 'react-redux';
import PrivateRoute from './container/PrivateRoute';
import TabLogin from './login/TabLogin';
// import MyOrders from './orders/MyOrder'
//import MyOrders from './Orders/MyOrder';
import { getStore } from '../config/mUtils';
import Test from './checkbox';
import About from './home/shop_cart';
import MyOrders from './orders/index';
import Goods from './product/index';
import ShopCart from './shop_cart/index';
import WaitDetails from './orders/waitdetails';
import Paid from './orders/paid';
import Refund from './orders/Refund';
import UntreatedDetail from './orders/UntreatedDetail';
import QrCode from './orders/qrcode';
import Change from './shop_cart/Change';
import SelectTest from './shop_cart/select_test';
import CartNull from './shop_cart/null';
import CartTest from './checkbox/cart'
import UserData from './my/UserData';
import ProductModal from './product/ProductModal';
import Facilitator from './product/facilitator';
import FirmOrder from './product/FirmOrder';
import Pull from './checkbox/pull'
import PullTest from './checkbox/pullTest'


import ForgotPassword from './password/'
import ResetPassword from './password/ResetPassword'



import createHistory from 'history/createHashHistory';
const history = createHistory();


const Home = ({ match }) => (
    <AppHome path={match.path} />
  )

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
              <Route exact path="/" component={Home} authenticated={authenticated}/>
              <Route path="/messages" component={Messages} authenticated={authenticated}/>
              {/* <PrivateRoute path="/shop_cart" component={About} authenticated={authenticated}/> */}
              <Route path = "/shop_cart" component={ShopCart} />
              <Route path="/my" component={My} authenticated={authenticated}/>
              {/* <PrivateRoute path = "/shop_cart" component={ShopCart} authenticated={authenticated}/> */}
              <Route path="/register" component={Register}/>
              <Route path="/tablogin" component={TabLogin} />
              {/* <Route path="/my" component={My}  /> */}
              {/* <Route path="/myorders" component={MyOrders}  /> */}
              <Route path="/test" component={Test}  />

              <Route path = "/orders" component={MyOrders}/>
              <Route path = "/product" component={Goods}/>
              {/* <Route path = "/cart" component={ShopCart}/> */}
              <Route path = "/details" component={WaitDetails}/>
              <Route path = "/paid" component={Paid}/>
              <Route path = "/refund" component={Refund}/>
              <Route path = "/untreated" component={UntreatedDetail}/>
              <Route path = "/qrcode" component={QrCode}/>
              <Route path = "/shopedit" component={Change}/>
              <Route path = "/nullcart" component={ CartNull }/>
              <Route path = "/userdata" component={ UserData }/>
              <Route path = "/facilitator" component = { Facilitator }/>
              <Route path = "/productmodal" component={ ProductModal }/>
              <Route path = "/firmorder" component = {FirmOrder}/>



              {/* <Route path = "/select" component={SelectTest}/> */}


              <Route path="/forgotpassword" component={ForgotPassword}  />
              <Route path="/resetpassword" component={ResetPassword}  />
              <Route path="/carttest" component={CartTest}  />
              <Route path="/pull" component={Pull}  />
              <Route path="/pulltest" component={PullTest}  />
              
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
