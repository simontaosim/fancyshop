import React from 'react'
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';



import MainLayout from '../layouts/MainLayout.js'
import MessageBox from './messages'
import AppHome from './home';
import My from './my';
import Register from './register/Register';
import {  connect } from 'react-redux';
import TabLogin from './login/TabLogin';
import { getStore } from '../config/mUtils';
import Test from './checkbox';
import Goods from './product/index';
import ShopCart from './shop_cart/index';
import WaitDetails from './orders/WaitDetails';
import Paid from './orders/Paid';
import Refund from './orders/Refund';
import UntreatedDetail from './orders/UntreatedDetail';
import QrCode from './orders/QrCode';
import CartNull from './shop_cart/CartNull';
import CartTest from './checkbox/cart'
import UserData from './my/UserData';
import ProductModal from './product/ProductModal';
import Facilitator from './product/Facilitator';
import FirmOrder from './product/FirmOrder';
import PaySuccess from './product/PaySuccess';
import Address from './product/Address';
import SearchBox from './search/ProductSearch';
import SearchResult from './search/SearchResult';
import Cart from './checkbox/cart';
import Wallet from './wallet/index';
import Withdraw from './wallet/Withdraw';
import WithdrawSuccess from './wallet/WithdrawSuccess';
import WithdrawWait from './wallet/WithdrawWait';
import VipCard from './vipcard/index';
import Coupon from './coupon/index';
import MyBankCard from './wallet/MyBankCard';
import EditBankCard from './wallet/EditBankCard';
import ForgotPassword from './password/'
import ResetPassword from './password/ResetPassword'
import NoMatchPage from './no_match/'
import Shops from './shops/'
import Personal from './my/Personal';
import Orders from './orders/index';
import OrderList from './orders/OrderList';

import {  Toast } from 'antd-mobile';
import{ loadLoginedUserInfo } from '../actions/users';

import createHistory from 'history/createHashHistory';
import configureStore from "../stores/index";

const store = configureStore();
const history = createHistory();
const Home = ({ match }) => (
    <AppHome path={match.path} />
  )

const ShopsPage = ({ match }) => (
    <Shops path={match.path}  params={match.params}  />
  )

const Messages = ({match}) => (
  <MessageBox path={match.path} />
)

class App extends React.Component {


  componentDidMount(){
    store.dispatch(loadLoginedUserInfo());
    
  }
  render() {
    
    return (
      <Router >
          <MainLayout history={history}>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/money" component={Home} />
              <Route path="/messages" component={Messages} />
              <Route path = "/shop_cart" component={ShopCart} />
              <Route path="/my"  component={My} />
              <Route path="/register" component={Register}/>
              <Route path="/tablogin" component={TabLogin} />
              <Route path="/test" component={Test}  />
              {/* <Route path = "/orders" component={Orders}/> */}
              <Route path = "/product/:id" component={Goods}/>
              <Route path = "/order_details/:orderId" component={WaitDetails}/>
              <Route path = "/paid/:orderId" component={Paid}/>
              <Route path = "/refund" component={Refund}/>
              <Route path = "/untreated" component={UntreatedDetail}/>
              <Route path = "/qrcode" component={QrCode}/>
              <Route path = "/nullcart" component={ CartNull }/>
              <Route path = "/userdata" component={ UserData }/>
              <Route path = "/facilitator/:shopId" component = { Facilitator }/>
              <Route path = "/productmodal" component={ ProductModal }/>
              <Route path = "/firmorder/:orderId" component = {FirmOrder}/>
              {/* <Route path = "/firmorder" component = {FirmOrder}/> */}
              <Route path = "/paysuccess" component = {PaySuccess}/>
              <Route path="/forgotpassword" component={ForgotPassword}  />
              <Route path="/resetpassword" component={ResetPassword}  />
              <Route path="/carttest" component={CartTest}  />
              <Route path="/address" component={Address}  />
              <Route path="/searchbar" component={SearchBox}  />
              <Route path="/searchresult" component={SearchResult}/>
              <Route path="/shops/:tagId" component={ShopsPage}/>
              <Route path="/pull" component={Cart}/>
              <Route path="/wallet" component={Wallet}/>
              <Route path="/withdraw" component={Withdraw}/>
              <Route path="/withdrawsuccess" component={WithdrawSuccess}/>
              <Route path="/withdrawwait" component={WithdrawWait}/>
              <Route path="/vipcard" component={VipCard}/>
              <Route path="/coupon" component={Coupon}/>
              <Route path="/bankcard" component={MyBankCard}/>
              <Route path="/editbankcard" component={EditBankCard}/>
              <Route path="/orderlist" component={OrderList}/>
              <Route path = "/orders" component={Orders}/>
              <Route path = "/personal" component={Personal}/>
              <Route component={NoMatchPage}/>
            </Switch>

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
