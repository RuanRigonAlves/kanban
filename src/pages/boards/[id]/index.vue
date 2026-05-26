<template>
  <div class="d-flex align-center justify-space-between mb-4">
    <h1 class="my-0">Tasks</h1>

    <v-btn
      class="border border-thin text-medium-emphasis"
      variant="text"
      @click="kanban.createTask(boardId)"
    >
      Criar Task
    </v-btn>
  </div>
  <div class="kanban-grid">
    <Column
      v-for="column in kanban.columns"
      :key="column.id"
      :column="column"
      :tasks="kanban.getTasksByStatus(boardId, column.id)"
    />
  </div>
</template>

<script setup>
import Column from "@/components/kanban/Column.vue";
import { useKanbanStore } from "@/stores/kanban.js";
import { useRoute } from "vue-router";

const route = useRoute();
const boardId = route.params.id;

const kanban = useKanbanStore();
</script>

<style scoped>
.kanban-grid {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));

  gap: 16px;

  align-items: start;
}
</style>
