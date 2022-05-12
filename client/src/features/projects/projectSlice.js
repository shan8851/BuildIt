import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import projectService from "./projectService"

const initialState = {
  projects: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
}
