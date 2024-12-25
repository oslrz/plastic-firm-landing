<template>
  <section class="">
    <div
      class="container mx-auto flex flex-row items-center py-16 px-4 sm:px-6 lg:px-8"
    >
      <div class="flex flex-col">
        <h1 class="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Якісна плівка для будь-яких потреб
        </h1>
        <p class="mt-4 text-lg">
          Виготовлення та продаж плівки для упаковки, будівництва та сільського
          господарства. Надійність, доступні ціни та швидка доставка.
        </p>
        <div class="mt-6">
          <a
            href="#products"
            class="inline-block px-6 py-3 text-white text-lg font-medium bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Звязатися з нами
          </a>
        </div>
      </div>
      <div class="relative w-1/2 h-auto">
        <img
          :src="heroImage"
          alt="Hero image"
          class="object-cover w-full h-full mask-gradient"
        />
      </div>
    </div>
  </section>
</template>

<script>
import heroImage from "@/static/icons/test.png";

export default {
  data() {
    return {
      heroImage,
    };
  },
};
</script>

<style scoped>
.mask-gradient {
  mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 0) 100%
  );
  -webkit-mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 0) 100%
  );
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}
</style>
