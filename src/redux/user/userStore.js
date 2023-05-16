import { createSlice } from "@reduxjs/toolkit";

export const userStore = createSlice({
  name: "userStore",
  initialState: {
    Authorized : false,
    UserName : '',
    Email : '',
    Avatar : '',
    Password : '',
    ID : null,
    UsersHistory : []
  },
  reducers: {
    Set_Authorize : (state) => {state.Authorized = true},
    Set_UnAuthorize : (state) => {state.Authorized = false},
    Set_UserName : (state,action) => {state.UserName = action.payload},
    Set_Email : (state,action) => {state.Email = action.payload},
    Set_Password : (state,action) => {state.Password = action.payload},
    Set_ID : (state,action) => {state.ID = action.payload},

    Remove__User_From_History : (state,action) => {
      if(localStorage.getItem('usersHistory') && JSON.parse(localStorage.getItem('usersHistory'))){
        state.UsersHistory = state.UsersHistory.filter(user => user.ID !== action.payload)
        localStorage.setItem('usersHistory',JSON.stringify(state.UsersHistory))
      }
    },

    Set_UsersHistory : (state,action) => {
      if(localStorage.getItem('usersHistory') && JSON.parse(localStorage.getItem('usersHistory'))){
        state.UsersHistory = [...JSON.parse(localStorage.getItem('usersHistory'))]
      }
    }

  }
});

export const {
    Set_Authorize,
    Set_UnAuthorize,
    Set_UserName,
    Set_Email,
    Set_Password,
    Set_UsersHistory,
    Set_ID,
    Remove__User_From_History,
} = userStore.actions;

export default userStore.reducer;
