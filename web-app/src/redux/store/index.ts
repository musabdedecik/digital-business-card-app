import { combineReducers } from 'redux';
import { usersReducer } from '../reducers/usersReducer';
import { createStore, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { AnyAction } from "redux";

const reducers = combineReducers({
 usersReducer
});

export type RootState = ReturnType<typeof reducers>;

const mw: ThunkMiddleware<RootState, AnyAction> = thunk;

export const store = createStore(reducers, {}, applyMiddleware(mw));
export type AppDispatch = typeof store.dispatch
