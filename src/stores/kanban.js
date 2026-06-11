import { defineStore } from "pinia";

import { mockTasks } from "@/mocks/tasks";
import { mockBoards } from "@/mocks/boards";
import { taskFilters } from "@/utils/taskFilters.js";

export const useKanbanStore = defineStore("kanban", {
  state: () => ({
    searchQuery: "",
    tasks: mockTasks,
    boards: mockBoards,
    sortDate: null,
    sortPriority: null,
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

    toggleDateSort() {
      this.sortPriority = null;
      this.sortDate = this.sortDate === "desc" ? "asc" : "desc";
    },

    togglePrioritySort() {
      this.sortDate = null;
      this.sortPriority = this.sortPriority === "desc" ? "asc" : "desc";
    },

    clearFilters() {
      this.sortDate = null;
      this.sortPriority = null;
    },
  },

  getters: {
    getSearchedTasks: (state) => (boardId) => {
      const query = state.searchQuery.trim().toLowerCase();

      let tasks = state.tasks.filter((task) => {
        const matchesBoard = task.boardId === boardId;

        const matchesSearch =
          !query ||
          task.title.toLowerCase().includes(query) ||
          task.description.toLowerCase().includes(query);

        return matchesBoard && matchesSearch;
      });

      tasks = taskFilters.applyDateSort(tasks, state.sortDate);
      tasks = taskFilters.applyPrioritySort(tasks, state.sortPriority);

      return tasks;
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
