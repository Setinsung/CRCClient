<script setup lang="ts">
import useStore from '../../store'

const { testmStore } = useStore()
</script>

<template>
  <div>home</div>
  <div>{{ testmStore.name }}</div>
</template>

<style scoped></style>
