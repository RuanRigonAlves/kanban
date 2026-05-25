import { defineStore } from "pinia";
import { ref } from "vue";

import { mockTasks } from "@/mocks/tasks";

export const useKanbanStore = defineStore("kanban", {
  state: () => ({
    tasks: mockTasks,
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
  },

  getters: {
    getTasksByStatus: (state) => (status) => {
      return state.tasks.filter((task) => task.status === status);
    },
  },

  persist: true,
});
