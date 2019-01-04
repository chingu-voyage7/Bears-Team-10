import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { createLogger } from 'redux-logger';
import auth from './auth';
import profile from './profile';
import projects from './projects';

const loggerMiddleware = createLogger();

const reducer = combineReducers({
  auth,
  profile,
  projects,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  {},
  composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware))
);

export default store;
