import { createReducer, on } from "@ngrx/store";
import { initialState } from './auth.state';
import { loginSuccess, logoutUser } from './auth.actions';

const _authReducer = createReducer(
    initialState,
    on(loginSuccess, (state, action) => {
        return {
            ...state,
            token: action.token,
            authenticated: action.token != null
        };
    }),
    on(logoutUser, (state, _) => {
        return {
            ...state,
            token: initialState.token,
            authenticated: initialState.authenticated
        }
    })
);

export function AuthReducer(state: any, action: any) {
    return _authReducer(state, action);
}