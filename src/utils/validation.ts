import type { Task } from "../types/task";

/**
 * validateTask
 * -------------
 * Checks for invalid or missing values in a Task object.
 * Returns a string error message if validation fails,
 * or null if the task is valid.
 */
export function validateTask(task: Omit<Task, "id">): string | null {
  //  Validate title
  if (!task.title || task.title.trim().length === 0)
    return "Title is required.";
  if (task.title.trim().length < 3)
    return "Title must be at least 3 characters long.";
  if (task.title.trim().length > 50)
    return "Title cannot exceed 50 characters.";

  // Validate description
  if (!task.description || task.description.trim().length === 0)
    return "Description is required.";
  if (task.description.trim().length < 10)
    return "Description must be at least 10 characters long.";
  if (task.description.trim().length > 500)
    return "Description cannot exceed 500 characters.";

  // Check for banned words (optional example)
  const bannedWords = ["hack", "illegal", "spam"];
  const foundBannedWord = bannedWords.find((word) =>
    task.description.toLowerCase().includes(word)
  );
  if (foundBannedWord)
    return `Description contains prohibited word: "${foundBannedWord}"`;

  // Optional: validate completed flag type
  if (typeof task.completed !== "boolean")
    return "Completed field must be true or false.";

  return null;
}
