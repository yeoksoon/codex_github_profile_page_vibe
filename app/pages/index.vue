<script setup lang="ts">
import { portfolio } from '~/data/portfolio'

const config = useRuntimeConfig()

const assetPath = (path: string) => {
  const baseURL = config.app.baseURL.endsWith('/') ? config.app.baseURL : `${config.app.baseURL}/`
  return `${baseURL}${path.replace(/^\/+/, '')}`
}

const heroImage = assetPath(portfolio.profile.heroImage)
const avatarImage = assetPath(portfolio.profile.avatarImage)

useSeoMeta({
  title: `${portfolio.profile.name} | ${portfolio.profile.role}`,
  description: portfolio.profile.summary,
  ogTitle: `${portfolio.profile.name} | ${portfolio.profile.role}`,
  ogDescription: portfolio.profile.summary,
  ogImage: heroImage,
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div class="site-shell">
    <SiteHeader :name="portfolio.profile.name" />
    <main>
      <HeroSection
        id="top"
        :profile="portfolio.profile"
        :hero-src="heroImage"
        :avatar-src="avatarImage"
      />
      <AboutSection :about="portfolio.about" />
      <SkillsSection :skills="portfolio.skills" />
      <ProjectsSection :projects="portfolio.projects" />
      <ContactSection :contact="portfolio.contact" />
    </main>
  </div>
</template>
