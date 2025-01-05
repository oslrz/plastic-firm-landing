<template>
  <div class="h-screen flex flex-col">
    <Header :scrollToContact="scrollToContact" :scrollToAbout="scrollToContact" />
    <Hero :scrollToContact="scrollToContact" />
    <About ref="about" />
    <Process />
    <Contacts ref="contacts" />
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
  methods: {
    scrollToContact() {
      const contactsSection = this.$refs.contacts.$el; 
      if (contactsSection) {
        contactsSection.scrollIntoView({ behavior: "smooth" });
      }
    },
    scrollToAbout() {
      const aboutSection = this.$refs.about.$el; 
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
