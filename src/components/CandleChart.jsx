import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts';

const fetchCandles = async (symbol, interval) => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_API_BASE_URL}/markets/${symbol}/candles?interval=${interval}`
  );
  return data.map(c => ({
    time: new Date(c.openTime).toLocaleString(),
    close: Number(c.close)
  }));
};

export default function CandleChart({ symbol, interval }) {
  const { data = [], isLoading, error } = useQuery({
    queryKey: ['candles', symbol, interval],
    queryFn: () => fetchCandles(symbol, interval),
    staleTime: 60_000,
  });

  if (isLoading) return <p>Loading chart…</p>;
  if (error) return <p>Error loading chart: {error.message}</p>;
  if (!data.length) return <p>No data available</p>;

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <XAxis dataKey="time" tick={{ fontSize: 10 }} />
        <YAxis domain={[ 'auto', 'auto' ]} />
        <Tooltip />
        <Line dataKey="close" dot={false} stroke="#007bff" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}
