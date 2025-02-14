<script setup lang="ts">
import { NuxtImg } from '#components'
import articleImage from 'public/images/illustration-article.svg'
import BlogCard from '@/components/BlogCard.vue'
const isHovered = ref(false)
</script>

<template>
  <div
    class="bg-primary w-full min-h-screen font-figtree flex items-center justify-center p-4 relative"
  >
    <BlogCard
      title="HTML & CSS foundations"
      category="Learning"
      date="Published 21 Dec 2023"
      description="These languages are the backbone of every website, defining structure, content, and presentation."
      imageSrc="/images/illustration-article.svg"
      avatarSrc="/images/greg-avatar.webp"
      author="Greg Hooper"
    />
  </div>
</template>
