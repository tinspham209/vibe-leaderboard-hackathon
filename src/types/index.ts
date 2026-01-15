export interface TeamMember {
	fullName: string;
	originalTeam: string;
	isLeader: boolean;
}

export interface Project {
	id: string;
	projectName: string;
	problemStatement: string;
	proposedSolution: string;
	businessValue: string;
	ideaDeck: {
		fileName: string;
		downloadUrl: string;
	};
}

export interface Team {
	id: string;
	name: string;
	members: TeamMember[];
	project: Project;
	voteCount: number;
}
