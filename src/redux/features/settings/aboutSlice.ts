import { API } from '@/axios-config';
import { CreateAboutData } from '@/lib/settingTypes';
import { endpoints } from '@/redux/endpoint';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';



interface AboutState {
  data: CreateAboutData | null;
  loading: boolean;
  error: string | null;
}

const initialState: AboutState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchAbout = createAsyncThunk(
  'about/fetchAbout',
  async () => {
    const response = await API.get(endpoints.setting.about.fetch);
    return response.data.data;
  }
);

export const createAbout = createAsyncThunk(
  'about/createAbout',
  async (data: CreateAboutData) => {
    const response = await API.post(endpoints.setting.about.create, data);
    return response.data.data;
  }
);

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
      state.error = action.error.message || 'An unknown error occurred';
    });

    builder.addCase(createAbout.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createAbout.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(createAbout.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'An unknown error occurred';
    });
  },
});

export default aboutSlice.reducer;
