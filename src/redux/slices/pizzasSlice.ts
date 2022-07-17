import { createSlice , createAsyncThunk  } from '@reduxjs/toolkit'
import axios from 'axios';

type SortTypes = {
  sortCategory:string;
  categoryId:number;
  paginationPage:number;
  searchValue:string;
}

export const getPizzas = createAsyncThunk(
  'posts/getPizzas', 
  async (params:SortTypes) => {
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
  extraReducers: (builder) => {
    builder.addCase(getPizzas.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(getPizzas.fulfilled, (state, action) => {
      state.pizzas = action.payload
      state.loading = false
    })
    builder.addCase(getPizzas.rejected, (state, action) => {
      state.loading = false
    })
    
  },
})

export const { changePizzaInfo } = pizzasSlice.actions

export default pizzasSlice.reducer