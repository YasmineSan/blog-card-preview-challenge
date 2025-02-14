<script setup lang="ts">
import { NuxtImg } from '#components'
import articleImage from 'public/images/illustration-article.svg'
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
        <p class="text-sm py-2">Publish 21 Dec 2023</p>
        <article>
          <h1 class="text-lg font-extrabold">HTML & CSS foundations</h1>
          <p class="text-sm text-gray py-2">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </article>
        <article class="flex items-end">
          <img
            src="/public/images/greg-avatar.webp"
            alt="avatar of Greg"
            class="size-8"
          />
          <p class="pl-2 font-extrabold">Greg Hooper</p>
        </article>
      </section>
    </div>
  </div>
</template>
