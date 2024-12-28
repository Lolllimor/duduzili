import { API } from '@/axios-config';
import { endpoints } from '@/redux/endpoint';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Deactivated, DeactivatedData } from '@/lib/settingTypes';

interface DeactivateState {
  data: DeactivatedData | null;
  loading: boolean;
  error: string | null;
}

const initialState: DeactivateState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchDeactivated = createAsyncThunk(
  'faq/fetchDeactivated',
  async () => {
    const response = await API.get<Deactivated>(
      endpoints.setting.deactivated.fetch
    );
    return response.data.data;
  }
);

export const activateDeactivated = createAsyncThunk(
  'faq/activateDeactivated',
  async (data: { username: string }) => {
    const response = await API.post(
      endpoints.setting.deactivated.activate,
      data
    );
    return response.data.results;
  }
);

const deactivatedSlice = createSlice({
  name: 'deactivated',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDeactivated.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchDeactivated.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchDeactivated.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'An unknown error occurred';
    });

    builder.addCase(activateDeactivated.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(activateDeactivated.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(activateDeactivated.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'An unknown error occurred';
    });
  },
});

export default deactivatedSlice.reducer;
