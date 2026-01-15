export function Footer() {
	return (
		<footer style={styles.footer}>
			Vibe coding by{" "}
			<span
				style={{
					color: "#BD0F72",
					fontWeight: "bold",
				}}
			>
				MDS team
			</span>{" "}
			— 5-minute vibe window, no extensions, no bugs, just ✨unexpected
			features✨
		</footer>
	);
}

const styles = {
	footer: {
		padding: "20px",
		textAlign: "center" as const,
		borderTop: "1px solid #eee",
		marginTop: "20px",
		color: "#666",
		fontSize: "14px",
	},
};
