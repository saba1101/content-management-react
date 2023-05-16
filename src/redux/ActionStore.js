import { createSlice } from "@reduxjs/toolkit";

export const ActionStore = createSlice({
  name: "ActionStore",
  initialState: {
    SidebarCollapsed : false,
  },
  reducers: {
    Collapse_Sidebar : (state) => {
        state.SidebarCollapsed = !state.SidebarCollapsed
    }
  }
});

export const {
    Collapse_Sidebar
} = ActionStore.actions;

export default ActionStore.reducer;
