import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  categoryId: 0,
  paginationPage: 1,
  sortCategory: 'rating',
  searchValue: '',
}


export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeCategoryId: (state,action:PayloadAction<number>) => {
      state.categoryId = action.payload
    },
    changeSortId: (state,action:PayloadAction<string>) => {
      state.sortCategory = action.payload
    },
    changePaginationPage: (state,action:PayloadAction<number>) => {
      state.paginationPage = action.payload
    },
    onSearchChange: (state,action:PayloadAction<string>) => {
      state.searchValue = action.payload
    },
  },
})

export const { changeCategoryId , changeSortId , changePaginationPage , onSearchChange } = filterSlice.actions

export default filterSlice.reducer