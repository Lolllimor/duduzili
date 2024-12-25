import { API } from '@/axios-config';
import { endpoints } from '@/redux/endpoint';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface AboutState {
  data: string | null;
  loading: boolean;
  error: boolean
}

const initialState: AboutState = {
  data: null,
  loading: false,
  error: false,
};

export const fetchAbout = createAsyncThunk('about/fetchAbout', async () => {
  const response = await API.get(endpoints.fetchAbout);
  return response.data;
});

 const aboutSlice = createSlice({
  name: 'about',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAbout.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAbout.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
      builder.addCase(fetchAbout.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default aboutSlice.reducer;
