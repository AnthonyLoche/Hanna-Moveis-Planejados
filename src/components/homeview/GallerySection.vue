<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { galleryItems } from "@/data/galery";

const currentIndex = ref(0);
const isDragging = ref(false);
const startX = ref(0);
const scrollLeft = ref(0);
const containerRef = ref(null);
let autoplayInterval = null;

// Mapa para controlar quais imagens já carregaram (sem mexer no array original)
const loadedMap = ref({});

const totalItems = computed(() => galleryItems.length);

const markAsLoaded = (id) => {
  loadedMap.value[id] = true;
};

const isLoaded = (id) => {
  return !!loadedMap.value[id];
};

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
      behavior: "smooth",
    });
  }
};

// Drag
const handleDragStart = (e) => {
  isDragging.value = true;
  startX.value = e.pageX || e.touches[0].pageX;
  scrollLeft.value = containerRef.value.scrollLeft;
  stopAutoplay();

  e.preventDefault();
  containerRef.value.classList.add("dragging");
};

const handleDragMove = (e) => {
  if (!isDragging.value) return;

  e.preventDefault();
  const x = e.pageX || (e.touches && e.touches[0].pageX);
  if (!x) return;

  const walk = (x - startX.value) * 1.5;
  containerRef.value.scrollLeft = scrollLeft.value - walk;
};

const handleDragEnd = () => {
  isDragging.value = false;
  containerRef.value.classList.remove("dragging");

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
  }, 5000);
};

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
    autoplayInterval = null;
  }
};

// Scroll update index
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
    containerRef.value.addEventListener("scroll", handleScroll);
  }
});

onUnmounted(() => {
  stopAutoplay();

  if (containerRef.value) {
    containerRef.value.removeEventListener("scroll", handleScroll);
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
            <div class="image-wrapper">
              <img
                :src="item.image"
                :alt="item.alt"
                loading="lazy"
                draggable="false"
                @load="markAsLoaded(item.id)"
                :class="{ loaded: isLoaded(item.id) }"
              />

              <!-- Skeleton suspense -->
              <div v-if="!isLoaded(item.id)" class="image-skeleton"></div>
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
  user-select: none;
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

/* Controles */
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

/* Container carrossel */
.gallery-carousel-container {
  position: relative;
  overflow: hidden;
}

.gallery-carousel {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
  cursor: grab;
  padding-bottom: 20px;
  margin-bottom: 20px;
  -webkit-overflow-scrolling: touch;
}

.gallery-carousel::-webkit-scrollbar {
  display: none;
}

.gallery-carousel.dragging {
  cursor: grabbing;
  scroll-behavior: auto;
}

.gallery-carousel.dragging .gallery-item {
  pointer-events: none;
  user-select: none;
}

/* Itens */
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

/* Wrapper da imagem (IMPORTANTE pro skeleton funcionar) */
.image-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  background: #f3f3f3;
}

.dark .image-wrapper {
  background: #1b1b1b;
}

/* Imagem */
.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  user-select: none;
  -webkit-user-drag: none;

  /* suspense + fade-in */
  opacity: 0;
  transform: scale(1.03);
  transition: opacity 0.4s ease, transform 0.7s ease;
}

.gallery-item img.loaded {
  opacity: 1;
  transform: scale(1);
}

.gallery-item:hover img.loaded {
  transform: scale(1.05);
}

/* Skeleton shimmer */
.image-skeleton {
  position: absolute;
  inset: 0;
  border-radius: 16px;
  overflow: hidden;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.06) 0%,
    rgba(0, 0, 0, 0.12) 50%,
    rgba(0, 0, 0, 0.06) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.2s infinite linear;
}

.dark .image-skeleton {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.12) 50%,
    rgba(255, 255, 255, 0.05) 100%
  );
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

/* Responsividade */
@media (max-width: 639px) {
  .gallery-item {
    min-width: 280px;
  }

  .gallery-controls {
    align-self: center;
  }
}

/* Prevenir seleção em tudo */
.gallery-carousel * {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.gallery-carousel:active {
  cursor: grabbing;
}
</style>
