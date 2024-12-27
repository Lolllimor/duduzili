import { API } from '@/axios-config';
import { CreateContact } from '@/lib/settingTypes';
import { endpoints } from '@/redux/endpoint';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';



interface ContactState {
  data: CreateContact | null;
  loading: boolean;
  error: string | null;
}

const initialState: ContactState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchContact = createAsyncThunk(
  'contact/fetchContact',
  async () => {
    const response = await API.get(endpoints.setting.contact.fetch);
    return response.data.data;
  }
);

export const createContact = createAsyncThunk(
  'contact/createContact',
  async (data: CreateContact) => {
    const response = await API.post(endpoints.setting.contact.create, data);
    return response.data.data;
  }
);

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContact.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchContact.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchContact.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'An unknown error occurred';
    });

    builder.addCase(createContact.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createContact.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(createContact.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'An unknown error occurred';
    });
  },
});

export default contactSlice.reducer;
