<script setup lang="ts">
import BlogCard from '@/components/BlogCard.vue'
const isHovered = ref(false)
</script>

<template>
  <main class="flex items-center justify-center min-h-screen bg-primary p-6">
    <BlogCard
      imageSrc="/images/illustration-article.svg"
      category="Learning"
      date="Published 21 Dec 2023"
      title="HTML & CSS foundations"
      description="These languages are the backbone of every website, defining structure, content, and presentation."
      avatarSrc="/images/greg-avatar.webp"
      author="Greg Hooper"
    />
  </main>
</template>
