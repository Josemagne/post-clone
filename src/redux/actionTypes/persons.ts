import { personReducer } from "../reducers/personReducer";

export enum ActionType {
    GET_PERSON = "GET_PERSON",
    ADD_PERSON = "ADD_PERSON",
    ALTER_PERSON = "ALTER_PERSON",
    DELETE_PERSON = "DELETE_PERSON"
}

interface GetPerson {
    type: ActionType.GET_PERSON;
}

interface AddPerson {
    type: ActionType.ADD_PERSON;
}

interface AlterPerson {
    type: ActionType.ALTER_PERSON;
}

interface DeletePerson {
    type: ActionType.DELETE_PERSON;
}

export type Action = GetPerson | AddPerson | AlterPerson | DeletePerson;