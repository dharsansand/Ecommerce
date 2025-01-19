import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import productsreducer   from './slices/productslice';



const reducer = combineReducers({
  productsState:productsreducer

  
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
