import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  showLogin: boolean;
  showSignup: boolean;
  isLoggedIn: boolean;
  isPageLoading: boolean;
};

export const auth = createSlice({
  name: "auth",
  initialState: {
    showLogin: false,
    showSignup: false,
    isLoggedIn: false,
    isPageLoading: true,
  } as AuthState,
  reducers: {
    setShowLogin: (state, action: PayloadAction<boolean>) => {
      state.showLogin = action.payload;
    },
    setShowSignup: (state, action: PayloadAction<boolean>) => {
      state.showSignup = action.payload;
    },
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    setIsPageLoading: (state, action: PayloadAction<boolean>) => {
      state.isPageLoading = action.payload;
    },
  },
});

export const { setShowLogin, setShowSignup, setIsLoggedIn, setIsPageLoading } =
  auth.actions;
export default auth.reducer;
