//Converts 24hr format 00:00 to 12:00 AM
export default function parseHours(hours: string): string {
  const date = new Date(`January 01, ${hours}:00`)
  return date.toLocaleString('en-US', {
    hour: 'numeric',
    hour12: true,
    minute: 'numeric'
  })
}
