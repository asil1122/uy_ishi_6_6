import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product_list: [],
    count: 0,
    totalPrice: 0,
}

const productReducer = createSlice({
    name: "product",
    initialState,
    reducers: {
        addCart: (state, action) => {
            const product = state.product_list.find(
              (item) => item.id === action.payload.id
            );
            if (!product) {
              return {
                ...state,
                product_list: [
                  ...state.product_list,
                  {
                    ...action.payload,
                    user_price: action.payload.price,
                    user_count: 1,
                  },
                ],
              };
            }
          },
          toggleAmount: (state, action) => {
            const newProductList = state.product_list.map((item) => {
              if (
                action.payload.type === "increment" &&
                item.id === action.payload.id
              ) {
                return {
                  ...item,
                  user_count: item.user_count + 1,
                  user_price: (item.user_count + 1) * item.price,
                };
              } else if (
                action.payload.type === "decrement" &&
                item.id === action.payload.id &&
                item.user_count > 1
              ) {
                return {
                  ...item,
                  user_count: item.user_count - 1,
                  user_price: (item.user_count - 1) * item.price,
                };
              }
      
              return item;
            });
            return { ...state, product_list: newProductList };
          },
          deleteProduct: (state, action) => {
            const newProductList = state.product_list.filter(
                (item) => item.id !== action.payload.id
            );
            return { ...state, product_list: newProductList };
          },
          totalCount: (state) => {
            let newCount = 0;
            for (let i of state.product_list) {
                newCount++;
            }
            return { ...state, count: newCount };
          },
          totalPrice: (state) => {
            state.totalPrice = state.product_list.reduce(
                (total, item) => total + item.user_price,
                0
            );
        },
}});

export default productReducer.reducer

export const { addCart, toggleAmount, deleteProduct, totalCount, totalPrice } = productReducer.actions;