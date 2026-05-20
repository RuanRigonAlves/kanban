<template>
  <v-navigation-drawer
    class="drawer"
    theme="system"
    permanent
    rail
    rail-width="100"
  >
    <!-- Logo -->
    <v-list>
      <v-list-item value="home" class="pa-0">
        <v-btn
          to="/"
          icon="$vuetify"
          rounded=""
          :class="{ activeBtn: $route.path === '/' }"
          :variant="$route.path === '/' ? 'tonal' : 'flat'"
        >
        </v-btn>
      </v-list-item>
    </v-list>

    <!-- Perfil -->
    <v-list>
      <v-list-item value="perfil">
        <v-btn
          to="/perfil"
          icon="mdi-account-circle"
          rounded=""
          :class="{ activeBtn: $route.path === '/perfil' }"
          :variant="$route.path === '/perfil' ? 'tonal' : 'flat'"
        >
        </v-btn>
      </v-list-item>
    </v-list>

    <!-- Lista -->
    <v-list nav>
      <v-list-item value="item1" class="pa-0">
        <v-btn
          to="/tarefas"
          icon="mdi-view-dashboard"
          rounded
          :class="{ activeBtn: $route.path === '/tarefas' }"
          :variant="$route.path === '/tarefas' ? 'tonal' : 'flat'"
        >
        </v-btn>
      </v-list-item>

      <v-list-item value="item2">
        <v-btn
          to="/sobre"
          icon="mdi-forum"
          rounded=""
          :class="{ activeBtn: $route.path === '/sobre' }"
          :variant="$route.path === '/sobre' ? 'tonal' : 'flat'"
        >
        </v-btn>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { ref } from "vue";

const drawer = ref(true);
const rail = ref(true);
const wider = ref(false);
const items = [
  { icon: "mdi-home-city", title: "Home", value: "home" },
  { icon: "mdi-account", title: "My Account", value: "account" },
  { icon: "mdi-account-group-outline", title: "Users", value: "users" },
];
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
</style>
