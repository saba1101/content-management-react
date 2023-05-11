import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter"
import userStore from "./user/userStore";
export default configureStore({
  reducer: {
    counter: counterReducer,
    UserStore: userStore,
  }
});
