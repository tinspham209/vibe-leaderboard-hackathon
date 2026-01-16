import axios from "axios";
import type { Team } from "../types";

export const fetchTeams = async (): Promise<Team[]> => {
	const response = await axios.get<Team[]>(
		"https://hackathon-backend-tdavdtem5q-as.a.run.app/public/teams"
	);
	return response.data;
};

export const fetchTeamsTop15 = async (): Promise<Team[]> => {
	const response = await axios.get<Team[]>(
		"https://hackathon-backend-tdavdtem5q-as.a.run.app/public/teams/top/15"
	);
	return response.data;
};
