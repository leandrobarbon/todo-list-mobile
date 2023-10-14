import React, { createContext, useState } from "react";
import { Task } from "../@types/TaskTypes";

type TaskContextType = {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (id: number) => void;
  handleTaskCompleted: (id: number) => void;
};

type TaskProviderProps = {
  children: React.ReactNode;
};

export const TaskContext = createContext<TaskContextType | null>(null);

export function TaskProvider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  function addTask(task: Task) {
    setTasks([task, ...tasks]);
  }

  function removeTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function handleTaskCompleted(id: number) {
    const taskCompleted = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });

    setTasks(taskCompleted);
  }

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, removeTask, handleTaskCompleted }}
    >
      {children}
    </TaskContext.Provider>
  );
}
