import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Leaderboard } from "./components/Leaderboard";
import { Footer } from "./components/Footer";

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
			<Footer />
		</QueryClientProvider>
	);
}

export default App;
