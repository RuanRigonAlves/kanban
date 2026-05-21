<template>
  <div class="kanban-grid">
    <KanbanColumn v-for="column in columns" :key="column.id" :column="column" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import KanbanColumn from "@/components/kanban/KanbanColumn.vue";
import { mockTasks } from "@/mocks/tasks.js";

const columns = ref([
  {
    id: "todo",
    title: "Nao Iniciado",
    color: "colunaToDo",
    tasks: mockTasks.filter((task) => task.status === "todo"),
  },
  {
    id: "pendente",
    title: "Pendente",
    color: "colunaPendente",
    tasks: [mockTasks.find((task) => task.status === "pendente")],
  },
  {
    id: "em-andamento",
    title: "Em Andamento",
    color: "colunaEmAndamento",
    tasks: [mockTasks.find((task) => task.status === "em-andamento")],
  },
  {
    id: "revisao",
    title: "Em Revisão",
    color: "colunaRevisao",
    tasks: [mockTasks.find((task) => task.status === "revisao")],
  },
  {
    id: "concluido",
    title: "Concluído",
    color: "colunaConcluido",
    tasks: [mockTasks.find((task) => task.status === "concluido")],
  },
  {
    id: "cancelado",
    title: "Cancelado",
    color: "colunaCancelado",
    tasks: [mockTasks.find((task) => task.status === "cancelado")],
  },
]);
</script>

<style scoped>
.kanban-grid {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));

  gap: 16px;

  align-items: start;
}
</style>
