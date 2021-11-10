import { ButtonActions } from './../actions/buttonActions';
import { ButtonActionTypes } from '../action-types/ButtonActionTypes';
import { Dispatch } from "./redux";
import { AddButton } from '../actions/buttonActions';


export const addButton = (buttonId: number) => {
    return (dispatch: Dispatch<ButtonActions>) => {
        dispatch({
            type: ButtonActionTypes.ADD_BUTTON,
            payload: buttonId
        })
    }
}

export const removeButton = (buttonId: number) => {
    return (dispatch: Dispatch<ButtonActions>) => {
        dispatch({
            type: ButtonActionTypes.REMOVE_BUTTON,
            payload: buttonId
        })
    }
}
