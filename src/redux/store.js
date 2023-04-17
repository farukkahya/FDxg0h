import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import authReducer from "./reducers/auth.js"
import booksReducer from "./reducers/books.js"

const initialState = {

}

const reducers = combineReducers({
  auth: authReducer,
  booksData: booksReducer
})

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;