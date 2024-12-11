import { combineReducers,legacy_createStore as createStore} from "redux";
import GameReducer from "./Game-reduser";

const reducers = combineReducers({
    question:GameReducer,
})

const store = createStore(reducers);

window.store = store

export default store;