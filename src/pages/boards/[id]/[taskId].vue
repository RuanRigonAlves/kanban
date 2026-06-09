<template>
  <div v-if="task">
    <div class="mb-4">
      <h1>Editar Task</h1>
    </div>

    <v-card>
      <v-card-text>
        <TaskForm v-model="form" />
      </v-card-text>
      <div class="d-flex justify-space-between ma-4 ga-2">
        <div>
          <v-btn color="btnRed" @click="removeTask">Excluir Task</v-btn>
        </div>

        <div class="d-flex ga-2">
          <v-btn
            color="btnOrange"
            @click="router.push(`/boards/${route.params.id}`)"
            >Cancelar
          </v-btn>

          <v-btn color="btnGreen" @click="saveTask"> Salvar </v-btn>
        </div>
      </div>
    </v-card>
  </div>

  <v-alert v-else type="error"> Task não encontrada. </v-alert>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { useKanbanStore } from "@/stores/kanban.js";
import TaskForm from "@/components/kanban/forms/TaskForm.vue";

import { ref, onMounted } from "vue";

const route = useRoute();
const router = useRouter();
const kanban = useKanbanStore();
const task = kanban.getTaskById(route.params.id, route.params.taskId);

const form = ref({
  title: "",
  description: "",
  priority: "medium",
  status: "nao-iniciado",
  dueDate: null,
  tags: [],
});

onMounted(() => {
  if (task) {
    form.value = { ...task };
  }
});
const removeTask = () => {
  kanban.removeTask(task.id);

  router.push(`/boards/${route.params.id}`);
};

const saveTask = () => {
  kanban.updateTask(form.value);

  router.push(`/boards/${route.params.id}`);
};
</script>
