import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import auth from './auth'

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, loggerMiddleware)(createStore);

const reducer = combineReducers({
  auth
});

const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);

export default configureStore;