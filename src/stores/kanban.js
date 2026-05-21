import { defineStore } from "pinia";
import { ref } from "vue";

import { mockTasks } from "@/mocks/tasks";

export const useKanbanStore = defineStore(
  "kanban",
  () => {
    // STATE
    const tasks = ref(mockTasks);

    const columns = [
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
    ];

    // ACTIONS
    const moveTask = (taskId, newStatus) => {
      const task = tasks.value.find((task) => task.id === taskId);

      if (task) {
        task.status = newStatus;
      }
    };

    const addTask = (newTask) => {
      tasks.value.push(newTask);
    };

    // GETTERS
    const getTasksByStatus = (status) => {
      return tasks.value.filter((task) => task.status === status);
    };

    return {
      tasks,
      columns,

      moveTask,
      getTasksByStatus,
      addTask,
    };
  },
  {
    persist: true,
  },
);
