<template>
  <section class="bg-white md:py-8" ref="about">
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
          На ринку з 2008 року
        </h2>
        <p class="mt-4 text-lg text-gray-600">
          Наша компанія знаходиться в Мельниці-Подільські Тернопільської
          області, та понад 17 років займається виготовленням та реалізацією
          плівки для сільського господарства, пакування та будівництва. Якість
          забезпечується сучасним обладнанням, завдяки чому ми можемо
          запропонувати клієнтам якісну продукцію за доступними цінами. Доставку
          продукції здійснюємо власним транспортом.
        </p>
      </div>

      <div class="md:w-1/2 w-full mt-8 md:mt-0 px-6 md:h-[400px] h-[250px] relative">
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
          <swiper-slide>
            <img
              :src="photo8"
              alt="Photo 8"
              class="h-full w-full object-cover"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              :src="photo9"
              alt="Photo 9"
              class="h-full w-full object-cover"
            />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
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
import photo8 from "@/static/images/photo_8.jpg";
import photo9 from "@/static/images/photo_9.jpg";

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
      photo8,
      photo9,
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
        ? [Navigation, Pagination, Scrollbar, A11y, Autoplay]
        : [Pagination, Scrollbar, A11y, Autoplay];
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
