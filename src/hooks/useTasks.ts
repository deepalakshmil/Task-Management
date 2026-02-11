//src/hooks/useTasks.ts

import { useContext, useCallback } from "react";
import { TaskContext } from "../context/TaskContext";
import type { Task } from "../types/task";

export default function useTasks() {
  const ctx = useContext(TaskContext);
  if (!ctx) throw new Error("useTasks must be used within TaskProvider");

  const { tasks, addTask, updateTask, deleteTask, toggleComplete } = ctx;

  const getTaskById = useCallback(
    (id: string): Task | null => tasks.find((t) => t.id === id) ?? null,
    [tasks]
  );

  // const createTask = useCallback(
  //   (data: Omit<Task, "id">) => addTask(data),
  //   [addTask]
  // );

  return {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    toggleComplete,
    getTaskById,
  } as const;
}
