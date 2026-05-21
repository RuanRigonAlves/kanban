<template>
  <div class="kanban-grid">
    <KanbanColumn
      v-for="column in kanban.columns"
      :key="column.id"
      :column="column"
      :tasks="kanban.getTasksByStatus(column.id)"
    />
  </div>
</template>

<script setup>
import KanbanColumn from "@/components/kanban/KanbanColumn.vue";
import { useKanbanStore } from "@/stores/kanban.js";

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
