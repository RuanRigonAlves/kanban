<template>
  <v-card
    class="pa-3 mx-3 mb-3 rounded-lg cursor-grab border task-card"
    elevation="2"
  >
    <div class="font-weight-medium">
      {{ task.title }}
    </div>

    <div class="text-caption text-medium-emphasis my-3">
      {{ task.description }}
    </div>

    <div class="mt-2 d-flex align-center justify-space-between">
      <v-chip
        prepend-icon="mdi-circle"
        size="small"
        variant="elevated"
        :color="color"
      >
        {{ task.status }}</v-chip
      >

      <v-icon
        icon="mdi-alert-box-outline"
        class="ml-2"
        :color="priorityColor[task.priority]"
      >
      </v-icon>
    </div>
  </v-card>
</template>

<script setup>
defineProps({
  color: String,
  task: Object,
});

const priorityColor = {
  high: "error",
  medium: "warning",
  low: "success",
};
</script>

<style scoped>
.task-card {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.task-card {
  cursor: grab;
}

.task-card:active {
  cursor: grabbing;
}
</style>
