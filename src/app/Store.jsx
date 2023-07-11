import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/AuthSlice'

import  CustomerReducer from '../features/customars/CustomarSlice'
import ProductReducer from '../features/product/ProductSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer , 
    customer: CustomerReducer,
     product: ProductReducer,
  },
})
