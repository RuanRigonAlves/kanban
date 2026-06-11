<template>
  <TasksToolBar :board="board" :board-id="boardId" />

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
import TasksToolBar from "@/components/kanban/TasksToolBar.vue";

import { ref, computed } from "vue";
import { useKanbanStore } from "@/stores/kanban.js";
import { useRoute } from "vue-router";
import { kanbanColumns } from "@/constants/kanbanColumns.js";

const route = useRoute();
const boardId = route.params.id;
const kanban = useKanbanStore();
const board = kanban.getBoardById(boardId);

// View task dialog
const selectedTask = ref(null);
const viewTaskDialog = ref(false);

const filteredTasks = computed(() => kanban.getSearchedTasks(boardId));

const getColumnTasks = (status) => {
  return filteredTasks.value.filter((task) => task.status === status);
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

  grid-template-columns:
    minmax(250px, 1fr)
    400px
    minmax(250px, 1fr);

  gap: 24px;

  align-items: center;
}
</style>
