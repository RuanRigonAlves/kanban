<template>
  <p>Kanban Board</p>
  <div class="d-flex justify-space-between fill-height">
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
  { id: "pendente", title: "Pendente", color: "colunaPendente", tasks: [] },
  {
    id: "em-andamento",
    title: "Em Andamento",
    color: "colunaEmAndamento",
    tasks: [],
  },
  { id: "revisao", title: "Em Revisão", color: "colunaRevisao", tasks: [] },
  { id: "concluido", title: "Concluído", color: "colunaConcluido", tasks: [] },
  { id: "cancelado", title: "Cancelado", color: "colunaCancelado", tasks: [] },
]);
</script>
