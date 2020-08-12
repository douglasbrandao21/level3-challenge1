export default function formatValue(value: number): string {
  const options = {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    currencyDisplay: 'symbol',
  };

  const formatter = new Intl.NumberFormat('en-IN', options);

  return formatter.format(value);
}
