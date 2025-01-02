<template>
  <section class="bg-white py-16">
    <div
      class="container mx-auto flex flex-col md:flex-row-reverse items-center lg:items-start"
    >
      <div class="lg:w-1/2 text-center lg:text-left px-6">
        <h3
          class="text-sm font-semibold text-green-600 uppercase tracking-wide"
        >
          Багаторічний досвід
        </h3>
        <h2 class="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          На ринку з 2006 року
        </h2>
        <p class="mt-4 text-lg text-gray-600">
          Наша компанія вже понад 15 років займається виготовленням та продажем
          плівки для упаковки, будівництва та сільського господарства. Ми
          поєднуємо сучасні технології з відповідальним підходом, щоб
          запропонувати клієнтам якісну продукцію за доступними цінами.
        </p>
      </div>

      <div class="md:w-1/2 w-full mt-8 md:mt-0 px-6 h-[300px] relative">
        <swiper
          class="mySwiper h-full relative"
          :modules="activeModules"
          :navigation="isDesktop"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          pagination
          scrollbar
        >
          <swiper-slide>
            <img
              :src="photo1"
              alt="Photo 1"
              class="h-full w-full object-cover"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              :src="photo2"
              alt="Photo 2"
              class="h-full w-full object-cover"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              :src="photo3"
              alt="Photo 3"
              class="h-full w-full object-cover"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              :src="photo4"
              alt="Photo 4"
              class="h-full w-full object-cover"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              :src="photo5"
              alt="Photo 5"
              class="h-full w-full object-cover"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              :src="photo6"
              alt="Photo 6"
              class="h-full w-full object-cover"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              :src="photo7"
              alt="Photo 7"
              class="h-full w-full object-cover"
            />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import photo1 from "@/static/images/photo_1.jpg";
import photo2 from "@/static/images/photo_2.jpg";
import photo3 from "@/static/images/photo_3.jpg";
import photo4 from "@/static/images/photo_4.jpg";
import photo5 from "@/static/images/photo_5.jpg";
import photo6 from "@/static/images/photo_6.jpg";
import photo7 from "@/static/images/photo_7.jpg";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      photo1,
      photo2,
      photo3,
      photo4,
      photo5,
      photo6,
      photo7,
      isDesktop: true,
    };
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
  computed: {
    activeModules() {
      return this.isDesktop
        ? [Navigation, Pagination, Scrollbar, A11y]
        : [Pagination, Scrollbar, A11y];
    },
  },
  mounted() {
    if (typeof window !== "undefined") {
      this.updateScreenSize(); // Ініціалізація
      window.addEventListener("resize", this.updateScreenSize);
    }
  },
  beforeUnmount() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.updateScreenSize);
    }
  },
  methods: {
    updateScreenSize() {
      this.isDesktop = window.innerWidth >= 768;
    },
  },
};
</script>

<style scoped></style>
