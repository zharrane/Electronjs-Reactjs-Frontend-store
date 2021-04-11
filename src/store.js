import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
//Reducer of products
import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productReducers';
///

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
});

const initialState = {};

const mw = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...mw))
);

export default store;
