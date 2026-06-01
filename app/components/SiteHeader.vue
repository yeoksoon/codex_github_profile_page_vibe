<script setup lang="ts">
defineProps<{
  name: string
}>()

const navItems = [
  { label: '소개', href: '#about' },
  { label: '기술', href: '#skills' },
  { label: '프로젝트', href: '#projects' },
  { label: '연락', href: '#contact' }
]
</script>

<template>
  <header class="site-header">
    <a class="brand" href="#top" aria-label="첫 화면으로 이동">
      <span class="brand-mark" aria-hidden="true">{{ name.slice(0, 1) }}</span>
      <span>{{ name }}</span>
    </a>
    <nav class="site-nav" aria-label="주요 섹션">
      <a v-for="item in navItems" :key="item.href" :href="item.href">
        {{ item.label }}
      </a>
    </nav>
  </header>
</template>
