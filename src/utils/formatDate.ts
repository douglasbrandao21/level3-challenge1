export default function formatDate(date: string): string {
  const formatter = new Intl.DateTimeFormat('pt-BR');

  const unformatedDate = new Date(date);

  return formatter.format(unformatedDate);
}
