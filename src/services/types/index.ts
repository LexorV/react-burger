import { Action, ActionCreator } from 'redux';
import { store } from '../store'
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;