<template>
  <header>
    <h1>Kanban Boards</h1>
  </header>

  <div class="board-grid">
    <div v-for="board in boards" :key="board.id">
      <v-card
        :to="`/boards/${board.id}`"
        class="pa-3 mx-3 mb-3 rounded-lg border"
        elevation="2"
      >
        <div class="font-weight-medium">
          {{ board.title }}
        </div>

        <div class="text-caption text-medium-emphasis my-3">
          {{ board.description }}
        </div>

        <div
          class="mt-2 d-flex align-center justify-space-between text-medium-emphasis"
        >
          <v-icon :icon="board.icon" class="ml-2"> </v-icon>

          <p>Criado: {{ board.createdAt }}</p>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script setup>
import { useKanbanStore } from "@/stores/kanban.js";

const { boards } = useKanbanStore();
</script>

<style scoped>
.board-grid {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));

  align-items: start;
}

.board-grid .v-card {
  transition:
    transform 0.2s ease,
    border-color 0.2s ease;
}

.board-grid .v-card:hover {
  transform: translateY(-2px);
}
</style>
