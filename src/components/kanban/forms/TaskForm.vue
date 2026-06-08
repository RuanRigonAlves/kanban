<template>
  <v-text-field
    v-model="localTask.title"
    label="Título"
    :rules="[taskRules.required, taskRules.minTitle]"
  />

  <v-textarea
    v-model="localTask.description"
    label="Descrição"
    :rules="[taskRules.required, taskRules.minDescription]"
  />

  <div class="d-flex ga-4">
    <v-select
      v-model="localTask.priority"
      label="Prioridade"
      :items="priorities"
      :rules="[taskRules.required]"
    />

    <v-text-field
      v-model="localTask.dueDate"
      type="date"
      label="Data de Entrega"
    />

    <v-combobox v-model="localTask.tags" label="Tags" multiple chips />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { taskRules } from "@/validators/taskValidators.js";

const props = defineProps({
  modelValue: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const priorities = ["high", "medium", "low"];

const localTask = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});
</script>
