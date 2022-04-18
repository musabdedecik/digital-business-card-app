import { IUser } from "../../configures/interfaces";

export enum ActionType {
    GET_USERS_PENDING = 'GET_USERS_PENDING',
    GET_USERS_SUCCESS = 'GET_USERS_SUCCESS',
    GET_USERS_FAIL = 'GET_USERS_FAIL',
}

interface actionPending {
    type: ActionType.GET_USERS_PENDING;
}

interface actionSuccess {
    type: ActionType.GET_USERS_SUCCESS;
    payload: IUser[];
}

interface actionFail {
    type: ActionType.GET_USERS_FAIL;
    payload: string;
}

export type GetUsersDispatchTypes = actionPending | actionSuccess | actionFail;