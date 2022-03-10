import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import {TregisterFormAction} from '../action/registerForm';
import {TconstructorArrayAction} from '../reducers/constructorArray';
import {TorderAction} from '../action/order'

import { store } from '../store'
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
type TApplicationActions = TregisterFormAction | TconstructorArrayAction |TorderAction;
export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>