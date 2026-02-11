// src / components / TaskList.tsx;

import React from "react";
import { Link } from "react-router-dom";
import useTasks from "../hooks/useTasks";

/**
 * TaskList
 * - shows a list of tasks (title + small actions)
 * - links each task title to the TaskDetails page
 * - uses the useTasks hook (from TaskContext)
 */
const TaskList: React.FC = () => {
  const { tasks, toggleComplete, deleteTask } = useTasks();

  if (!tasks || tasks.length === 0) {
    return (
      <div className="task-list">
        <p>No tasks available. Click "Add Task" to create your first one.</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`task-item ${task.completed ? "completed" : ""}`}
        >
          <div style={{ flex: 1 }}>
            <Link
              to={`/task/${task.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h3>{task.title}</h3>
            </Link>
            <p style={{ margin: 0 }}>{task.description}</p>
          </div>

          <div style={{ display: "flex", gap: "0.5rem", marginLeft: "1rem" }}>
            <button className="toggle" onClick={() => toggleComplete(task.id)}>
              {task.completed ? "Undo" : "Complete"}
            </button>

            <Link to={`/edit/${task.id}`}>
              <button className="edit">Edit</button>
            </Link>

            <button
              className="delete"
              onClick={() => {
                /* optional confirm can be added */
                if (confirm("Delete this task?")) deleteTask(task.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
