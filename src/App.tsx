import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Leaderboard } from "./components/Leaderboard";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 3,
			retryDelay: 1000,
		},
	},
});

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Leaderboard />
		</QueryClientProvider>
	);
}

export default App;
