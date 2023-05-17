import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRandomInt } from "../utils/randomInt";
import axios from "axios";

const URL =
  "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json";

const initialState = {
  cars: [],
  filteredCars: [],
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
  reducers: {
    filteredCars: (state, action) => {
      const modifyCars = [...state.cars].map((car) => {
        const isPositive = getRandomInt(0, 1) === 1;
        const timeAt = new Date();
        const mutator = getRandomInt(1000000, 100000000);
        const availableAt = new Date(
          timeAt.getTime() + (isPositive ? mutator : -1 * mutator)
        );
        return {
          ...car,
          availableAt,
        };
      });
      state.filteredCars = modifyCars.filter((car) => {
        if (!action.payload.capacity) {
          return (
            car.available &&
            new Date(car.availableAt).getTime() >=
              new Date(action.payload.dateTime).getTime()
          );
        }

        return (
          car.available &&
          car.capacity >= action.payload.capacity &&
          new Date(car.availableAt).getTime() >=
            new Date(action.payload.dateTime).getTime()
        );
      });
    },
  },
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
export const getfilteredCars = (state) => state.cars.filteredCars;
export const getCarError = (state) => state.cars.error;

export default carSlice.reducer;
