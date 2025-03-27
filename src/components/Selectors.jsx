export function SymbolSelector({ value, onChange, options }) {
	return (
	  <select value={value} onChange={e => onChange(e.target.value)}>
		 {options.map(sym => (
			<option key={sym} value={sym}>{sym}</option>
		 ))}
	  </select>
	);
 }
 
 export function TimeframeSelector({ value, onChange }) {
	const intervals = ['H1','H4','D1','W1'];
	return (
	  <select value={value} onChange={e => onChange(e.target.value)}>
		 {intervals.map(i => <option key={i} value={i}>{i}</option>)}
	  </select>
	);
 }
 