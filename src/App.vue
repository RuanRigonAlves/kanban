<template>
  <v-app>
    <v-main>
      <Side-Bar> </Side-Bar>

      <top-bar></top-bar>

      <v-container fluid height="100%">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import TopBar from "@/layouts/components/TopBar.vue";
import SideBar from "@/layouts/components/SideBar.vue";
</script>
