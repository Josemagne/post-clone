import { Dispatch } from "redux";
import { ActionType, Action } from "../../redux/actionTypes/persons";

export const getPersons = (personId: number) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.GET_PERSON
        });

        try {
            const { data } = await axios.get('')
        }
    }


}