import { personReducer } from "./personReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
    persons: personReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;