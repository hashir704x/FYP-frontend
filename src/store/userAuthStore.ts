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
    isUserAvailable: boolean;
    setUser: (user: User) => void;
    reset: () => void;
};

const userAuthStore = create(
    persist<AuthStateType>(
        (set) => ({
            user: null,
            isUserAvailable: false,
            setUser: (user) => set({ user: user, isUserAvailable: true }),
            reset: () => set({ user: null, isUserAvailable: false }),
        }),
        { name: "auth-storage", storage: createJSONStorage(() => localStorage) }
    )
);

export { userAuthStore };
