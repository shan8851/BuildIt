import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import userProjectService from "./userProjectService"

const initialState = {
  userProjects: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
}

// Create new project
export const createProject = createAsyncThunk(
  "projects/create",
  async (projectData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await userProjectService.createProject(projectData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()

      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get user projects

export const getUserProjects = createAsyncThunk(
  "projects/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await userProjectService.getProjects(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()

      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Delete user project
export const deleteProject = createAsyncThunk(
  "projects/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await userProjectService.deleteProject(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()

      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const userProjectSlice = createSlice({
  name: "userProject",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createProject.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createProject.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.userProjects.push(action.payload)
      })
      .addCase(createProject.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getUserProjects.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getUserProjects.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.userProjects = action.payload
      })
      .addCase(getUserProjects.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(deleteProject.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteProject.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.userProjects = state.userProjects.filter(
          (project) => project._id !== action.payload.id
        )
      })
      .addCase(deleteProject.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = userProjectSlice.actions
export default userProjectSlice.reducer
