// src/components/Dashboard.tsx(Task List Page)
import React from "react";
import { Link } from "react-router-dom";
import useTasks from "../hooks/useTasks";

const Dashboard: React.FC = () => {
  const { tasks, toggleComplete, deleteTask } = useTasks();

  return (
    <div className="dashboard-container">
      {/* Dashboard header */}
      <header className="dashboard-header">
        <h1>Welcome to the Task Manager</h1>
        <p className="subtitle">Manage your daily tasks efficiently!</p>
        <Link to="/create">
          <button className="add">➕ Add Task</button>
        </Link>
      </header>

      {/* Task list */}
      <section className="task-list">
        {tasks.length === 0 ? (
          <p>No tasks available. Create your first task above!</p>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              className={`task-item ${task.completed ? "completed" : ""}`}
            >
              {/* Task title linking to details page */}
              <Link to={`/task/${task.id}`} className="task-title">
                {task.title}
              </Link>

              {/* Task action buttons */}
              <div className="task-actions">
                <button
                  className="toggle"
                  onClick={() => toggleComplete(task.id)}
                >
                  {task.completed ? "Undo" : "Complete"}
                </button>
                <Link to={`/edit/${task.id}`}>
                  <button className="edit">Edit</button>
                </Link>
                <button className="delete" onClick={() => deleteTask(task.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default Dashboard;
