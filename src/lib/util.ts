export function randomResponse(min: number = 10, max: number = 2000) {
  const delay = Math.floor(Math.random() * (max - min + 1) + min);
  console.log({delay});
  return delay;
}
