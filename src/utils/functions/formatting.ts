export function zeroLeft(digit: number) {
  return digit < 10 ? `0${digit}` : digit;
}

export function formatTime(value: number) {
  const seconds = zeroLeft(Math.floor(value % 60));
  const minutes = zeroLeft(Math.floor((value / 60) % 60));
  const hours = zeroLeft(Math.floor((value / 3600) % 60));

  if (value >= 3600) {
    return `${hours}:${minutes}:${seconds}`;
  }
  return `${minutes}:${seconds}`;
}
