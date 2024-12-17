import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    token: "",
    isLoading: false,
    email: "",
    error: false,
};

const slice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logIn(state, action) {
            state.isLoggedIn = action.payload.isLoggedIn;
            state.email = action.payload.email;
        },
        signOut(state) {
            state.isLoggedIn = false;
        },
        updateIsLoading(state, action) {
            state.error = action.payload.error;
            state.isLoading = action.payload.isLoading;
        },
        updateRegisterEmail(state, action) {
            state.email = action.payload.email;
        },
        deleteRegisterEmail(state, action) {
            state.email = "";
        }
    }
});
//export Reducer

export default slice.reducer;
export function LogOutUser() {
    return async (dispatch, getState) => {
        dispatch(slice.actions.signOut());
    }
};
export function LogInUser(email){
    return async (dispatch, getState) => {
        dispatch(slice.actions.logIn({
            isLoggedIn: true,
            email: email
        }));
    }
}
export function UpdateEmail(email){
    return async (dispatch, getState) => {
        dispatch(slice.actions.updateRegisterEmail({
            email: email
        }));
    }
}
export function DeleteEmail(){
    return async (dispatch, getState) => {
        dispatch(slice.actions.deleteRegisterEmail());
    }
}