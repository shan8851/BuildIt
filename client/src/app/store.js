import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../features/auth/authSlice"
import projectReducer from "../features/projects/projectSlice"
import userProjectReducer from "../features/userProjects/userProjectSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    userProjects: userProjectReducer,
    projects: projectReducer,
  },
})
