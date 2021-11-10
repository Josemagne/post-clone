export interface AddButton {
    type: "ADD_BUTTON",
    payload: number;
}

export interface RemoveButton {
    type: "REMOVE_BUTTON",
    payload: number
}

export type ButtonActions = AddButton | RemoveButton;