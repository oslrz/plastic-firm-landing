<template>
  <section class="bg-white dark:bg-gray-900 py-16" ref="contact">
    <div class="container mx-auto px-6 lg:px-8">
      <!-- Заголовок -->
      <div class="text-center mb-12">
        <h3
          class="text-sm font-semibold text-green-600 uppercase tracking-wide"
        >
          Зв'яжіться з нами
        </h3>
        <h2
          class="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl"
        >
          Ми завжди на зв'язку
        </h2>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Напишіть нам у соціальних мережах або скористайтеся контактною
          інформацією нижче.
        </p>
      </div>

      <!-- Контакти -->
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-center">
        <!-- Viber -->
        <div class="flex flex-col items-center">
          <img :src="viberIcons" alt="Viber" class="w-12 h-12 mb-4" />
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Viber
          </h3>
          <p class="text-gray-600 dark:text-gray-300">+38 (067) 188-38-19</p>
          <p class="text-gray-600 dark:text-gray-300">+38 (067) 352-79-80</p>
        </div>

        <!-- Instagram -->
        <!-- <div class="flex flex-col items-center">
          <img :src="instagramIcons" alt="Instagram" class="w-12 h-12 mb-4" />
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Instagram
          </h3>
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            class="text-blue-600 hover:underline"
          >
            @yourprofile
          </a>
        </div> -->

        <!-- Телефон -->
        <div class="flex flex-col items-center">
          <img :src="phoneIcons" alt="Phone" class="w-12 h-12 mb-4" />
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Телефон
          </h3>
          <p class="text-gray-600 dark:text-gray-300">+38 (067) 188-38-19</p>
          <p class="text-gray-600 dark:text-gray-300">+38 (067) 352-79-80</p>
        </div>

        <!-- Email -->
        <div class="flex flex-col items-center">
          <img
            :src="emailIcons"
            alt="Email"
            class="w-12 h-12 mb-4 bg-transparent"
          />
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Email
          </h3>
          <a
            href="mailto:nyridganyan@gmail.com"
            class="text-blue-600 hover:underline"
          >
          nyridganyan@gmail.com
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import emailIcons from "@/static/icons/email-icon.png";
import instagramIcons from "@/static/icons/instagram-icon.png";
import phoneIcons from "@/static/icons/phone-icon.png";
import viberIcons from "@/static/icons/viber-icon.png";

export default {
  data() {
    return {
      emailIcons,
      instagramIcons,
      phoneIcons,
      viberIcons,
    };
  },
  methods: {
    scrollToContact() {
      const contactSection = this.$refs.contact;
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>
