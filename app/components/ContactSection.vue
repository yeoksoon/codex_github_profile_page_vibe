<script setup lang="ts">
import type { PortfolioContent } from '~/data/portfolio'

defineProps<{
  contact: PortfolioContent['contact']
}>()
</script>

<template>
  <section id="contact" class="section-band contact-section" aria-labelledby="contact-title">
    <div>
      <SectionHeading title-id="contact-title" :eyebrow="contact.eyebrow" :title="contact.title" />
      <p>{{ contact.description }}</p>
    </div>
    <div class="contact-actions" aria-label="연락 링크">
      <a
        v-for="link in contact.links"
        :key="link.label"
        class="button"
        :class="`button-${link.variant || 'secondary'}`"
        :href="link.href"
        :target="link.external ? '_blank' : undefined"
        :rel="link.external ? 'noreferrer' : undefined"
      >
        {{ link.label }}
      </a>
    </div>
  </section>
</template>
