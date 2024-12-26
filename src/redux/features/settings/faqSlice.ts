import { API } from '@/axios-config';
import { endpoints } from '@/redux/endpoint';
import { Faq, FaqData, FaqRequest } from '@/lib/settingTypes';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface FaqState {
  data: FaqData | null;
  loading: boolean;
  error: string | null;
}

const initialState: FaqState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchFaq = createAsyncThunk('faq/fetchFaq', async () => {
  const response = await API.get<Faq>(endpoints.setting.faq.fetch);
  return response.data.data;
});

export const createFaq = createAsyncThunk(
  'faq/createFaq',
  async (data: FaqRequest) => {
    const response = await API.post(endpoints.setting.faq.create, data);
    return response.data.data;
  }
);

export const deleteFaq = createAsyncThunk(
  'faq/deleteFaq',
  async (data: { faq_id: string }) => {
    const response = await API.delete(endpoints.setting.faq.delete, { data });
    return response.data;
  }
);

const faqSlice = createSlice({
  name: 'faq',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFaq.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchFaq.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchFaq.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'An unknown error occurred';
    });

    builder.addCase(createFaq.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createFaq.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(createFaq.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'An unknown error occurred';
    });
    builder.addCase(deleteFaq.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteFaq.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(deleteFaq.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'An unknown error occurred';
    });
  },
});

export default faqSlice.reducer;
