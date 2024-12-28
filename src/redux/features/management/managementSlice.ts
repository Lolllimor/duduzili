import { API } from '@/axios-config';
import { FetchPermissionGroupData } from '@/lib/managementTypes';
import { endpoints } from '@/redux/endpoint';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface AboutState {
  data: FetchPermissionGroupData | null;
  loading: boolean;
  error: string | null;
}

const initialState: AboutState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchPermissionGroup = createAsyncThunk(
  'management/fetchPermissionGroup',
  async () => {
    const response = await API.get<FetchPermissionGroupData>(endpoints.management.permissionGroup.crud);
    return response.data;
  }
);
export const fetchPermssion = createAsyncThunk(
  'management/fetchPermission',
  async () => {
    const response = await API.get(endpoints.management.fetchPermission);
    return response.data;
  }
);

const managementSlice = createSlice({
  name: 'management',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPermissionGroup.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPermissionGroup.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchPermissionGroup.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'An unknown error occurred';
    });
    
    builder.addCase(fetchPermssion.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPermssion.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchPermssion.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'An unknown error occurred';
    });
  },
});

export default managementSlice.reducer;
