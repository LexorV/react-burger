import { createStore, combineReducers, compose, applyMiddleware  } from 'redux';
import { reducerIngredients } from './Ingredients';
import thunk from 'redux-thunk';
const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) :
    compose;
    const enhancer = composeEnhancers(applyMiddleware(thunk));
const rootReducer = combineReducers({
    ingredients: reducerIngredients
})
const store = createStore(rootReducer, enhancer);

export default store;