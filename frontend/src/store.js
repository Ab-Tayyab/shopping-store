import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import cartReducer from './reduxStore/reducer/CartReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
