<template>
  <section class="bg-gray-50 md:py-16 py-6">
    <div class="container mx-auto px-6 lg:px-8">
      <!-- Заголовок -->
      <div class="text-left mb-12">
        <h3
          class="text-sm font-semibold text-green-600 uppercase tracking-wide"
        >
          процес виробництва
        </h3>
        <h2 class="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Як ми створюємо якісну плівку
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
            Вибір якісної сировини
          </h3>
          <p class="mt-2 text-gray-300">
            Ми ретельно обираємо матеріали, щоб забезпечити високу якість
            плівки. Сировина відповідає міжнародним стандартам.
          </p>
        </div>

        <!-- Карточка 2 -->
        <div class="bg-gray-800 rounded-lg shadow-lg p-6 text-center">
          <div class="mb-4">
            <img
              :src="secondStepImage"
              alt="Крок 2"
              class="w-full md:h-[300px] h-56 object-cover rounded-lg"
            />
          </div>
          <h3 class="text-lg font-semibold text-white">Сучасне виробництво</h3>
          <p class="mt-2 text-gray-300">
            На нашому заводі використовуються сучасні технології, що дозволяють
            створювати плівку з оптимальними характеристиками.
          </p>
        </div>

        <!-- Карточка 3 -->
        <!-- <div class="bg-gray-800 rounded-lg shadow-lg p-6 text-center">
          <div class="mb-4">
            <img
              :src="thirdStepImage"
              alt="Крок 3"
              class="w-full h-56 object-cover rounded-lg"
            />
          </div>
          <h3 class="text-lg font-semibold text-white">Контроль якості</h3>
          <p class="mt-2 text-gray-300">
            Кожен етап виробництва проходить строгий контроль якості, щоб наші
            клієнти отримували лише найкращий продукт.
          </p>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
import firstStepImage from "@/static/images/step-1-image.jpg";
import secondStepImage from "@/static/images/step-2-image.jpg";
import thirdStepImage from "@/static/images/step-3-image.jpg";

export default {
  data() {
    return {
      firstStepImage,
      secondStepImage,
      thirdStepImage,
    };
  },
};
</script>

<style scoped>
/* Add custom styles here if needed */
</style>
