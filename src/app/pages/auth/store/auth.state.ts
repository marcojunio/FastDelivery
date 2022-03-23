export interface AuthState {
    authenticated?: boolean;
    token?: string | null;
}

export const initialState: AuthState = {
    token: null,
    authenticated: false
}