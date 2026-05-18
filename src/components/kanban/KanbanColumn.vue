<template class="">
  <v-card
    class="fill-height border rounded-lg"
    :style="{ backgroundColor: props.bgColor }"
    width="280px"
  >
    <v-card-title class="d-flex justify-center">{{ props.title }}</v-card-title>

    <v-list class="mx-3">
      <v-list-item v-for="i in 4" :key="i" class="">
        <v-card>
          <v-list-item-title>Task {{ i }}</v-list-item-title>
        </v-card>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup>
const props = defineProps({
  title: String,
  bgColor: String,
});
</script>
