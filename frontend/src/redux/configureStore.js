import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { createLogger } from 'redux-logger';
import auth from './auth';
import profile from './profile';
import projects from './projects';
import posts from './posts';

const loggerMiddleware = createLogger();

const reducer = combineReducers({
  auth,
  profile,
  projects,
  posts,
});

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(
  reducer,
  {},
  composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware))
);

export default store;
