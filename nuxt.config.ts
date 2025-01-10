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
        { property: 'og:title', content: 'Виготовлення та реалізація плівки в Мельниці-Подільській' },
        { property: 'og:description', content: 'Пропонуємо якісну плівку для сільського господарства, пакування та будівництва. Забезпечуємо доступні ціни, сучасне обладнання та швидку доставку.' },
        { property: 'og:image', content: '/images/photo_4.jpg' },
        { property: 'og:url', content: 'https://plivkaplivka.com.ua/' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Плівка в Мельниці-Подільській' },
        { property: 'og:locale', content: 'uk_UA' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Виготовлення та реалізація плівки в Мельниці-Подільській' },
        { name: 'twitter:description', content: 'Пропонуємо якісну плівку для сільського господарства, пакування та будівництва. Забезпечуємо доступні ціни, сучасне обладнання та швидку доставку.' },
        { name: 'twitter:image', content: '/images/photo_4.jpg' },
        { name: 'twitter:url', content: 'https://plivkaplivka.com.ua/' },
        { name: 'keywords',  content: 'плівка, плівка для сільського господарства, пакувальна плівка, будівельна плівка, поліетиленова плівка, плівка для теплиць, плівка для пакування, чорна плівка для мульчування, прозора плівка, плівка Мельниця-Подільська, плівка Тернопільська область, плівка Україна, агроплівка, купити плівку для теплиць, виробництво плівки в Україні, упаковка для товарів, доставка плівки по Україні, термоусадочна плівка' },
        { name: 'author', content: 'Плівка в Мельниці-Подільській' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'canonical', href: 'https://plivkaplivka.com.ua/' },
        { rel: 'icon', type: 'image/png', href: '/favicon.ico' },
      ],
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Плівка в Мельниці-Подільській",
            "url": "https://plivkaplivka.com.ua/",
            "logo": "https://plivkaplivka.com.ua/images/logo.jpg",
            "description": "Наша компанія понад 17 років займається виготовленням та реалізацією плівки для сільського господарства, пакування та будівництва.",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+380XXXXXXXXX",
              "contactType": "customer service",
              "areaServed": "UA",
              "availableLanguage": "Ukrainian"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "вул. Центральна, 123",
              "addressLocality": "Мельниця-Подільська",
              "addressRegion": "Тернопільська область",
              "postalCode": "12345",
              "addressCountry": "UA"
            }
          }),
        },
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