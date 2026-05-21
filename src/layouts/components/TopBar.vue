<template>
  <v-app-bar class="border-b">
    <v-list class="d-flex px-4 text-high-emphasis">
      <v-list-item>
        <v-btn to="/" variant="plain"> Home </v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn to="/perfil" variant="plain"> Perfil </v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn to="/tarefas" variant="plain"> Tarefas </v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn to="/sobre" variant="plain"> Sobre </v-btn>
      </v-list-item>
    </v-list>

    <v-spacer> </v-spacer>

    <v-list>
      <v-list-item>
        <v-btn
          class="border border-thin text-medium-emphasis"
          @click="dialog = true"
        >
          Manage
        </v-btn>
      </v-list-item>
    </v-list>
  </v-app-bar>

  <!-- MODAL -->
  <v-dialog v-model="dialog" max-width="500">
    <v-card>
      <v-card-title> Criar Task </v-card-title>

      <v-card-text>
        <v-text-field v-model="newTask.title" label="Título" />

        <v-textarea v-model="newTask.description" label="Descrição" />

        <v-select
          v-model="newTask.priority"
          :items="['low', 'medium', 'high']"
          label="Prioridade"
        />
      </v-card-text>

      <v-card-actions>
        <v-spacer />

        <v-btn variant="text" @click="dialog = false"> Cancelar </v-btn>

        <v-btn color="primary" @click="createTask"> Criar </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from "vue";

import { useKanbanStore } from "@/stores/kanban";

const kanban = useKanbanStore();

const dialog = ref(false);

const newTask = ref({
  title: "",
  description: "",
  priority: "medium",
});

const createTask = () => {
  kanban.addTask({
    id: Date.now(),

    title: newTask.value.title,

    description: newTask.value.description,

    priority: newTask.value.priority,

    status: "nao-iniciado",

    dueDate: new Date().toISOString().split("T")[0],

    tags: [],
  });

  dialog.value = false;

  newTask.value = {
    title: "",
    description: "",
    priority: "medium",
  };
};
</script>

<style scoped></style>
