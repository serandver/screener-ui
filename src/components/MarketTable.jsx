import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchMarkets } from '../api/marketApi';

export default function MarketTable() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['markets'],
    queryFn: fetchMarkets,
    staleTime: 30000,
  });

  if (isLoading) return <p>Loading…</p>;
  if (error) return <p>Error loading markets</p>;

  return (
    <table>
      <thead>
        <tr><th>Symbol</th><th>Price</th><th>24h %</th></tr>
      </thead>
      <tbody>
        {data.map(m => (
          <tr key={m.symbol}>
            <td>{m.symbol}</td>
            <td>{Number(m.lastPrice).toFixed(4)}</td>
            <td>{Number(m.priceChangePercent).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
