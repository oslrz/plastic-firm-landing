// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    baseURL: '/', 
    head: {
      title: 'Виготовлення та реалізація плівки в Мельниці-Подільській | Якісна плівка для сільського господарства, пакування та будівництва',
      meta: [
        {
          name: 'description',
          content: 'Наша компанія понад 17 років займається виготовленням та реалізацією плівки для сільського господарства, пакування та будівництва. Забезпечуємо якість завдяки сучасному обладнанню та швидку доставку власним транспортом.',
        },
        {
          property: 'og:title',
          content: 'Виготовлення та реалізація плівки в Мельниці-Подільській',
        },
        {
          property: 'og:description',
          content: 'Пропонуємо якісну плівку для сільського господарства, пакування та будівництва. Забезпечуємо доступні ціни, сучасне обладнання та швидку доставку.',
        },
        {
          property: 'og:image',
          content: '/images/зрщещ_4.jpg', // Шлях до зображення у папці static
        },
        {
          property: 'og:url',
          content: 'https://plivkaplivka.com.ua/',
        },
        { property: 'og:type', content: 'website' },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:title',
          content: 'Виготовлення та реалізація плівки в Мельниці-Подільській',
        },
        {
          name: 'twitter:description',
          content: 'Пропонуємо якісну плівку для сільського господарства, пакування та будівництва. Забезпечуємо доступні ціни, сучасне обладнання та швидку доставку.',
        },
        {
          name: 'twitter:image',
          content: '/images/зрщещ_4.jpg', // Шлях до зображення у папці static
        },
        {
          name: 'keywords',
          content: 'плівка, сільське господарство, пакування, будівництво, Тернопільська область, Мельниця-Подільська',
        },
        { name: 'author', content: 'Назва вашої компанії' },
      ],
      link: [
        { rel: 'canonical', href: 'https://plivkaplivka.com.ua/' },
      ],
    },
  },
  
  css: ['@/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
