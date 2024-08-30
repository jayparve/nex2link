// usersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    list: [],
    loading: false,
    error: null
  },
  reducers: {
    setUsers: (state, action) => {
      state.list = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    }
  }
});

export const { setUsers, setLoading, setError } = usersSlice.actions;

export default usersSlice.reducer;

// Action creator for fetching users
export const fetchUsers = () => async (dispatch, getState, { appwriteService }) => {
  dispatch(setLoading(true));
  try {
    const users = await appwriteService.listUsers();
    dispatch(setUsers(users));
  } catch (error) {
    dispatch(setError(error.message));
  }
};