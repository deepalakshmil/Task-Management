import { createContext } from "react";
import type { Task } from "../types/task";

interface TaskContextType {
  tasks: Task[];
  addTask: (task: Omit<Task, "id">) => void;
  //The ID is generated internally
  updateTask: (task: Task) => void;
  deleteTask: (id: string) => void;
  toggleComplete: (id: string) => void;
}

export const TaskContext = createContext<TaskContextType | undefined>(
  undefined
);
