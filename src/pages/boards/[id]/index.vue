<template>
  <div class="header d-flex align-center justify-space-between">
    <h1 class="my-0">{{ board.title }} Tasks</h1>

    <v-text-field
      v-model="kanban.searchQuery"
      variant="outlined"
      label="Buscar task"
      hide-details
    >
    </v-text-field>

    <div class="d-flex align-center justify-end ga-4">
      <div>FIlter options</div>

      <CreateTaskDialog :board-id="boardId" />
    </div>
  </div>

  <v-divider class="my-4"> </v-divider>

  <div class="kanban-grid">
    <TasksColumn
      v-for="column in kanbanColumns"
      :key="column.id"
      :column="column"
      :tasks="getColumnTasks(column.id)"
      @task-moved="handleTaskMoved"
      @view-task="openTask"
    />
  </div>

  <ViewTaskDialog v-model="viewTaskDialog" :task="selectedTask" />
</template>

<script setup>
import TasksColumn from "@/components/kanban/TasksColumn.vue";
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

// View task dialog
const selectedTask = ref(null);
const viewTaskDialog = ref(false);

const getColumnTasks = (status) => {
  return kanban
    .getSearchedTasks(boardId)
    .filter((task) => task.status === status);
};

// Open task details dialog
const openTask = (task) => {
  selectedTask.value = task;
  viewTaskDialog.value = true;
};

// Handle task moved between columns
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

.header {
  display: grid;
  grid-template-columns: 550px 350px 550px;
  align-items: center;
}
</style>
