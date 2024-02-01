import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface UserData {
  data: any;
  loading: boolean;
  error: string | undefined;
}

// Define the async thunk for fetching user data
export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async () => {
    const response = await fetch("https://kygdc3-8080.csb.app");
    const jsonData = await response.json();
    return jsonData;
  },
);

// Define the user slice
export const userSlice = createSlice({
  name: "HomeData",
  initialState: { data: null, loading: false, error: undefined } as UserData,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectAllHomeData = (state: { HomeData: UserData }) =>
  state.HomeData.data;
export const getHomeDataStatus = (state: { HomeData: UserData }) =>
  state.HomeData.loading;
export const getHomeDataError = (state: { HomeData: UserData }) =>
  state.HomeData.error;

export default userSlice.reducer;
