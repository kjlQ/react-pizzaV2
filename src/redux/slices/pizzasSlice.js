import { createSlice , createAsyncThunk  } from '@reduxjs/toolkit'
import axios from 'axios';

export const getPizzas = createAsyncThunk(
  'posts/getPizzas', 
  async (params) => {
    const {sortCategory,categoryId,paginationPage,searchValue} = params;
    
    let apiKey = !searchValue?`?page=${paginationPage}&limit=4&category=${categoryId}&sortBy=${sortCategory}`:`?title=${searchValue}&page=${paginationPage}&limit=4`
    const {data} = await axios.get(`https://62b1890ec7e53744afbb3fa1.mockapi.io/pizzasList${apiKey}`)
  return data
})

const initialState = {
  pizzas: [],
  pizzaInfo:[],
  loading: false, 
}

export const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    changePizzaInfo(state,action) {
      state.pizzaInfo = action.payload
    }
  },
  extraReducers: {
    [getPizzas.pending]: (state) => {
      state.loading = true
    },
    [getPizzas.fulfilled]: (state, action) => {
      state.loading = false
      state.pizzas = action.payload
    },
    [getPizzas.rejected]: (state) => {
      state.loading = false
    },
  },
})

export const { changePizzaInfo } = pizzasSlice.actions

export default pizzasSlice.reducer