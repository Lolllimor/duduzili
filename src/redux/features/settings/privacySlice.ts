import { API } from '@/axios-config';
import { CreateContact, PrivacyData } from '@/lib/settingTypes';
import { endpoints } from '@/redux/endpoint';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface ContactState {
  data: PrivacyData | null;
  loading: boolean;
  error: string | null;
}

const initialState: ContactState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchPrivacy = createAsyncThunk(
  'privacy/fetchPrivacy',
  async () => {
    const response = await API.get(endpoints.setting.privacy.fetch);
    return response.data.data;
  }
);

export const createPrivacy = createAsyncThunk(
  'privacy/createPrivacy',
  async (data: CreateContact) => {
    const response = await API.post(endpoints.setting.privacy.create, data);
    return response.data.data;
  }
);

const privacySlice = createSlice({
  name: 'privacy',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPrivacy.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPrivacy.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchPrivacy.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'An unknown error occurred';
    });

    builder.addCase(createPrivacy.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createPrivacy.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(createPrivacy.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'An unknown error occurred';
    });
  },
});

export default privacySlice.reducer;
