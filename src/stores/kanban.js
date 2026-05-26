import { defineStore } from "pinia";

import { mockTasks } from "@/mocks/tasks";
import { mockBoards } from "@/mocks/boards";

export const useKanbanStore = defineStore("kanban", {
  state: () => ({
    columns: [
      {
        id: "nao-iniciado",
        title: "Nao Iniciado",
        color: "colunaToDo",
      },

      {
        id: "pendente",
        title: "Pendente",
        color: "colunaPendente",
      },

      {
        id: "em-andamento",
        title: "Em Andamento",
        color: "colunaEmAndamento",
      },

      {
        id: "revisao",
        title: "Em Revisão",
        color: "colunaRevisao",
      },

      {
        id: "concluido",
        title: "Concluído",
        color: "colunaConcluido",
      },

      {
        id: "cancelado",
        title: "Cancelado",
        color: "colunaCancelado",
      },
    ],

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
  },

  persist: true,
});
