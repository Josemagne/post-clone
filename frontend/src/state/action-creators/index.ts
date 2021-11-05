import { ActionTypes } from "../action-types/personsTypes"
import { Dispatch } from "redux";
// Specifies what dispatch payload must be
import { Action } from "../actions";

export const getPersons = (personId: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.GET_PERSON,
            payload: personId
        })
    }
}


// TODO add addPersons(), removePersons() and modifyPersons()