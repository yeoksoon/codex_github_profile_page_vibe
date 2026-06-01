<script setup lang="ts">
import type { PortfolioContent } from '~/data/portfolio'

defineProps<{
  profile: PortfolioContent['profile']
  heroSrc: string
  avatarSrc: string
}>()
</script>

<template>
  <section class="hero-section section-band" aria-labelledby="hero-title">
    <div class="hero-copy">
      <p class="eyebrow">{{ profile.role }}</p>
      <h1 id="hero-title" :aria-label="profile.headline">
        <span v-for="line in profile.headlineLines" :key="line" class="headline-line">{{ line }}</span>
      </h1>
      <p class="hero-summary">{{ profile.summary }}</p>
      <div class="hero-actions" aria-label="주요 링크">
        <a
          v-for="link in profile.links"
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
      <ul class="hero-highlights" aria-label="핵심 역량">
        <li v-for="item in profile.highlights" :key="item">{{ item }}</li>
      </ul>
    </div>

    <div class="hero-visual">
      <img class="hero-image" :src="heroSrc" alt="개발자 작업 공간 이미지" width="960" height="640">
      <div class="profile-chip" aria-label="프로필 요약">
        <img :src="avatarSrc" :alt="`${profile.name} 프로필 placeholder`" width="96" height="96">
        <div>
          <strong>{{ profile.name }}</strong>
          <span>{{ profile.location }}</span>
        </div>
      </div>
      <p class="availability">{{ profile.availability }}</p>
    </div>
  </section>
</template>
