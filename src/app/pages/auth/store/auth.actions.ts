import { createAction, props } from "@ngrx/store";

export const TEMPLATE_AUTH_ACTION = '[AUTH ACTIONS] ';

export const login = createAction(
    `${TEMPLATE_AUTH_ACTION}LOGIN`,
    props<{ login: string, password: string }>()
);


export const loginSuccess = createAction(
    `${TEMPLATE_AUTH_ACTION}LOGIN_SUCCESS`,
    props<{ token: string }>()
)