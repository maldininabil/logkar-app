import { combineReducers, createStore, thunk, applyMiddleware, compose } from 'libraries';
import filmReducer from "./film/reducer";
import toggleMenuReducer from "./menu/reducer";

const composeEnhancers = (process.env.NODE_ENV === 'development' ? window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] : null) || compose;

/**
 * reducer
 */
export const reducer = combineReducers({
    film: filmReducer,
    menu: toggleMenuReducer,
});

/**
 * store
 */
export const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
));

/**
 * dispatcher
 */
export * from './film/action';
export * from './menu/action';

/**
 * selector
 */
export * from './film/selector';
export * from './menu/selector';