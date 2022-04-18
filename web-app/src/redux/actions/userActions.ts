import { Dispatch } from 'redux';
import { FormValues } from '../../configures/interfaces';
import { IUsersState } from '../reducers/usersReducer';
import { ActionType, GetUsersDispatchTypes } from './actionTypes';
import { getQuery } from './commonActions';


export const getUsers = () => async (dispatch: Dispatch<GetUsersDispatchTypes>) => {
    dispatch({
        type: ActionType.GET_USERS_PENDING
    });
    try {
        await getQuery("/users.json", ({users}: IUsersState) => {
            dispatch({
                type: ActionType.GET_USERS_SUCCESS,
                payload: users
            });
        })
    } catch (err) {
        dispatch({
            type: ActionType.GET_USERS_FAIL,
            payload: "Kullanıcılar getirilirken hata oluştu!"
        });
    }
}

export async function findUser (values:FormValues) {
    let isUser:boolean = false;
    await getQuery("/users.json", ({users}: IUsersState) => {
        try {
            isUser = users.find((user: FormValues) => user.email.toLowerCase().trim() === values.email.toLowerCase().trim() && user.password.toLowerCase().trim() === values.password.toLowerCase().trim()) ? true : false
        } catch (error) {
            isUser = false;
        }
    });
    return isUser;
}





