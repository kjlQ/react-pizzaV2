import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  totalPrice:0,
  items: [],
}


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state,action) => {
      const duplicatedItem = state.items.find(obj=>
        obj.id === action.payload.id && 
        obj.activeType === action.payload.activeType && 
        obj.activeSize === action.payload.activeSize )
      if(duplicatedItem) {
        duplicatedItem.count++
      } else {
        state.items.push({...action.payload,count:1})
      }
      state.totalPrice = state.items.reduce((sum,obj)=>sum + (obj.price*obj.count),0)
    },

    removeItem: (state,action) => {
      const findRightItemCount = state.items.find(obj=>
        obj.id === action.payload.id && 
        obj.activeType === action.payload.activeType && 
        obj.activeSize === action.payload.activeSize)

      if (findRightItemCount.count>1) {
        findRightItemCount.count--
      }
      state.totalPrice = state.items.reduce((sum,obj)=>sum + (obj.price*obj.count),0)
    },

    removePosition(state,action) {
      state.items = state.items.filter(obj=>
        obj.id !== action.payload.id ||
        obj.activeType !== action.payload.activeType ||
        obj.activeSize !== action.payload.activeSize)


      state.totalPrice = state.items.reduce((sum,obj)=>sum + (obj.price*obj.count),0)
    },

    removeAllPosition(state,action) {
      state.items = []
      state.totalPrice = state.items.reduce((sum,obj)=>sum + (obj.price*obj.count),0)
    }
  },
})

export const { addItem , removeItem , removePosition, removeAllPosition } = cartSlice.actions

export default cartSlice.reducer