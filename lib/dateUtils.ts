import { format, formatDistanceToNow, parseISO } from "date-fns";

// Format date to readable string (e.g., "November 12, 2024")
export function formatDate(dateString: string): string {
  try {
    const date = parseISO(dateString);
    return format(date, "MMMM dd, yyyy");
  } catch (error) {
    return dateString;
  }
}

// Format date to short format (e.g., "Nov 12, 2024")
export function formatDateShort(dateString: string): string {
  try {
    const date = parseISO(dateString);
    return format(date, "MMM dd, yyyy");
  } catch (error) {
    return dateString;
  }
}

// Format date as relative time (e.g., "2 days ago")
export function formatRelativeDate(dateString: string): string {
  try {
    const date = parseISO(dateString);
    return formatDistanceToNow(date, { addSuffix: true });
  } catch (error) {
    return dateString;
  }
}

// Get ISO date string (for meta tags)
export function getISODate(dateString: string): string {
  try {
    return parseISO(dateString).toISOString();
  } catch (error) {
    return dateString;
  }
}
