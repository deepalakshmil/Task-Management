import React from "react";
import TaskForm from "../components/TaskForm";
import { useNavigate } from "react-router-dom";

const CreateTask: React.FC = () => {
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate("/"); // return to dashboard
  };

  return (
    <div>
      <h2>Create Task</h2>
      <TaskForm onSuccess={handleSuccess} />
    </div>
  );
};

export default CreateTask;
