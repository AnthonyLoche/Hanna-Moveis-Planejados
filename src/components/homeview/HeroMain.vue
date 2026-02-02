<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Facebook from 'vue-material-design-icons/Facebook.vue';
import Instagram from 'vue-material-design-icons/Instagram.vue';
import Whatsapp from 'vue-material-design-icons/Whatsapp.vue';

const currentImageIndex = ref(0);
let intervalId = null;

const images = [
  new URL('@/assets/images/hero/img1.png', import.meta.url).href,
  new URL('@/assets/images/hero/img2.png', import.meta.url).href,
  new URL('@/assets/images/hero/img3.png', import.meta.url).href,
  new URL('@/assets/images/hero/img4.png', import.meta.url).href,
];

const startImageRotation = () => {
  intervalId = setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
  }, 5000); // Muda a cada 5 segundos
};

const stopImageRotation = () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
};

onMounted(() => {
  startImageRotation();
});

onUnmounted(() => {
  stopImageRotation();
});
</script>

<template>
  <section id="inicio" class="hero">
    <!-- Container para as imagens de background -->
    <div class="hero-backgrounds">
      <div 
        v-for="(image, index) in images" 
        :key="index"
        :class="['hero-bg-image', { active: currentImageIndex === index }]"
        :style="{ backgroundImage: `url(${image})` }"
      ></div>
    </div>
    
    <div class="container">
      <div class="hero-content">
        <div class="hero-tag">Bem-vindo à Hanna Móveis</div>
        <h1 class="hero-title">
          Sua felicidade <br /><div class="highlight">nos motiva!</div>
        </h1>
        <p class="hero-text">
          Móveis planejados que unem o requinte do design contemporâneo à consciência ecológica.
          Qualidade garantida pelo Duran Group para transformar seu lar.
        </p>
        
        <div class="hero-buttons">
          <a href="#contato" class="btn-primary">Começar meu Projeto</a>
          <a href="#sobre" class="btn-secondary">Conheça nossa história</a>
        </div>

        <!-- Ícones de redes sociais -->
        <div class="hero-social-icons">
          <a 
            href="https://facebook.com/suapagina" 
            target="_blank" 
            class="social-icon"
            aria-label="Facebook"
          >
            <Facebook :size="24" />
          </a>
          <a 
            href="https://instagram.com/seuinstagram" 
            target="_blank" 
            class="social-icon"
            aria-label="Instagram"
          >
            <Instagram :size="24" />
          </a>
          <a 
            href="https://wa.me/5547000000000" 
            target="_blank" 
            class="social-icon"
            aria-label="WhatsApp"
          >
            <Whatsapp :size="24" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 80px;
  position: relative;
  overflow: hidden;
}

.container {
  width: 95%;
  margin: auto;
  position: relative;
  z-index: 2;
}

.hero-backgrounds {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero-bg-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 1.5s ease-in-out;
}

.hero-bg-image.active {
  opacity: 1;
}

/* Overlay sobre as imagens para melhor legibilidade do texto */
.hero-backgrounds::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.7) 0%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(255, 255, 255, 0.3) 100%
  );
  z-index: 1;
}

.dark .hero-backgrounds::after {
  background: linear-gradient(
    to bottom,
    rgba(18, 18, 18, 0.8) 0%,
    rgba(18, 18, 18, 0.6) 50%,
    rgba(18, 18, 18, 0.4) 100%
  );
}

.hero-content {
  max-width: 672px;
}

.hero-tag {
  color: #e3350d;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 14px;
  margin-bottom: 16px;
  display: block;
}

.hero-title {
  font-family: 'Playfair Display', serif;
  font-size: 56px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 24px;
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 72px;
  }
}

.highlight {
  color: #e3350d;
  font-style: italic;
}

.hero-text {
  font-size: 20px;
  color: #666;
  margin-bottom: 40px;
  line-height: 1.7;
}

.dark .hero-text {
  color: #999;
}

.hero-buttons {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;
}

@media (min-width: 640px) {
  .hero-buttons {
    flex-direction: row;
  }
}

/* Ícones de redes sociais */
.hero-social-icons {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 30px;
}

@media (min-width: 768px) {
  .hero-social-icons {
    justify-content: flex-start;
  }
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.social-icon:hover {
  transform: translateY(-3px);
  background: #e3350d;
  color: white;
  box-shadow: 0 4px 12px rgba(227, 53, 13, 0.3);
}

.dark .social-icon {
  background: rgba(30, 30, 30, 0.9);
  color: #e5e5e5;
}

.dark .social-icon:hover {
  background: #e3350d;
  color: white;
}

/* Estilos específicos para cada ícone */
.social-icon.facebook:hover {
  background: #1877F2;
}

.social-icon.instagram:hover {
  background: #E4405F;
}

.social-icon.whatsapp:hover {
  background: #25D366;
}

.btn-primary {
  background: #e3350d;
  color: white;
  padding: 16px 32px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 700;
  text-align: center;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  display: inline-block;
}

.btn-primary:hover {
  background: #c72d0a;
  transform: translateY(-2px);
}

.btn-secondary {
  background: white;
  color: #333;
  padding: 16px 32px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 700;
  text-align: center;
  border: 1px solid #ddd;
  transition: all 0.3s;
  display: inline-block;
}

.btn-secondary:hover {
  background: #f5f5f5;
}

.dark .btn-secondary {
  background: #1f1f1f;
  color: #e5e5e5;
  border-color: #333;
}

.dark .btn-secondary:hover {
  background: #2a2a2a;
}

/* Indicadores de progresso (opcional) */
.hero-indicators {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 3;
}

.hero-indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s;
}

span{
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-indicator.active {
  background: #e3350d;
  transform: scale(1.2);
}

.dark .hero-indicator {
  background: rgba(0, 0, 0, 0.5);
}
</style>