import { createSlice } from "@reduxjs/toolkit";

export const userStore = createSlice({
  name: "userStore",
  initialState: {
    Authorized : false,
    UserName : '',
    Email : '',
    Avatar : '',
    Password : '',
  },
  reducers: {
    Set_Authorize : (state) => {state.Authorized = true},
    Set_UnAuthorize : (state) => {state.Authorized = false},
    Set_UserName : (state,action) => {state.UserName = action.payload},
    Set_Email : (state,action) => {state.Email = action.payload},
    Set_Password : (state,action) => {state.Password = action.payload},

  }
});

export const {
    Set_Authorize,
    Set_UnAuthorize,
    Set_UserName,
    Set_Email,
    Set_Password,
} = userStore.actions;

export default userStore.reducer;
