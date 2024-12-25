<template>
  <div class="h-screen flex flex-col">
    <Header />
    <Hero />
    <About />
    <Process />
    <Contacts />
    <Footer />
   
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import About from "~/components/About.vue";
import Process from "~/components/Process.vue";
import Contacts from "~/components/Contacts.vue";

export default {
  components: {
    Hero,
    Header,
    Footer,
    About,
    Process,
    Contacts,
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
