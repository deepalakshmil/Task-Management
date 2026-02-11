import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useTasks from "../hooks/useTasks";

const TaskDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getTaskById, toggleComplete, deleteTask } = useTasks();

  const task = id ? getTaskById(id) : null;

  if (!task) return <p>Task not found!</p>;

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Status: {task.completed ? "✅ Completed" : "⏳ Pending"}</p>

      <button onClick={() => toggleComplete(task.id)}>
        {task.completed ? "Mark as Pending" : "Mark as Completed"}
      </button>

      <button onClick={() => navigate(`/edit/${task.id}`)}>Edit Task</button>
      <button
        onClick={() => {
          deleteTask(task.id);
          navigate("/");
        }}
      >
        Delete Task
      </button>
      <br />
      <button onClick={() => navigate(-1)} className="create-button">
        ← Go Back
      </button>
    </div>
  );
};

export default TaskDetails;
