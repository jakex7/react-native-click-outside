export const isInRange = (value: number, target: number, threshold: number) =>
  value < target + threshold && value > target - threshold;
