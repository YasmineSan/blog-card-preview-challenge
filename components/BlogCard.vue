<script setup lang="ts">
import { ref } from 'vue'
import { NuxtImg } from '#components'

defineProps({
  title: String,
  category: String,
  date: String,
  description: String,
  imageSrc: String,
  avatarSrc: String,
  author: String,
})

const isHovered = ref(false)
</script>

<template>
  <div
    class="relative w-full max-w-card-lg-w xs:max-w-card-sm-w"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <!-- Shadow + hover -->
    <div
      :class="[
        'absolute w-full h-full bg-dark rounded-xl left-2 top-2 z-0 transition-all duration-300',
        isHovered ? 'translate-x-1 translate-y-1 scale-102 opacity-80' : '',
      ]"
    ></div>

    <!-- Blog Card -->
    <section
      class="relative bg-white w-full rounded-xl shadow-lg p-6 z-10 border border-dark group transition-shadow duration-300 group-hover:shadow-2xl"
    >
      <!-- Article img + hidden title -->
      <article class="flex flex-col items-center">
        <h2 class="sr-only">Illustration de l'article</h2>
        <NuxtImg
          :src="imageSrc"
          alt="Illustration de l'article"
          class="w-img-lg-w h-img-lg-h xs:w-img-sm-w xs:h-img-sm-h object-cover mb-6 rounded-lg"
        />
      </article>

      <span
        class="bg-primary text-dark px-3 py-1 rounded-md text-sm font-semibold"
      >
        {{ category }}
      </span>
      <p class="text-sm py-2">{{ date }}</p>

      <!-- Main content-->
      <article>
        <h2
          class="text-lg font-extrabold cursor-pointer group-hover:text-primary transition-colors duration-75"
        >
          {{ title }}
        </h2>
        <p class="text-sm text-gray py-2">
          {{ description }}
        </p>
      </article>

      <!-- Author + title -->
      <article class="flex items-end">
        <h3 class="sr-only">Auteur</h3>
        <img
          :src="avatarSrc"
          alt="Photo de {{ author }}"
          class="size-8 rounded-full"
        />
        <p class="pl-2 font-extrabold">{{ author }}</p>
      </article>
    </section>
  </div>
</template>
