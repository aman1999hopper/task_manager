import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createTaskAPI, getTasksAPI } from '../../api/task.js';

export const createTask = createAsyncThunk('tasks/create', async (taskData, thunkAPI) => {
  try {
    const response = await createTaskAPI(taskData);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || 'Create failed');
  }
});

export const getTasks = createAsyncThunk('tasks/getAll', async (_, thunkAPI) => {
  try {
    const response = await getTasksAPI();
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || 'Fetch failed');
  }
});

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    taskList: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.loading = false;
        state.taskList.push(action.payload);
      })
      .addCase(createTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.taskList = action.payload;
      })
      .addCase(getTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default taskSlice.reducer;
