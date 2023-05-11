import { configureStore } from "@reduxjs/toolkit";
import userStore from "./user/userStore";
export default configureStore({
  reducer: {
    UserStore: userStore,
  }
});
