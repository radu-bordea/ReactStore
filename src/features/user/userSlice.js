import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const themes = {
  nord: "nord",
  dim: "dim",
};

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme" || themes.dim);
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};

const initialState = {
  user: { username: "coding addict" },
  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log(action.payload);
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
      toast.success('Logged out sucessfully')
    },
    toggleTheme: (state) => {
      const { nord, dim } = themes;
      state.theme = state.theme === dim ? nord : dim;
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
