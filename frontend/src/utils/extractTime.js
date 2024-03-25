export function extractTime(date) {
  return new Date(date).toLocaleTimeString(undefined, {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false
  });
}