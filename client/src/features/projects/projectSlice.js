import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import projectService from "./projectService"

const initialState = {
  projects: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
}

export const getProjects = createAsyncThunk("projects", async (_, thunkAPI) => {
  try {
    return await projectService.getProjects()
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()

    return thunkAPI.rejectWithValue(message)
  }
})

export const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProjects.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getProjects.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.projects = action.payload
      })
      .addCase(getProjects.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = projectSlice.actions
export default projectSlice.reducer
