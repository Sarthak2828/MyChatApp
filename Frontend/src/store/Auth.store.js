import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import { io } from "socket.io-client";
// const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001" : "/";
const BASE_URL =
  process.env.REACT_APP_MODE === "development" ? "http://localhost:8080" : "/";

export const useAuth = create((set, get) => ({
  authUser: localStorage.getItem("authUser") || null,
  isRegistering: false,
  isLogging: false,
  isUpdating: false,
  onlineUsers: [],
  isCheckingAuth: true,
  socket: null,
  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");

      set({ authUser: res.data });
      get().connectSocket();
    } catch (error) {
      console.log("Error in checkAuth:", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

 register: async (data) => {
  set({ isRegistering: true });
  try {
    const res = await axiosInstance.post("/auth/register", data);
    set({ authUser: res.data });
    toast.success("Account created successfully");
    get().connectSocket();
  } catch (error) {
    toast.error(error?.response?.data?.message || "Registration failed");
    console.log(error);
  } finally {
    set({ isRegistering: false });
  }
},

  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("/auth/login", data);
      set({ authUser: res.data });
      localStorage.setItem("authUser", res.data);
      toast.success("Logged in successfully");
      get().connectSocket();
    } catch (error) {
      toast.error("Something Went wrong , try again");
    } finally {
      set({ isLoggingIn: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });
      localStorage.setItem("authUser", "");
      toast.success("Logged out successfully");
      get().disconnectSocket();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },

  updateProfile: async (data) => {
    set({ isUpdatingProfile: true });
    try {
      const res = await axiosInstance.put("/auth/update-profile", data);
      set({ authUser: res.data });
      toast.success("Profile updated successfully");
    } catch (error) {
      console.log("error in update profile:", error);
      toast.error(error.response.data.message);
    } finally {
      set({ isUpdatingProfile: false });
    }
  },
  connectSocket: () => {
    const { authUser } = get();
    if (!authUser || get().socket?.connected) return;

    const socket = io(BASE_URL, {
      query: {
        userId: authUser._id,
      },
    });
    socket.connect();

    set({ socket: socket });

    socket.on("getOnlineUsers", (userIds) => {
      set({ onlineUsers: userIds });
    });
  },
  disconnectSocket: () => {},
}));


