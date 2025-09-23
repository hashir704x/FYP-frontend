import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type UserRoleType = "client" | "freelancer";

type User = {
    id: string;
    username: string;
    email: string;
    role: UserRoleType;
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
