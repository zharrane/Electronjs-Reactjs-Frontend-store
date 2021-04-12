import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//Reducer of User
import { userLoginReducer } from './reducers/userReducers';

//Reducer of products
import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productReducers';
///

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  userLogin: userLoginReducer,
});

const userInfosFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

///////////////
const initialState = {
  userLogin: { userInfo: userInfosFromStorage },
};

const mw = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...mw))
);

export default store;
