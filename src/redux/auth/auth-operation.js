import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuth = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuth = () => {
  axios.defaults.headers.common.Authorization = '';
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    setAuth(data.token);
    return data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      toast.error(
        'Invalid email, name, or password( the password must be at least 10 characters long ! the username must be at least 4 characters long ! the email address must be valid ! try to enter your working email address, for example your google account address, and try again'
      );
    }
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    setAuth(data.token);
    return data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      toast.error(
        'Invalid email, name, or password( the password must be at least 10 characters long ! the username must be at least 4 characters long ! the email address must be valid ! try to enter your working email address, for example your google account address, and try again'
      );
    }
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    clearAuth();
  } catch (error) {
    console.log(error);
  }
});

const refreshCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('hernja jakas');
    }
    setAuth(persistedToken);

    try {
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.fulfillWithValue(error.message);
    }
  }
);

const authOperation = {
  register,
  logIn,
  logOut,
  refreshCurrentUser,
};
export default authOperation;