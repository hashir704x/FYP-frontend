import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type UserRole = "client" | "freelancer";

type User = {
    id: string;
    name: string;
    email: string;
    role: UserRole;
};

type AuthStateType = {
    user: User | null;
    isLoggedIn: boolean;
    login: (user: User) => void;
    logout: () => void;
};

const userAuthStore = create(
    persist<AuthStateType>(
        (set) => ({
            user: null,
            isLoggedIn: false,
            login: (user) => set({ user: user, isLoggedIn: true }),
            logout: () => set({ user: null, isLoggedIn: false }),
        }),
        { name: "auth-storage", storage: createJSONStorage(() => localStorage) }
    )
);

export { userAuthStore };
