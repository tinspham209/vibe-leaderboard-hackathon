import axios from "axios";
import type { Team } from "../types";

const API_URL =
	"https://hackathon-backend-tdavdtem5q-as.a.run.app/public/teams";

export const fetchTeams = async (): Promise<Team[]> => {
	const response = await axios.get<Team[]>(API_URL);
	return response.data;
};
