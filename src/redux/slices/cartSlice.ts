import { createSlice, PayloadAction } from '@reduxjs/toolkit'


type itemType = {
  id:number,
  title:string,
  price:number,
  imageUrl:string,
  activeType:string,
  activeSize:string,
  count:number,
}


type itemRemoveType = {
  id:number;
  activeType:string,
  activeSize:string,
}

interface cartSliceState {
  totalPrice:number,
  items:itemType[],
}

const initialState:cartSliceState = {
  totalPrice:0,
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state,action:PayloadAction<itemType>) => {
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

    removeItem: (state,action:PayloadAction<itemRemoveType>) => {
      const duplicatedItem = state.items.find(obj=>
        obj.id === action.payload.id && 
        obj.activeType === action.payload.activeType && 
        obj.activeSize === action.payload.activeSize)

      if (duplicatedItem && duplicatedItem.count>1) {
        duplicatedItem.count--
      }
      
      state.totalPrice = state.items.reduce((sum,obj)=>sum + (obj.price*obj.count),0)
    },

    removePosition(state,action:PayloadAction<itemRemoveType>) {
      state.items = state.items.filter(obj=>
        obj.id !== action.payload.id ||
        obj.activeType !== action.payload.activeType ||
        obj.activeSize !== action.payload.activeSize)


      state.totalPrice = state.items.reduce((sum,obj)=>sum + (obj.price*obj.count),0)
    },

    removeAllPosition(state) {
      state.items = []
      state.totalPrice = state.items.reduce((sum,obj)=>sum + (obj.price*obj.count),0)
    }
  },
})


export const { addItem , removeItem , removePosition, removeAllPosition } = cartSlice.actions

export default cartSlice.reducer
