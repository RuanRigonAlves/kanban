import { defineStore } from "pinia";

import { mockTasks } from "@/mocks/tasks";
import { mockBoards } from "@/mocks/boards";

export const useKanbanStore = defineStore("kanban", {
  state: () => ({
    boards: mockBoards,

    tasks: mockTasks,
  }),

  actions: {
    moveTask(taskId, newStatus) {
      const task = this.tasks.find((task) => task.id === taskId);

      if (task) {
        task.status = newStatus;
      }
    },

    addTask(newTask) {
      this.tasks.push(newTask);
    },

    removeTask(taskId) {
      this.tasks = this.tasks.filter((task) => task.id !== taskId);
    },

    updateTask(updatedTask) {
      const task = this.tasks.find(
        (task) =>
          task.id === updatedTask.id && task.boardId === updatedTask.boardId,
      );

      if (!task) return;

      Object.assign(task, updatedTask);
    },
  },

  getters: {
    getTasksByStatus: (state) => (boardId, status) => {
      return state.tasks.filter(
        (task) => task.boardId === boardId && task.status === status,
      );
    },

    getBoardById: (state) => (boardId) => {
      return state.boards.find((board) => board.id === boardId);
    },

    getTasksByBoard: (state) => (boardId) => {
      return state.tasks.filter((task) => task.boardId === boardId);
    },

    getTaskById: (state) => (boardId, taskId) => {
      return state.tasks.find(
        (task) => task.id === Number(taskId) && task.boardId === boardId,
      );
    },
  },

  persist: true,
});
