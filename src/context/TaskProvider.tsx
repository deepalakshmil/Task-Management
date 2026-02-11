import React, { useCallback, type ReactNode } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useMemo } from "react";
import type { Task } from "../types/task";
import { TaskContext } from "./TaskContext";

interface Props {
  children: ReactNode;
}
// TaskProvider Component
export const TaskProvider: React.FC<Props> = ({ children }) => {
  // Persistent storage using useLocalStorage
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);

  //  Memoize all CRUD functions
  // Add task (ID generated here)
  const addTask = useCallback(
    (taskData: Omit<Task, "id">) => {
      const newTask: Task = { ...taskData, id: crypto.randomUUID() };
      setTasks((prev) => [...prev, newTask]);
    },
    [setTasks]
  );
  // Update task by id
  const updateTask = useCallback(
    (updatedTask: Task) => {
      setTasks((prev) =>
        prev.map((t) => (t.id === updatedTask.id ? updatedTask : t))
      );
    },
    [setTasks]
  );

  // Delete task by id
  const deleteTask = useCallback(
    (id: string) => setTasks((prev) => prev.filter((t) => t.id !== id)),
    [setTasks]
  );

  // Toggle task completion
  const toggleComplete = useCallback(
    (id: string) =>
      setTasks((prev) =>
        prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
      ),
    [setTasks]
  );

  //  Stable memoized value
  const value = useMemo(
    () => ({ tasks, addTask, updateTask, deleteTask, toggleComplete }),
    [tasks, addTask, updateTask, deleteTask, toggleComplete]
  );
  //useMemo caches (memoizes) a computed value so React doesn’t recompute it unnecessarily every render.
  //you can memoize the value so that it doesn’t re-render unnecessarily:
  //This avoids unnecessary re-renders of child components when only unrelated state changes.
  //Improves performance and prevents child components from re-rendering unnecessarily when their data hasn’t changed.
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
