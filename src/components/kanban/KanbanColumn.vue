<template class="">
  <v-card
    class="fill-height border rounded-lg"
    :color="column.color"
    width="280px"
  >
    <v-card-title class="d-flex justify-center"
      >{{ column.title }}
      <v-chip size="small">
        {{ column.tasks.length }}
      </v-chip>
    </v-card-title>

    <draggable
      v-model="column.tasks"
      group="tasks"
      item-key="id"
      animation="200"
      ghost-class="ghost"
      class="fill-height"
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
});

const onTaskMoved = (event) => {
  if (event.added) {
    event.added.element.status = props.column.id;
  }
};
</script>

<style scoped>
.ghost {
  opacity: 0.4;
}
</style>
