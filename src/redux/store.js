import { configureStore } from "@reduxjs/toolkit";
import userStore from "./user/userStore";
import ActionStore from "./ActionStore";
export default configureStore({
  reducer: {
    UserStore : userStore,
    ActionStore : ActionStore
  }
});
