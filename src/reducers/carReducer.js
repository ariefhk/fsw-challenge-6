import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL =
  "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json";

const initialState = {
  cars: [],
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchCars = createAsyncThunk("cars/fetchCars", async () => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCars.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchCars.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.cars = [...state.cars, ...action.payload];
    });
    builder.addCase(fetchCars.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export const getAllCar = (state) => state.cars.cars;
export const getCarStatus = (state) => state.cars.status;
export const getCarError = (state) => state.cars.error;

export default carSlice.reducer;
