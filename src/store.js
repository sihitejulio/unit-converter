
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import user from './reducer/user.reducer';

const rootReducer = combineReducers({
  user
});

const store =createStore(
    rootReducer,
    compose(applyMiddleware(thunk))
  );

export default store;