<template>
  <div class="d-flex align-center justify-space-between mb-4">
    <h1 class="my-0">Tasks</h1>

    <v-btn class="border border-thin text-medium-emphasis" variant="text">
      Gerenciar Tarefas
    </v-btn>
  </div>
  <div class="kanban-grid">
    <Column
      v-for="column in kanbanColumns"
      :key="column.id"
      :column="column"
      :tasks="kanban.getTasksByStatus(boardId, column.id)"
      @task-moved="handleTaskMoved"
    />
  </div>
</template>

<script setup>
import Column from "@/components/kanban/Column.vue";
import { useKanbanStore } from "@/stores/kanban.js";
import { useRoute } from "vue-router";
import { kanbanColumns } from "@/constants/kanbanColumns.js";

const route = useRoute();
const boardId = route.params.id;

const kanban = useKanbanStore();

const handleTaskMoved = ({ taskId, newStatus }) => {
  kanban.moveTask(taskId, newStatus);
};
</script>

<style scoped>
.kanban-grid {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));

  gap: 16px;

  align-items: start;
}
</style>
