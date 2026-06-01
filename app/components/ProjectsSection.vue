<script setup lang="ts">
import type { PortfolioContent } from '~/data/portfolio'

defineProps<{
  projects: PortfolioContent['projects']
}>()
</script>

<template>
  <section id="projects" class="section-band projects-section" aria-labelledby="projects-title">
    <SectionHeading title-id="projects-title" eyebrow="Projects" title="문제와 결과가 보이는 프로젝트" />
    <div class="project-grid">
      <article v-for="project in projects" :key="project.title" class="project-card">
        <div>
          <p class="project-kicker">{{ project.tags[0] }}</p>
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </div>
        <p class="project-impact">{{ project.impact }}</p>
        <ul class="tag-list" aria-label="사용 기술">
          <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
        </ul>
        <div class="project-links" aria-label="프로젝트 링크">
          <a
            v-for="link in project.links"
            :key="link.label"
            :href="link.href"
            :target="link.external ? '_blank' : undefined"
            :rel="link.external ? 'noreferrer' : undefined"
          >
            {{ link.label }}
          </a>
        </div>
      </article>
    </div>
  </section>
</template>
