import { AuthReducer } from "@pages/auth/store/auth.reducer";
import { AUTH_STATE_NAME } from "@pages/auth/store/auth.selectors";
import { AuthState } from "@pages/auth/store/auth.state";
import { SharedReducer } from "@shared/store/shared.reducer";
import { SHARED_STATE_NAME } from "@shared/store/shared.selectors";
import { SharedState } from "@shared/store/shared.state";

export interface AppState {
    [AUTH_STATE_NAME]: AuthState,
    [SHARED_STATE_NAME]: SharedState
}

export const appReducer = {
    auth: AuthReducer,
    shared: SharedReducer
}