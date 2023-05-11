import { createSlice } from "@reduxjs/toolkit";

export const userStore = createSlice({
  name: "userStore",
  initialState: {
    Authorized : true,
    UserName : '',
    Email : '',
    Avatar : '',
  },
  reducers: {
    Set_Authorize : (state) => state.Authorized = true,
    Set_UnAuthorize : (state) => state.Authorized = false,
    Set_UserName : (state,action) => state.UserName = action.payload

  }
});

export const {
    Set_Authorize,
    Set_UnAuthorize,
    Set_UserName 
} = userStore.actions;

export default userStore.reducer;
