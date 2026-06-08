<template>
  <!-- Botão -->
  <v-btn
    class="border border-thin text-medium-emphasis"
    color="btnBlue"
    variant="flat"
    @click="dialog = true"
  >
    Nova Task
  </v-btn>

  <!-- Modal -->
  <v-dialog v-model="dialog" max-width="800">
    <v-card class="pa-4">
      <v-card-title class="d-flex justify-center pb-6">Nova Task</v-card-title>

      <v-form ref="taskFormRef">
        <TaskForm v-model="form" />
      </v-form>

      <v-card-actions>
        <v-spacer />

        <v-btn variant="flat" color="btnRed" @click="dialog = false">
          Cancelar
        </v-btn>

        <v-btn variant="flat" color="btnGreen" @click="createTask">
          Criar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from "vue";

import { useKanbanStore } from "@/stores/kanban";
import TaskForm from "@/components/kanban/forms/TaskForm.vue";

const props = defineProps({
  boardId: String,
});

const kanban = useKanbanStore();

const dialog = ref(false);
const taskFormRef = ref(null);

const initialForm = () => ({
  title: "",
  description: "",
  priority: "low",
  status: "nao-iniciado",
});

const form = ref(initialForm());

const createTask = async () => {
  const { valid } = await taskFormRef.value.validate();

  if (!valid) return;

  kanban.addTask({
    id: Date.now(),
    boardId: props.boardId,

    title: form.value.title,
    description: form.value.description,

    priority: form.value.priority,
    status: form.value.status,

    dueDate: null,
    tags: [],
  });

  dialog.value = false;
  form.value = initialForm();
};
</script>
