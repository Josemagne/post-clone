import { Action, ActionType } from "../actionTypes/persons"
const initialState = {
    persons: [
        {
            name: "Orlando",
            prename: "Jaime",
            birthyear: "1999"
        }
    ]
}

interface Person {
    name: string;
    prename: string;
    birthyear: number;

}

interface State {
    persons: Person[]
}



export const personReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.ADD_PERSON:
            return {

            }
        case ActionType.ADD_PERSON:
            return {

            }
        case ActionType.DELETE_PERSON:
            return {

            }
        case ActionType.GET_PERSON:
            return {

            }
    }
}