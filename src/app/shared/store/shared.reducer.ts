import { createReducer, on } from "@ngrx/store";
import { showLoader } from "./shared.actions";
import { initialState } from './shared.state';


const _sharedReducer = createReducer(
    initialState,
    on(showLoader, (state, action) => {
        return {
            ...state,
            showLoading: action.showLoader
        }
    })
)

export function SharedReducer(state: any, action: any) {
    return _sharedReducer(state, action);
}