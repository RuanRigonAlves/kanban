<template>
  <v-dialog v-model="dialog" max-width="1200">
    <v-card v-if="!isEditing">
      <v-card-title>
        {{ task?.title }}
      </v-card-title>

      <v-card-text v-if="task">
        <div class="mb-8">
          <strong class="text-medium-emphasis">Descrição</strong>

          <p class="mt-2">
            {{ task.description }}
          </p>
        </div>

        <div class="d-flex ga-2 mb-8">
          <div>
            <strong class="text-medium-emphasis">Prioridade:</strong>
            <v-chip :color="priorityColor[task.priority]" class="ml-2">
              {{ task.priority }}
            </v-chip>
          </div>

          <div>
            <strong class="text-medium-emphasis">Status:</strong>
            <v-chip class="ml-2">
              {{ task.status }}
            </v-chip>
          </div>

          <div v-if="task.tags?.length">
            <strong class="text-medium-emphasis">Tags:</strong>
            <v-chip v-for="tag in task.tags" :key="tag" class="ml-2">
              {{ tag }}
            </v-chip>
          </div>
        </div>
        <div class="mt-4">
          <div>
            <strong class="text-medium-emphasis">Data Entrega:</strong>

            {{ task.dueDate || "Não definida" }}
          </div>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn
          variant="flat"
          color="btnBlue"
          :to="`/boards/${boardId}/${task.id}`"
          >Editar</v-btn
        >
        <v-btn variant="flat" color="btnRed" @click="dialog = false">
          Fechar
        </v-btn>
      </v-card-actions>
    </v-card>

    <v-card v-else>
      <task-form v-model="form" :rules="rules" />
    </v-card>
  </v-dialog>
</template>

<script setup>
import { computed, ref } from "vue";
import TaskForm from "@/components/kanban/forms/TaskForm.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const boardId = route.params.id;

const props = defineProps({
  modelValue: Boolean,
  task: Object,
});

const isEditing = ref(false);

const emit = defineEmits(["update:modelValue"]);

const dialog = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const priorityColor = {
  high: "error",
  medium: "warning",
  low: "success",
};
</script>
