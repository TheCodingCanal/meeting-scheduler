import { create } from "zustand";
import User from "./userInterface";

interface UserStore {
	user: User | null;
	update: (user: User) => void;
}

export const userUserStore = create<UserStore>((set) => ({
	user: null,
	update: (user) => set(() => ({ user })),
}));
