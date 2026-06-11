<template>
  <div class="header">
    <h1 class="my-0">{{ board.title }} Tasks</h1>

    <v-text-field
      v-model="kanban.searchQuery"
      variant="outlined"
      label="Buscar task"
      hide-details
    >
    </v-text-field>

    <div class="d-flex align-center justify-end ga-4">
      <!-- Filtros -->
      <v-menu location="bottom" :close-on-content-click="false">
        <template #activator="{ props }">
          <v-btn
            v-bind="props"
            prepend-icon="mdi-filter-variant"
            variant="text"
            :color="hasFilters ? 'success' : undefined"
          >
            Filtros
          </v-btn>
        </template>

        <v-card width="220">
          <v-list density="comfortable">
            <v-list-subheader> Ordenar Por: </v-list-subheader>
            <v-list-item
              title="Data"
              :append-icon="
                kanban.sortDate === 'desc' ? 'mdi-arrow-down' : 'mdi-arrow-up'
              "
              :active="!!kanban.sortDate"
              color="success"
              @click="kanban.toggleDateSort()"
            />

            <v-list-item
              title="Prioridade"
              :append-icon="
                kanban.sortPriority === 'desc'
                  ? 'mdi-arrow-down'
                  : 'mdi-arrow-up'
              "
              :active="!!kanban.sortPriority"
              color="success"
              @click="kanban.togglePrioritySort()"
            />

            <v-divider />

            <v-list-item>
              <v-btn
                block
                variant="text"
                color="error"
                @click="kanban.clearFilters()"
              >
                Limpar filtros
              </v-btn>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>

      <!-- Criar Nova Task -->
      <CreateTaskDialog :board-id="boardId" />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useKanbanStore } from "@/stores/kanban.js";
import CreateTaskDialog from "@/components/kanban/dialogs/CreateTaskDialog.vue";

const props = defineProps({
  boardId: String,
  board: Object,
});

const kanban = useKanbanStore();

const hasFilters = computed(() => {
  return kanban.sortDate || kanban.sortPriority;
});
</script>

<style scoped>
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
