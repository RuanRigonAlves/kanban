<template>
  <v-navigation-drawer
    class="drawer"
    color=""
    theme="system"
    permanent
    rail
    rail-width="100"
  >
    <!-- Logo -->
    <div class="d-flex justify-center py-3">
      <RouterLink to="/" class="logo-link">
        <v-icon icon="$vuetify" size="40" color="primary" />
      </RouterLink>
    </div>

    <!-- Perfil -->
    <div class="d-flex justify-center my-6">
      <RouterLink to="/perfil" class="nav-link">
        <v-icon icon="mdi-account-box-outline" size="32" />
      </RouterLink>
    </div>

    <!-- Lista -->
    <v-list nav>
      <v-list-item value="item1" class="pa-0">
        <v-btn
          to="/boards"
          icon="mdi-view-dashboard"
          rounded
          :class="{ activeBtn: isActiveRoute('/boards') }"
          :variant="isActiveRoute('/boards') ? 'tonal' : 'flat'"
        >
        </v-btn>
      </v-list-item>

      <v-list-item value="item2">
        <v-btn
          to="/sobre"
          icon="mdi-forum"
          rounded=""
          :class="{ activeBtn: isActiveRoute('/sobre') }"
          :variant="isActiveRoute('/sobre') ? 'tonal' : 'flat'"
        >
        </v-btn>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();

const isActiveRoute = (path) => {
  return route.path.startsWith(path);
};
</script>

<style scoped>
.v-list {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.v-list-item {
  padding: 0;
}

.activeBtn {
  background: rgb(var(--v-theme-btn_primary)) !important;
}

.nav-link {
  color: white;
  text-decoration: none;
}
</style>
