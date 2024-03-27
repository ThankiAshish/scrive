import { create } from "zustand";

const UserStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("user")) || null,
  loginData: (user) => {
    set({ user }), localStorage.setItem("user", JSON.stringify(user));
  },
  loginState: JSON.parse(localStorage.getItem("user")) ? true : false,
  setLoginState: (state) => set({ loginState: state }),
  logout: () => {
    set({ user: null, loginState: false }), localStorage.removeItem("user");
  },
}));

export default UserStore;
