export function snakeToCapitalCase(str: string) {
  return str
    .split("_") // Split by underscores
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
    .join(" "); // Join with a space
}

export const truncateText = (text: string, maxLength: number = 28) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + "...";
};
