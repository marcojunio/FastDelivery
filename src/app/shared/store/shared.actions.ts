import { createAction, props } from "@ngrx/store";

export const TEMPLATE_SHARED_ACTION = '[SHARED ACTIONS] ';

export const showLoader = createAction(
    `${TEMPLATE_SHARED_ACTION}SHOW LOADING`,
    props<{ showLoader: boolean }>()
)