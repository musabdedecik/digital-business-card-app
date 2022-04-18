import { IUser } from "../../configures/interfaces";
import { GetUsersDispatchTypes, ActionType } from "../actions/actionTypes";

export interface IUsersState {
    users: IUser[];
    loading: boolean;
    error: string | null;
}

const initialState = {
    users: [{
        name:"",
        surname:"",
        email:"",
        phone:"",
        image:"",
        password:"",
        title:"",
    }],
    loading: false,
    error: null
}

export const usersReducer = (state: IUsersState = initialState, action: GetUsersDispatchTypes): IUsersState => {
    switch (action.type) {
        case ActionType.GET_USERS_PENDING:
            return {
                ...state,
                loading: true,
                error: null
            }
        case ActionType.GET_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: null
            }
        case ActionType.GET_USERS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}