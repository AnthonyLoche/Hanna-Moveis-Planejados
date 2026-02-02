<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

const currentIndex = ref(0);
const isDragging = ref(false);
const startX = ref(0);
const scrollLeft = ref(0);
const containerRef = ref(null);
let autoplayInterval = null;

// Array de projetos da galeria
const galleryItems = [
  {
    id: 1,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdhhIUOms8HGCHT1C2xd7sBV6o1XdHA4IVE6BjO8XQPXVEk2Bd-JBDMd7wyHx-6cQaCxe75GM_TC2dCCzPD6JUn-6KLghzowxM-FUTZlPajU7603v-buTRCiVLntSW0NVfSd8JJ3jsIlfJfXwKz5QM3CqP4-6MT9NhhTON4KYmtFOQKMz4hJwGhdxtt54eCKyxNU5ctxBbfM6iuX3gOW-jW8kzAseCaNbdVB4UsdqLXZbl_YsY-ebcNOqcR7w5VjyPGx-Xv83aV34",
    alt: "Cozinha Minimalista",
    tag: "Cozinha Gourmet",
    title: "Minimalismo Funcional",
    description: "Linhas limpas e acabamento em carvalho natural."
  },
  {
    id: 2,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuv0_MHae8MqAN3YwqEkBc4fhXG-_RvgCmtqonwE-tYv82wi5zrI6LLnP59Ss1DYGJ4Kkcb2kDwUkwBDHW5pNpSaE25Y2MgX_9Wq5z8SrFfz5SPM0o7IRQnqn9n6WLuO0H6Yy93LXae-yzLoZ5VLI0_1L_cYkpzhDPvsMk0GiTfrAeAGbcW4Co23K9ffnG6_PDa3W6nAwoLogT5oqixxh41F1hD5S_nPPo4rZSZu46k4TNOAB5yNiPAsW27ybSQTPuK16E0H2_Mc0",
    alt: "Living Sofisticado",
    tag: "Living Room",
    title: "Home Theater Premium",
    description: "Painéis ripados com iluminação em LED embutida."
  },
  {
    id: 3,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1GpOFeXChytlhmo6wpLiM3_8gZgVh8R8OiMvY9bMqu2vBPvU4K4tqNEVoVAcaguQMqt9IM1Muz1Ij4EwRAbVz4qZsxYRnoUHyIRZtFsu9qnGn9nNSzg1N41dd3TwxyKXjuPsw9TRGp_W7z8R0FjtP-xJDCEjftpt5Y9iTY4Eud6WwrNfCYVRjq79l5Aaa5GlDfBnmb37TACEWepzqweRo0GWMY8GBe1Z_r0psdNiSdkOmrwkqj_V3F4TUc7nd6o5a45wt_UQ7lXw",
    alt: "Dormitório",
    tag: "Suíte Master",
    title: "Refúgio Contemporâneo",
    description: "Closet integrado e cabeceira estofada sob medida."
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2058&auto=format&fit=crop",
    alt: "Escritório Moderno",
    tag: "Home Office",
    title: "Escritório Produtivo",
    description: "Design ergonômico com iluminação natural."
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=2070&auto=format&fit=crop",
    alt: "Sala de Estar",
    tag: "Living Room",
    title: "Conforto Elegante",
    description: "Móveis sob medida e decoração minimalista."
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=2070&auto=format&fit=crop",
    alt: "Área Gourmet",
    tag: "Área Externa",
    title: "Entretenimento ao Ar Livre",
    description: "Móveis resistentes para área externa."
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1519643381401-22c77e60520e?q=80&w=2070&auto=format&fit=crop",
    alt: "Banheiro Luxuoso",
    tag: "Banheiro",
    title: "Spa Residencial",
    description: "Mobiliário premium para banheiros."
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
    alt: "Quarto Infantil",
    tag: "Quarto Infantil",
    title: "Mundo da Imaginação",
    description: "Móveis lúdicos e seguros para crianças."
  }
];

const totalItems = computed(() => galleryItems.length);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % totalItems.value;
  updateScrollPosition();
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + totalItems.value) % totalItems.value;
  updateScrollPosition();
};

const updateScrollPosition = () => {
  if (containerRef.value) {
    const container = containerRef.value;
    const itemWidth = container.children[0]?.offsetWidth || 0;
    const gap = 24;
    const scrollPosition = currentIndex.value * (itemWidth + gap);
    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  }
};

// Funções de drag (arrastar) - CORRIGIDAS
const handleDragStart = (e) => {
  isDragging.value = true;
  startX.value = e.pageX || e.touches[0].pageX;
  scrollLeft.value = containerRef.value.scrollLeft;
  stopAutoplay();
  
  // Prevenir seleção de texto durante o drag
  e.preventDefault();
  
  // Adicionar classe para mudar o cursor
  containerRef.value.classList.add('dragging');
};

const handleDragMove = (e) => {
  if (!isDragging.value) return;
  
  e.preventDefault();
  const x = e.pageX || (e.touches && e.touches[0].pageX);
  if (!x) return;
  
  const walk = (x - startX.value) * 1.5; // Velocidade do arrasto
  containerRef.value.scrollLeft = scrollLeft.value - walk;
};

const handleDragEnd = () => {
  isDragging.value = false;
  containerRef.value.classList.remove('dragging');
  
  // Atualiza o índice baseado na posição do scroll
  if (containerRef.value) {
    const container = containerRef.value;
    const itemWidth = container.children[0]?.offsetWidth || 0;
    const gap = 24;
    const scrollPos = container.scrollLeft;
    const newIndex = Math.round(scrollPos / (itemWidth + gap));
    currentIndex.value = Math.max(0, Math.min(newIndex, totalItems.value - 1));
  }
  
  startAutoplay();
};

// Prevenir seleção de texto ao clicar
const preventTextSelection = (e) => {
  if (isDragging.value) {
    e.preventDefault();
  }
};

// Autoplay
const startAutoplay = () => {
  if (autoplayInterval) clearInterval(autoplayInterval);
  autoplayInterval = setInterval(() => {
    nextSlide();
  }, 5000); // Muda a cada 5 segundos
};

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
    autoplayInterval = null;
  }
};

// Observar mudanças no scroll
const handleScroll = () => {
  if (containerRef.value && !isDragging.value) {
    const container = containerRef.value;
    const itemWidth = container.children[0]?.offsetWidth || 0;
    const gap = 24;
    const scrollPos = container.scrollLeft;
    const newIndex = Math.round(scrollPos / (itemWidth + gap));
    currentIndex.value = Math.max(0, Math.min(newIndex, totalItems.value - 1));
  }
};

onMounted(() => {
  startAutoplay();
  if (containerRef.value) {
    containerRef.value.addEventListener('scroll', handleScroll);
  }
});

onUnmounted(() => {
  stopAutoplay();
  if (containerRef.value) {
    containerRef.value.removeEventListener('scroll', handleScroll);
  }
});
</script>

<template>
  <section id="galeria" class="gallery">
    <div class="container">
      <div class="gallery-header">
        <div>
          <h2 class="section-title">Nossos Projetos</h2>
          <p class="gallery-subtitle">
            Ambientes reais transformados em sonhos realizados com marcenaria premium.
          </p>
        </div>
        <div class="gallery-controls">
          <button 
            @click="prevSlide" 
            class="gallery-control prev"
            aria-label="Projeto anterior"
          >
            ‹
          </button>
          <button 
            @click="nextSlide" 
            class="gallery-control next"
            aria-label="Próximo projeto"
          >
            ›
          </button>
        </div>
      </div>
      
      <div class="gallery-carousel-container">
        <div 
          ref="containerRef"
          class="gallery-carousel"
          @mousedown="handleDragStart"
          @mousemove="handleDragMove"
          @mouseup="handleDragEnd"
          @mouseleave="handleDragEnd"
          @touchstart="handleDragStart"
          @touchmove="handleDragMove"
          @touchend="handleDragEnd"
          @selectstart="preventTextSelection"
          @dragstart="(e) => e.preventDefault()"
        >
          <div 
            v-for="item in galleryItems" 
            :key="item.id"
            class="gallery-item"
            @mousedown.prevent
          >
            <img
              :src="item.image"
              :alt="item.alt"
              draggable="false"
            />
            <div class="gallery-overlay">
              <div class="gallery-tag">{{ item.tag }}</div>
              <h4 class="gallery-title">{{ item.title }}</h4>
              <p class="gallery-description">{{ item.description }}</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery {
  padding: 96px 0;
  background: white;
  position: relative;
  user-select: none; /* Prevenir seleção de texto */
}

.dark .gallery {
  background: #121212;
}

.container {
  width: 95%;
  margin: auto;
}

.gallery-header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 48px;
}

@media (min-width: 768px) {
  .gallery-header {
    flex-direction: row;
    align-items: flex-end;
  }
}

.gallery-subtitle {
  color: #999;
  margin-top: 8px;
  max-width: 600px;
}

/* Controles do carrossel */
.gallery-controls {
  display: flex;
  gap: 12px;
  margin-top: 16px;
}

@media (min-width: 768px) {
  .gallery-controls {
    margin-top: 0;
  }
}

.gallery-control {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px solid #e3350d;
  background: white;
  color: #e3350d;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.gallery-control:hover {
  background: #e3350d;
  color: white;
  transform: scale(1.1);
}

.dark .gallery-control {
  background: #1f1f1f;
  border-color: #e3350d;
  color: #e3350d;
}

.dark .gallery-control:hover {
  background: #e3350d;
  color: white;
}

/* Container do carrossel */
.gallery-carousel-container {
  position: relative;
  overflow: hidden;
}

.gallery-carousel {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  cursor: grab;
  padding-bottom: 20px;
  margin-bottom: 20px;
  -webkit-overflow-scrolling: touch; /* Scroll suave no iOS */
}

.gallery-carousel::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}

.gallery-carousel.dragging {
  cursor: grabbing;
  scroll-behavior: auto;
}

.gallery-carousel.dragging .gallery-item {
  pointer-events: none;
  user-select: none;
}

/* Itens do carrossel */
.gallery-item {
  flex: 0 0 calc(100% - 20px);
  min-width: 300px;
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  aspect-ratio: 4/5;
  cursor: pointer;
  transition: transform 0.3s;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

@media (min-width: 640px) {
  .gallery-item {
    flex: 0 0 calc(50% - 12px);
  }
}

@media (min-width: 1024px) {
  .gallery-item {
    flex: 0 0 calc(33.333% - 16px);
  }
}

@media (min-width: 1280px) {
  .gallery-item {
    flex: 0 0 calc(25% - 18px);
  }
}

.gallery-item:hover {
  transform: translateY(-8px);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s;
  pointer-events: none; /* Prevenir drag da imagem */
  user-select: none;
  -webkit-user-drag: none;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.gallery-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(51, 51, 51, 0.95) 0%,
    rgba(51, 51, 51, 0.7) 40%,
    rgba(51, 51, 51, 0.3) 70%,
    transparent 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 32px;
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none; /* Não interferir no drag */
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-tag {
  color: #e3350d;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 8px;
  user-select: none;
}

.gallery-title {
  color: white;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
  line-height: 1.3;
  user-select: none;
}

@media (min-width: 768px) {
  .gallery-title {
    font-size: 24px;
  }
}

.gallery-description {
  color: #e5e5e5;
  font-size: 14px;
  line-height: 1.5;
  opacity: 0.9;
  user-select: none;
}

/* Indicadores */
.gallery-indicators {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 24px;
  flex-wrap: wrap;
}

.gallery-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.2);
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  padding: 0;
  user-select: none;
}

.gallery-indicator:hover {
  background: rgba(227, 53, 13, 0.7);
  transform: scale(1.2);
}

.gallery-indicator.active {
  background: #e3350d;
  transform: scale(1.3);
}

.dark .gallery-indicator {
  background: rgba(255, 255, 255, 0.2);
}

.dark .gallery-indicator.active {
  background: #e3350d;
}

/* Responsividade adicional */
@media (max-width: 639px) {
  .gallery-item {
    min-width: 280px;
  }
  
  .gallery-controls {
    align-self: center;
  }
  
  .gallery-title {
    font-size: 18px;
  }
  
  .gallery-description {
    font-size: 13px;
  }
}

/* Prevenir seleção de texto em todos os elementos */
.gallery-carousel * {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Estilo específico para quando estiver arrastando */
.gallery-carousel:active {
  cursor: grabbing;
}
</style>