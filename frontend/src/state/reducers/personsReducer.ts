import { ActionTypes } from "../action-types/personsTypes";
import { Action } from '../actions/index';

interface Person {
    name: string;
    personId: number;
}

interface State {
    persons: Person[];
}

const initialState: State = {
    persons: [
        {
            name: "Orlando",
            personId: 1
        }
    ]
}


const personsReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionTypes.GET_PERSON: {
            return state;
        }
        default:
            return state;
    }

}

export default personsReducer;