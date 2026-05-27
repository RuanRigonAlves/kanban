<template>
  <v-card
    class="fill-height border rounded-lg"
    :color="column.color"
    min-height="80vh"
  >
    <v-card-title class="d-flex justify-center"
      >{{ column.title }}
      <v-chip size="small" class="ml-2">
        {{ tasks.length }}
      </v-chip>
    </v-card-title>

    <draggable
      :list="tasks"
      group="tasks"
      item-key="id"
      animation="300"
      ghost-class="ghost"
      class="fill-height"
      drag-class="dragging"
      @change="onTaskMoved"
    >
      <template #item="{ element }">
        <TaskCard :task="element" :color="column.color" />
      </template>
    </draggable>
  </v-card>
</template>

<script setup>
import TaskCard from "@/components/kanban/cards/TaskCard.vue";
import draggable from "vuedraggable";

const props = defineProps({
  column: Object,
  tasks: Array,
});

const emit = defineEmits(["task-moved"]);

const onTaskMoved = (event) => {
  if (event.added) {
    emit("task-moved", {
      taskId: event.added.element.id,
      newStatus: props.column.id,
    });
  }
};
</script>

<style scoped>
.ghost {
  opacity: 0.4;
}

.dragging {
  opacity: 0.6;
}
</style>
