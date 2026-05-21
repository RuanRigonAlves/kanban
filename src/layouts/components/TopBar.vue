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
        <v-btn class="border border-thin text-medium-emphasis"> Manage </v-btn>
      </v-list-item>
    </v-list>
  </v-app-bar>
</template>

<style scoped></style>
