import { create } from "zustand";
import type { Team } from "../types";

interface LeaderboardStore {
	teams: Team[];
	isLoading: boolean;
	error: string | null;
	setTeams: (teams: Team[]) => void;
	setLoading: (isLoading: boolean) => void;
	setError: (error: string | null) => void;
}

export const useLeaderboardStore = create<LeaderboardStore>((set) => ({
	teams: [],
	isLoading: false,
	error: null,
	setTeams: (teams: Team[]) => set({ teams }),
	setLoading: (isLoading: boolean) => set({ isLoading }),
	setError: (error: string | null) => set({ error }),
}));
