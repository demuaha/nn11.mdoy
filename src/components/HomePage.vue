<template>
  <div class="app">

    <HeroSection />
    <Eventis />
    <router-view />
    <Testimonials />
    <Gallery />
    <Contacts />


  </div>
</template>

<script>
import Testimonials from './Testimonials.vue';
import Header from './Header.vue';
import HeroSection from './HeroSection.vue';
import Contacts from './Contacts.vue';
import Footer from './Footer.vue';
import Eventis from "@/components/Eventis.vue";
import Gallery from "@/components/Gallery.vue";

export default {
  components: {
    Gallery,
    Eventis,
    Header,
    HeroSection,
    Contacts,
    Footer,
    Testimonials
  },
  mounted() {
    const sections = document.querySelectorAll('.fade-section');
    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        {
          threshold: 0.1,
        }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });
  },
}
</script>

<style>
.app {
  max-width: 1920px;
  margin: 0 auto;
  box-sizing: border-box;
}
</style>