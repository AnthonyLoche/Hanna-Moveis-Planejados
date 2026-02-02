<script setup>
import { onMounted } from 'vue';
import Whatsapp from "vue-material-design-icons/Whatsapp.vue"
import { 
  HeaderMain, 
  FooterMain,
  HeroMain,
  AboutComp,
  SustainabilitySection,
  QualitiesSection,
  GallerySection,
  ContactSection
} from '@/components';

const handleContactSubmit = (e) => {
  e.preventDefault();
  alert('Formulário enviado! Entraremos em contato em breve.');
};

onMounted(() => {
  // Inicializa o Intersection Observer para as animações
  const elements = document.querySelectorAll('.section-animate, .card-animate');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, { threshold: 0.15 });

  elements.forEach(el => observer.observe(el));
});
</script>

<template>
  <div class="app">
    <HeaderMain />

    <div class="section-animate" data-animate="hero">
      <HeroMain />
    </div>

    <div class="section-animate" data-animate="fade-up">
      <AboutComp />
    </div>

    <div class="section-animate" data-animate="slide-left">
      <SustainabilitySection />
    </div>

    <div class="section-animate" data-animate="fade-up">
      <QualitiesSection />
    </div>

    <div class="section-animate" data-animate="zoom-in">
      <GallerySection />
    </div>

    <div class="section-animate" data-animate="fade-up">
      <ContactSection @submit="handleContactSubmit" />
    </div>

    <FooterMain />
    
    <a href="https://wa.me/5547000000000" target="_blank" class="whatsapp-float button-animate">
      <Whatsapp class="icon-animate" />
      <span class="whatsapp-tooltip">Orçamento via WhatsApp</span>
    </a>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  font-family: "Raleway", sans-serif;
  background: #ffffff;
  color: #333333;
  transition: background-color 0.3s, color 0.3s;
  scroll-behavior: smooth;
  line-height: 1.6;
}

span {
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  width: 90%;
  max-width: 85%;
  margin: 0 auto;
  padding: 0 24px;
}

/* WhatsApp Float */
.whatsapp-float {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 50;
  width: 4rem;
  height: 4rem;
  background: #25d366;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s;
  text-decoration: none;
}

.whatsapp-float:hover {
  transform: scale(1.1);
}

.whatsapp-tooltip {
  position: absolute;
  right: 100%;
  margin-right: 1rem;
  background-color: white;
  color: #292929;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.whatsapp-float:hover .whatsapp-tooltip {
  opacity: 1;
}
</style>