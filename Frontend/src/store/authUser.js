import axios from 'axios';
import toast from 'react-hot-toast';
import {create} from 'zustand';

export const useAuthStore = create((set) => ({
    user:null,
    isSigningUp: false,
    isCheckinAuth: true,
    signup: async (credentials) => {
        set({isSigningUp:true})
        try {
            const response = await axios.post("/api/v1/auth/signup", credentials);
            set({ user: response.data.user, isSigningUp:false});
            toast.success("Account created successfully")
        } catch (error) {
            toast.error(error.response.data.message || "An error occurred")
            set({ isSigningUp: false, user: null });
        }
    },
    login: async () => {},
    logout: async () => {},
    authCheck: async () => {
        set({ isCheckinAuth: true })
        try {
            const response = await axios.get("/api/v1/auth/authCheck");
            set({ user: response.data.user, isCheckinAuth: false })
        } catch (error) {
            set({ isCheckinAuth: false, user: null});
            toast.error(error.response.data.message || "An error occurred");
        }
    },
}))
