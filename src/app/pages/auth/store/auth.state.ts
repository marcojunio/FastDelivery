export interface AuthState {
    authenticated?: boolean;
    userId?: string | null;
}

export const initialState: AuthState = {
    userId: null,
    authenticated: false
}