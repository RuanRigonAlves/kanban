<template>
  <p>Kanban Board</p>
  <div class="d-flex justify-space-between fill-height">
    <KanbanColumn
      title="Nao Iniciado"
      :bgColor="$vuetify.theme.themes.dark.colors.bg_blue"
    />
    <KanbanColumn
      title="Pendente"
      :bgColor="$vuetify.theme.themes.dark.colors.bg_gray"
    />
    <KanbanColumn
      title="Em Andamento"
      :bgColor="$vuetify.theme.themes.dark.colors.bg_purple"
    />
    <KanbanColumn
      title="Em Revisão"
      :bgColor="$vuetify.theme.themes.dark.colors.bg_light_purple"
    />
    <KanbanColumn
      title="Concluído"
      :bgColor="$vuetify.theme.themes.dark.colors.bg_green"
    />
    <KanbanColumn
      title="Cancelado"
      :bgColor="$vuetify.theme.themes.dark.colors.bg_red"
    />
  </div>
</template>

<script setup>
import KanbanColumn from "@/components/kanban/KanbanColumn.vue";
</script>
