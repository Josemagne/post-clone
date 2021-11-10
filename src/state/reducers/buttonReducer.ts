import { ButtonActionTypes } from '../action-types/ButtonActionTypes';
import { ButtonActions } from '../actions/buttonActions';

interface Button {
    buttonId: number;
}

interface State {
    button: Button;
}


const initialState: State = {
    button: {
        // There is no btn with id 0
        buttonId: 0
    }
}

const buttonReducer = (state = initialState, action: ButtonActions) => {
    switch (action.type) {
        case ButtonActionTypes.ADD_BUTTON: {
            state.button.buttonId = action.payload;
        }
            break;
        default: return state;
    }
}

export default buttonReducer;
export type { State };