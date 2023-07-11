import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
import customerService from "./CustomarsService";



export const getAllUsers = createAsyncThunk('customer/get-customers',
async(thunkAPI) => {
    try{
    return await customerService.getAllUsers()
    }catch(err){
       return thunkAPI.rejectWithValue(err);
    }
   })
const initialState ={
    customers:[],
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:"",
}
export const CustomerSlice = createSlice({ 
    name: "users",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(getAllUsers.pending, (state)=>{
            state.isLoading =true;
        })
        .addCase(getAllUsers.fulfilled,(state,action)=>{
            state.isLoading =false;
            state.isSuccess = true;
            state.isError = false;
            state.customers = action.payload;
        })
        .addCase(getAllUsers.rejected,(state,action)=>{
            state.isLoading =false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.error;
        })
    }
})
export default CustomerSlice.reducer;