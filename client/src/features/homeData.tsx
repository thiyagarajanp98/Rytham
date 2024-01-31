import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// Define the async thunk for fetching user data
export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async () => {
    const response = await fetch("https://x4hq7j-8080.csb.app");
    const jsonData = await response.json();
    return jsonData;
  },
);
// Define the user slice
export const userSlice = createSlice({
  name: "HomeData",
  initialState: { data: null, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const selectAllHomeData = (state) => state.HomeData.data;
export default userSlice.reducer;
