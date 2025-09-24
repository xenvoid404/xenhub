import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCompactNumber(number: number) {
    if (number < 1000) {
        return number;
    } else if (number >= 1000 && number < 1_000_000) {
        return (number / 1000).toFixed(number % 1000 !== 0 ? 1 : 0) + 'K';
    } else {
        return (number / 1_000_000).toFixed(number % 1_000_000 !== 0 ? 1 : 0) + 'M';
    }
}
