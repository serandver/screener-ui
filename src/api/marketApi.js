import axios from 'axios';

const BASE = import.meta.env.VITE_API_BASE_URL;

export async function fetchMarkets() {
	try {
	  const { data } = await axios.get(`${BASE}/markets`);
	  return data;
	} catch (e) {
	  console.error('Fetch markets failed:', e);
	  throw new Error('Unable to load markets');
	}
 }