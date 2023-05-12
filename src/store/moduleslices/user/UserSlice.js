import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: null,
  email: null,
  password: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSignIn: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.isLoggedIn = action.payload.isLoggedIn;
    },
    setSignOut: state => {
      state.email = null;
      state.password = null;
      state.isLoggedIn = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setSignIn, setSignOut} = userSlice.actions;

// export const selectIsLoggedIn = state => state.userSlice.isLoggedIn;
// export const selectEmail = state => state.userSlice.email;
// export const selectPassword = state => state.userSlice.password;

export default userSlice.reducer;