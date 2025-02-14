<script setup lang="ts">
import { NuxtImg } from '#components'
import articleImage from '@/assets/images/illustration-article.svg'
</script>

<template>
  <div
    class="bg-primary w-full min-h-screen font-figtree flex items-center justify-center p-4 relative"
  >
    <div class="relative w-full max-w-card-lg-w xs:max-w-card-sm-w">
      <!-- Shadow -->
      <div
        class="absolute w-full h-full bg-dark rounded-xl left-2 top-2 z-0"
      ></div>

      <!-- Blog Card -->
      <section
        class="relative bg-white w-full rounded-xl shadow-lg p-6 z-10 border border-dark"
      >
        <article class="flex flex-col items-center">
          <NuxtImg
            :src="articleImage"
            alt="Image with black and yellow shapes"
            class="w-img-lg-w h-img-lg-h xs:w-img-sm-w xs:h-img-sm-h object-cover mb-6 rounded-lg"
          />
        </article>
        <span
          class="bg-primary text-dark px-3 py-1 rounded-md text-sm font-semibold"
        >
          Learning
        </span>
        <p class="text-sm">Publish 21 Dec 2023</p>
      </section>
      <section></section>
    </div>
  </div>
</template>
