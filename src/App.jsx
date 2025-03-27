import MarketTable from './components/MarketTable';
import CandleChart from './components/CandleChart';
import { SymbolSelector, TimeframeSelector } from './components/Selectors';
import { useQuery } from '@tanstack/react-query';
import { fetchMarkets } from './api/marketApi';
import { useState } from 'react';

export default function App() {
  const [symbol, setSymbol] = useState('BTCUSDT');
  const [interval, setInterval] = useState('H4');
  const { data: markets = [] } = useQuery({
    queryKey: ['markets'],
    queryFn: fetchMarkets,
    staleTime: 30_000,
  });

  return (
    <main className="p-8">
      <h1 className="text-2xl mb-4">Crypto Screener</h1>
      <MarketTable />
      <div className="flex gap-4 my-6">
        <SymbolSelector value={symbol} onChange={setSymbol} options={markets.map(m => m.symbol)} />
        <TimeframeSelector value={interval} onChange={setInterval} />
      </div>
      <CandleChart symbol={symbol} interval={interval} />
    </main>
  );
}
