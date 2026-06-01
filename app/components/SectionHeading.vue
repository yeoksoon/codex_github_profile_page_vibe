<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  titleId?: string
}>()
</script>

<template>
  <div class="section-heading">
    <p class="eyebrow">{{ eyebrow }}</p>
    <h2 :id="titleId">{{ title }}</h2>
  </div>
</template>
