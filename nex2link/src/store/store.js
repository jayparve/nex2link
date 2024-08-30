import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import usersSlice from './userSlice';

const store = configureStore({
    reducer:{
        auth : authSlice,
        users: usersSlice
    }
})



export default store;