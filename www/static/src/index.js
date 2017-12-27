import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/index';
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import configureStore from "./stores/index";
import createHistory from 'history/createHashHistory';

const history = createHistory();


const store = configureStore();

// ReactDOM.render(<Routes />, document.getElementById('root'));
ReactDOM.render( 
   <Provider store={store}>
      <App />
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
