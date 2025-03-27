import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MarketTable from './components/MarketTable';

const qc = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={qc}>
      <h1>Crypto Screener</h1>
      <MarketTable/>
    </QueryClientProvider>
  );
}
