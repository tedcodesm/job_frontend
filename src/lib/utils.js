export function formatMessageDateTime(date) {
    return new Date(date).toLocaleString("en-US", {
      month: "short",  // e.g., "Mar"
      day: "2-digit",  // e.g., "13"
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,   // 24-hour format
    });
  }
  