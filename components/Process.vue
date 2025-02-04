<template>
  <section class="bg-gray-50 md:py-16 py-6">
    <div class="container mx-auto px-6 lg:px-8">
      <!-- Заголовок -->
      <div class="text-left mb-12">
        <h2 class="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
         Процес виробництва
        </h2>
      </div>

      <!-- Карточки -->
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        <!-- Карточка 1 -->
        <div class="bg-gray-800 rounded-lg shadow-lg p-6 text-center">
          <div class="mb-4">
            <img
              :src="firstStepImage"
              alt="Крок 1"
              class="w-full md:h-[300px] h-56 object-cover rounded-lg"
            />
          </div>
          <h3 class="text-lg font-semibold text-white">
            Вибір сировини
          </h3>
          <p class="mt-2 text-gray-300">
            Для виробництва плівки ми використовуємо якісну сировину з Європи.
          </p>
        </div>

        <!-- Карточка 2 -->
        <div class="bg-gray-800 rounded-lg shadow-lg p-6 text-center">
          <div class="mb-4">
            <video
  src="/video/manufacture_video.MP4"
  controls
  class="w-full md:h-[300px] h-56 object-cover rounded-lg"
></video>
          </div>
          <h3 class="text-lg font-semibold text-white">Сучасне виробництво</h3>
          <p class="mt-2 text-gray-300">
            Використання сучасного обладнання для виготовлення плівки дозволяє отримати якісну продукцію.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import firstStepImage from "@/static/images/step-1-image.jpg";

export default {
  data() {
    return {
      firstStepImage,
      videoSrc: "/static/manufacture_video.MP4",
    };
  },
};
</script>

<style scoped>
/* Add custom styles here if needed */
</style>
