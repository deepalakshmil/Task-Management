import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import useTasks from "../hooks/useTasks";

const EditTask: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getTaskById } = useTasks();
  const navigate = useNavigate();

  const task = id ? getTaskById(id) : null;

  if (!task) return <p>Task not found.</p>;

  return (
    <div>
      <h2>Edit Task</h2>
      <TaskForm initialData={task} onSuccess={() => navigate("/")} />
      {/* // Pre-fills TaskForm with existing task // Updates on submit // Redirects to Dashboard  */}
    </div>
  );
};

export default EditTask;
