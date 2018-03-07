



import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise';
import reduxThunk from 'redux-thunk';

import rootReducer from '../reducers';

import { LOGIN_SUCCESS } from '../actions/login';

import NavBar from './common/Navbar';
import NoAuth from './common/noAuth';
import authRequired from './common/Auth';
import NotFound from './common/Notfound';
import LoginContainer from '../containers/LoginContainer';
import RegisterContainer from '../containers/RegisterContainer';
import DasboardContainer from '../containers/DashboardContainer';


const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(reduxThunk, promise))(createStore);
const store = createStoreWithMiddleware(rootReducer);
const token = localStorage.getItem('access_token');

if(token) {
    store.dispatch({ type: LOGIN_SUCCESS});
  }

const App = (props) => (
    <div>
        <Provider store={store}>

           <BrowserRouter>
                <div> 
                    <NavBar {...this.props}/> 
                    <Switch>
                        <Route exact path='/register' component={NoAuth(RegisterContainer)} />
                        <Route exact path='/login' component={NoAuth(LoginContainer)} />
                        <Route path= "*" component={NotFound} />
                        <Route exact path= "/" component={authRequired(DasboardContainer)} />
                    </Switch> 
                </div> 
            </BrowserRouter>
        </Provider>
    </div>
)
export default App;