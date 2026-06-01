<script setup lang="ts">
import type { PortfolioContent } from '~/data/portfolio'

defineProps<{
  about: PortfolioContent['about']
}>()
</script>

<template>
  <section id="about" class="section-band about-section" aria-labelledby="about-title">
    <SectionHeading title-id="about-title" :eyebrow="about.eyebrow" :title="about.title" />
    <div class="about-layout">
      <div class="about-copy">
        <p v-for="paragraph in about.body" :key="paragraph">{{ paragraph }}</p>
      </div>
      <dl class="fact-list">
        <div v-for="fact in about.facts" :key="fact.label" class="fact-item">
          <dt>{{ fact.label }}</dt>
          <dd>{{ fact.value }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>
