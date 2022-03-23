import { AuthReducer } from "@pages/auth/store/auth.reducer";
import { AUTH_STATE_NAME } from "@pages/auth/store/auth.selectors";
import { AuthState } from "@pages/auth/store/auth.state";

export interface AppState {
    [AUTH_STATE_NAME]: AuthState
}

export const appReducer = {
    auth: AuthReducer
}