<template>
    <section class="bg-white dark:bg-gray-900 py-16">
      <div class="container mx-auto px-6 lg:px-8">
        <!-- Заголовок -->
        <div class="text-center mb-12">
          <h3 class="text-sm font-semibold text-green-600 uppercase tracking-wide">
            Зв'яжіться з нами
          </h3>
          <h2 class="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Ми завжди на зв'язку
          </h2>
          <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Напишіть нам у соціальних мережах або скористайтеся контактною інформацією нижче.
          </p>
        </div>
  
        <!-- Контакти -->
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-center">
          <!-- Viber -->
          <div class="flex flex-col items-center">
            <img src="assets/icons/viber-icon.png" alt="Viber" class="w-12 h-12 mb-4" />
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Viber</h3>
            <p class="text-gray-600 dark:text-gray-300">+38 (099) 123-45-67</p>
          </div>
  
          <!-- Instagram -->
          <div class="flex flex-col items-center">
            <img src="assets/icons/instagram-icon.png" alt="Instagram" class="w-12 h-12 mb-4" />
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Instagram</h3>
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              class="text-blue-600 hover:underline"
            >
              @yourprofile
            </a>
          </div>
  
          <!-- Телефон -->
          <div class="flex flex-col items-center">
            <img src="assets/icons/phone-icon.png" alt="Phone" class="w-12 h-12 mb-4" />
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Телефон</h3>
            <p class="text-gray-600 dark:text-gray-300">+38 (099) 123-45-67</p>
          </div>
  
          <!-- Email -->
          <div class="flex flex-col items-center">
            <img src="assets/icons/email-icon.png" alt="Email" class="w-12 h-12 mb-4 bg-transparent" />
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
            <a
              href="mailto:info@yourcompany.com"
              class="text-blue-600 hover:underline"
            >
              info@yourcompany.com
            </a>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  /* Add custom styles if needed */
  </style>