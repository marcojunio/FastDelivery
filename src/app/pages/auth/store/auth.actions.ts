import { createAction, props } from "@ngrx/store";

export const TEMPLATE_AUTH_ACTION = '[AUTH ACTIONS] ';

export const login = createAction(
    `${TEMPLATE_AUTH_ACTION}LOGIN`,
    props<{ login: string, password: string }>()
);


export const loginSuccess = createAction(
    `${TEMPLATE_AUTH_ACTION}LOGIN_SUCCESS`,
    props<{ token: string, name: string }>()
)

export const createUser = createAction(
    `${TEMPLATE_AUTH_ACTION}CREATE_USER`,
    props<{ login: string, password: string, nome: string }>()
)

export const createUserSuccess = createAction(
    `${TEMPLATE_AUTH_ACTION}CREATE_USER_SUCCESS`,
    props<{ id: string }>()
)