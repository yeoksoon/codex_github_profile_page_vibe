<script setup lang="ts">
import type { PortfolioContent } from '~/data/portfolio'

defineProps<{
  skills: PortfolioContent['skills']
}>()
</script>

<template>
  <section id="skills" class="section-band skills-section" aria-labelledby="skills-title">
    <SectionHeading title-id="skills-title" eyebrow="Skills" title="화면 구현부터 배포까지 연결하는 기술" />
    <div class="skills-grid">
      <section v-for="group in skills" :key="group.title" class="skill-group">
        <h3>{{ group.title }}</h3>
        <ul>
          <li v-for="item in group.items" :key="item">{{ item }}</li>
        </ul>
      </section>
    </div>
  </section>
</template>
