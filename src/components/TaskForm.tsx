import React, { useEffect, useState } from "react";
import useTasks from "../hooks/useTasks";
import { useForm } from "../hooks/useForm";
import type { Task } from "../types/task";
import { validateTask } from "../utils/validation";

interface TaskFormProps {
  initialData?: Task;
  onSuccess?: () => void; // optional callback after save
}

const TaskForm: React.FC<TaskFormProps> = ({ initialData, onSuccess }) => {
  const { addTask, updateTask } = useTasks();
  //  Local state for showing validation error message
  const [error, setError] = useState<string | null>(null);

  //  useForm hook manages inputs and checkboxes safely
  const { values, setValues, handleChange } = useForm({
    title: initialData?.title || "",
    description: initialData?.description || "",
    completed: initialData?.completed || false,
  });

  // Pre-fill form when editing an existing task
  useEffect(() => {
    if (initialData) setValues(initialData);
  }, [initialData, setValues]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Run Validation
    const validationError = validateTask(values);
    if (validationError) {
      //alert(error);
      setError(validationError); // show inline message
      return;
    }

    setError(null); // clear any previous errors

    if (initialData) {
      // Editing existing task
      updateTask({ ...initialData, ...values });
    } else {
      // Creating new task
      addTask(values);
    }

    if (onSuccess) onSuccess(); // Optional callback (e.g., navigate back)
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{initialData ? "Edit Task" : "Add New Task"}</h2>
      <div>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={values.title}
          onChange={handleChange}
          placeholder="Task Title"
        />
      </div>

      <div>
        <label>Description</label>
        <textarea
          name="description"
          value={values.description}
          onChange={handleChange}
          placeholder="Task Description"
        />
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="completed"
            checked={values.completed}
            onChange={(e) =>
              setValues({ ...values, completed: e.target.checked })
            }
          />
          Completed
        </label>
      </div>

      {/*  Show inline error message (if any) */}
      {error && (
        <p style={{ color: "red", fontWeight: "bold", marginTop: "-5px" }}>
          ⚠️ {error}
        </p>
      )}

      <button type="submit">{initialData ? "Update Task" : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
