import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface InitialState {
    buttons: {
        buttonName: string | null;
    }
}

const initialState: InitialState = {
    buttons: {
        buttonName: null
    }


}

export const postSlice = createSlice({
    name: "post",
    initialState: initialState,
    reducers: {
        changeClickedButton: (state, action) => {

        }
    }
})

export default postSlice.reducer;
export const { changeClickedButton } = postSlice.actions