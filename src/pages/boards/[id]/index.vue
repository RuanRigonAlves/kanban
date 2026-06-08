<template>
  <div class="d-flex align-center justify-space-between mb-4">
    <h1 class="my-0">{{ board.title }} Tasks</h1>

    <CreateTaskDialog :board-id="boardId" />
  </div>
  <div class="kanban-grid">
    <BoardColumn
      v-for="column in kanbanColumns"
      :key="column.id"
      :column="column"
      :tasks="kanban.getTasksByStatus(boardId, column.id)"
      @task-moved="handleTaskMoved"
      @view-task="openTask"
    />
  </div>

  <ViewTaskDialog v-model="viewTaskDialog" :task="selectedTask" />
</template>

<script setup>
import BoardColumn from "@/components/kanban/BoardColumn.vue";
import ViewTaskDialog from "@/components/kanban/dialogs/ViewTaskDialog.vue";

import { ref } from "vue";
import { useKanbanStore } from "@/stores/kanban.js";
import { useRoute } from "vue-router";
import { kanbanColumns } from "@/constants/kanbanColumns.js";
import CreateTaskDialog from "@/components/kanban/dialogs/CreateTaskDialog.vue";

const route = useRoute();
const boardId = route.params.id;
const kanban = useKanbanStore();

const board = kanban.getBoardById(boardId);

console.log(board);

// View task dialog
const selectedTask = ref(null);
const viewTaskDialog = ref(false);

const openTask = (task) => {
  selectedTask.value = task;
  viewTaskDialog.value = true;
};
//

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
