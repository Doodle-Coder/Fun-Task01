import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos:[]
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo:(state,action)=>{},
        removeTodo:()=>{},
        editTodo:()=>{},
    }

})