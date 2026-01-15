import { useQuery } from "@tanstack/react-query";
import { fetchTeams } from "../api/teamsApi";
import { useEffect } from "react";
import { IconExternalLink } from "@tabler/icons-react";

export function Leaderboard() {
	console.log("Leaderboard component rendering");

	const {
		data: teams = [],
		isLoading,
		error,
		refetch,
	} = useQuery({
		queryKey: ["teams"],
		queryFn: fetchTeams,
		retry: 3,
		retryDelay: 1000,
	});

	useEffect(() => {
		console.log("Teams data:", teams, "Loading:", isLoading, "Error:", error);
	}, [teams, isLoading, error]);

	const sortedTeams =
		teams && teams.length > 0
			? [...teams].sort((a, b) => b.voteCount - a.voteCount)
			: [];

	console.log("Rendering with state:", {
		isLoading,
		error: !!error,
		teamsCount: sortedTeams.length,
	});

	return (
		<div
			style={{
				width: "100%",
				minHeight: "100vh",
				backgroundColor: "#f5f5f5",
				padding: "40px 20px",
				fontFamily: "Arial, sans-serif",
			}}
		>
			<div style={{ maxWidth: "1200px", margin: "0 auto" }}>
				<h2 style={{ marginTop: 0, color: "#333" }}>Hackathon Leaderboard</h2>
				<button
					onClick={() => refetch()}
					disabled={isLoading}
					style={{
						padding: "10px 20px",
						marginBottom: "20px",
						backgroundColor: "#007bff",
						color: "white",
						border: "none",
						borderRadius: "4px",
						cursor: isLoading ? "not-allowed" : "pointer",
						opacity: isLoading ? 0.5 : 1,
						fontSize: "14px",
						fontWeight: "bold",
					}}
				>
					{isLoading ? "Fetching..." : "Refetch Data"}
				</button>
				<a
					href="https://apps.ots.space/hackathon-2026/teams"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button
						onClick={() => refetch()}
						disabled={isLoading}
						style={{
							padding: "10px 20px",
							marginBottom: "20px",
							backgroundColor: "#007bff",
							color: "white",
							border: "none",
							borderRadius: "4px",
							fontSize: "14px",
							fontWeight: "bold",
							marginLeft: "8px",
						}}
					>
						Open Teams Page
					</button>
				</a>

				{error && (
					<div
						style={{
							padding: "20px",
							marginBottom: "20px",
							backgroundColor: "#f8d7da",
							border: "1px solid #f5c6cb",
							borderRadius: "4px",
							color: "#721c24",
						}}
					>
						<strong>Error:</strong>{" "}
						{(error as Error).message || "Failed to fetch teams"}
					</div>
				)}

				{isLoading && teams.length === 0 ? (
					<div style={{ textAlign: "center", padding: "60px 20px" }}>
						<p style={{ color: "#333", fontSize: "18px" }}>
							Loading leaderboard...
						</p>
					</div>
				) : sortedTeams.length === 0 ? (
					<div style={{ textAlign: "center", padding: "60px 20px" }}>
						<p style={{ color: "#333", fontSize: "18px" }}>No teams found</p>
						<button
							onClick={() => refetch()}
							style={{
								padding: "10px 20px",
								backgroundColor: "#007bff",
								color: "white",
								border: "none",
								borderRadius: "4px",
								cursor: "pointer",
								fontSize: "14px",
								fontWeight: "bold",
							}}
						>
							Try Again
						</button>
					</div>
				) : (
					<div
						style={{
							overflowX: "auto",
							backgroundColor: "white",
							border: "1px solid #ddd",
							borderRadius: "4px",
							boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
						}}
					>
						<table
							style={{
								width: "100%",
								borderCollapse: "collapse",
								fontSize: "14px",
								color: "#333",
							}}
						>
							<thead>
								<tr style={{ backgroundColor: "#343a40" }}>
									<th
										style={{
											padding: "12px",
											textAlign: "left",
											borderBottom: "2px solid #ddd",
											color: "white",
											fontWeight: "bold",
										}}
									>
										Rank
									</th>
									<th
										style={{
											padding: "12px",
											textAlign: "left",
											borderBottom: "2px solid #ddd",
											color: "white",
											fontWeight: "bold",
										}}
									>
										Team Name
									</th>
									<th
										style={{
											padding: "12px",
											textAlign: "left",
											borderBottom: "2px solid #ddd",
											color: "white",
											fontWeight: "bold",
										}}
									>
										Project Name
									</th>
									<th
										style={{
											padding: "12px",
											textAlign: "left",
											borderBottom: "2px solid #ddd",
											color: "white",
											fontWeight: "bold",
										}}
									>
										Votes
									</th>
									<th
										style={{
											padding: "12px",
											textAlign: "left",
											borderBottom: "2px solid #ddd",
											color: "white",
											fontWeight: "bold",
										}}
									>
										Team Members
									</th>
									<th
										style={{
											padding: "12px",
											textAlign: "center",
											borderBottom: "2px solid #ddd",
											color: "white",
											fontWeight: "bold",
										}}
									>
										Action
									</th>
								</tr>
							</thead>
							<tbody>
								{sortedTeams.map((team, index) => (
									<tr
										key={team.id}
										style={{
											backgroundColor: index % 2 === 0 ? "#ffffff" : "#f9f9f9",
											borderBottom: "1px solid #ddd",
										}}
										onMouseEnter={(e) => {
											e.currentTarget.style.backgroundColor = "#e7f3ff";
										}}
										onMouseLeave={(e) => {
											e.currentTarget.style.backgroundColor =
												index % 2 === 0 ? "#ffffff" : "#f9f9f9";
										}}
									>
										<td
											style={{
												padding: "12px",
												fontWeight: "bold",
												color: "#333",
											}}
										>
											{index + 1}
										</td>
										<td
											style={{
												padding: "12px",
												fontWeight: "bold",
												color: "#333",
											}}
										>
											{team.name}
										</td>
										<td style={{ padding: "12px", color: "#666" }}>
											{team.project.projectName}
										</td>
										<td style={{ padding: "12px" }}>
											<span
												style={{
													display: "inline-block",
													padding: "6px 12px",
													backgroundColor: "#007bff",
													color: "white",
													borderRadius: "4px",
													fontWeight: "bold",
													fontSize: "13px",
												}}
											>
												{team.voteCount}
											</span>
										</td>
										<td style={{ padding: "12px", color: "#666" }}>
											{team.members.map((member, idx) => (
												<span key={idx}>
													<span
														style={{
															color: member.isLeader ? "#dc3545" : "#666",
															fontWeight: member.isLeader ? 600 : "normal",
														}}
													>
														{member.fullName}
													</span>
													{idx < team.members.length - 1 && ", "}
												</span>
											))}
										</td>{" "}
										<td style={{ padding: "12px", textAlign: "center" }}>
											<a
												href={`https://apps.ots.space/hackathon-2026/teams/${team.id}`}
												target="_blank"
												rel="noopener noreferrer"
												style={{
													display: "inline-flex",
													alignItems: "center",
													justifyContent: "center",
													padding: "8px",
													backgroundColor: "#007bff",
													color: "white",
													borderRadius: "4px",
													textDecoration: "none",
													transition: "background-color 0.2s",
												}}
												onMouseEnter={(e) => {
													e.currentTarget.style.backgroundColor = "#0056b3";
												}}
												onMouseLeave={(e) => {
													e.currentTarget.style.backgroundColor = "#007bff";
												}}
											>
												<IconExternalLink size={18} />
											</a>
										</td>{" "}
									</tr>
								))}
							</tbody>
						</table>
					</div>
				)}
			</div>
		</div>
	);
}
