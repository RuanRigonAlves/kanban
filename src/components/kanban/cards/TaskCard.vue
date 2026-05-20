<template>
  <v-card class="pa-3 mx-3 mb-3 rounded-lg cursor-grab border" elevation="2">
    <div class="font-weight-medium">
      {{ task.title }}
    </div>

    <div class="text-caption text-medium-emphasis mt-1">
      {{ task.description }}
    </div>

    <div></div>

    <div class="mt-2">
      <v-chip
        prepend-icon="mdi-circle"
        size="small"
        variant="elevated"
        :color="color"
      >
        {{ task.status }}</v-chip
      >
    </div>
  </v-card>
</template>

<script setup>
defineProps({
  color: String,
  task: Object,
});
</script>
