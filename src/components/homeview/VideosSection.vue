<template>
  <section class="videos-section">
    <div class="container">
      <h3 class="section-title" :class="{ 'hidden-title': fullscreenVideo !== null }">
        Bastidores & Resultados
      </h3>

      <!-- Controles fullscreen -->
      <div v-if="fullscreenVideo !== null" class="fullscreen-controls">
        <div class="back-button-container">
          <button class="back-button" @click="closeFullscreen">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
            Voltar para vídeos
          </button>
        </div>
      </div>

      <div class="videos-grid" :class="{ 'fullscreen-mode': fullscreenVideo !== null }">
        <div v-for="(video, index) in selectedVideos" :key="index" class="video-card" :class="{
          'fullscreen-active': fullscreenVideo === index,
          'fullscreen-hidden':
            fullscreenVideo !== null && fullscreenVideo !== index
        }">
          <div class="video-wrapper">
            <!-- Thumbnail -->
            <div v-if="fullscreenVideo !== index" class="video-thumbnail"
              :style="{ backgroundImage: `url(${getThumbnailUrl(video.id)})` }">
              <div class="thumbnail-overlay">
                <div class="play-button" @click.stop="openFullscreen(index)">
                  <PlayCircle :size="48" fillColor="#fff" />
                </div>
                <div class="video-title">{{ video.title }}</div>
              </div>
            </div>

            <!-- Iframe -->
            <iframe v-if="fullscreenVideo === index" class="youtube-short fullscreen-video"
              :src="`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1&playsinline=1`"
              :title="video.title" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </div>

          <!-- CTA ABAIXO DO VÍDEO -->
          <div v-if="fullscreenVideo === index" class="fullscreen-cta fullscreen-cta-below cta-visible">
            <a href="#contato" class="budget-button" @click="closeFullscreen">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 8V16M8 12H16M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              Quero Meu Orçamento Agora
            </a>
          </div>
        </div>
      </div>

      <!-- CTA fora do fullscreen -->
      <div class="cta-container">
        <a href="#contato" class="cta-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 8V16M8 12H16M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          Quero Meu Orçamento Agora
        </a>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import PlayCircle from 'vue-material-design-icons/PlayCircle.vue'

const allVideos = [
  {
    id: "nteReyvWkHQ",
    title: "Cozinha Planejada 2025",
  },
  {
    id: "VaGQcnOoCh4",
    title: "Sonho Realizado",
  },
  {
    id: "kjzlCI-6P_8",
    title: "Acabamento Premium",
  },
  {
    id: "oCZ9U_oSI-o",
    title: "Projeto Personalizado",
  },
  {
    id: "RFw_Q9XmWz0",
    title: "Tour Showroom",
  },
  {
    id: "cmsA7IRvPi8",
    title: "Marcenaria Iluminada",
  },
  {
    id: "NSaxU4Qcug4",
    title: "Arte no Design",
  },
  {
    id: "ULFUVEbLoWo",
    title: "Materializar Sonhos",
  },
];

const selectedVideos = ref([])
const fullscreenVideo = ref(null)

const getThumbnailUrl = (videoId) => {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
}

const initializeVideos = (videos) => {
  return videos.map(video => ({
    ...video,
    playing: false,
    loaded: false
  }))
}

const selectVideos = () => {
  const shuffled = [...allVideos]
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

  const isMobile = window.innerWidth < 1024;
  const numVideos = isMobile ? 2 : 4;

  selectedVideos.value = initializeVideos(shuffled.slice(0, numVideos))

  // Fecha qualquer vídeo em fullscreen ao redimensionar
  fullscreenVideo.value = null
}

const openFullscreen = (index) => {
  fullscreenVideo.value = index
  // Scroll suave para o topo da seção quando abrir fullscreen
  setTimeout(() => {
    document.querySelector('.videos-section').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }, 100)
}

const closeFullscreen = () => {
  fullscreenVideo.value = null
}

const handleResize = () => {
  selectVideos()
}

// Fecha o fullscreen ao pressionar ESC
const handleKeydown = (event) => {
  if (event.key === 'Escape' && fullscreenVideo.value !== null) {
    closeFullscreen()
  }
}

onMounted(() => {
  selectVideos()
  window.addEventListener('resize', handleResize)
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.videos-section {
  padding: 5rem 0;
  background-color: #f8f5f5;
  width: 85%;
  margin: auto;
  position: relative;
}

.section-title {
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
  transition: opacity 0.3s ease;
}

.section-title.hidden-title {
  opacity: 0;
  height: 0;
  margin: 0;
  overflow: hidden;
}

/* Controles do modo fullscreen */
.fullscreen-controls {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Botão de voltar */
.back-button-container {
  display: flex;
  justify-content: center;
}

.back-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #e3350d;
  color: white;
  border: none;
  border-radius: 2rem;
  font-weight: 600;
  font-size: .5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(139, 0, 0, 0.2);
}

.back-button:hover {
  background-color: #8c0303;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 0, 0, 0.3);
}

/* Botão de orçamento no modo fullscreen */
.fullscreen-cta {
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.5s ease 0.3s;
}

.fullscreen-cta.cta-visible {
  opacity: 1;
  transform: translateY(0);
}

.budget-button {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #E3350D 0%, #c12c0b 100%);
  color: white;
  text-decoration: none;
  border-radius: 2rem;
  font-weight: 700;
  font-size: 1.125rem;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(227, 53, 13, 0.3);
  white-space: nowrap;
}

.budget-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(227, 53, 13, 0.4);
  background: linear-gradient(135deg, #c12c0b 0%, #a02409 100%);
}

.budget-icon {
  flex-shrink: 0;
}

.videos-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  justify-items: center;
  transition: all 0.3s ease;
}

/* Modo fullscreen ativo */
.videos-grid.fullscreen-mode {
  grid-template-columns: 1fr;
  gap: 0;
}

.video-card {
  aspect-ratio: 9/16;
  background-color: #292929;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
  max-width: 100%;
}

span {
  display: flex;
  justify-content: center;
  align-items: center;
}

.video-card.fullscreen-active {
  aspect-ratio: 9/16;
  max-width: 100%;
  width: 100%;
  height: auto;
  max-height: 70vh;
  /* Reduzido para dar espaço ao botão */
  z-index: 100;
  position: relative;
  cursor: default;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  margin-bottom: 1rem;
}

.video-card.fullscreen-hidden {
  opacity: 0;
  visibility: hidden;
  height: 0;
  transform: scale(0.8);
  pointer-events: none;
}

.video-card:hover:not(.fullscreen-active) {
  transform: translateY(-5px);
}

.video-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #000;
}

.video-thumbnail {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
}

.video-thumbnail::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7));
  z-index: 1;
}

.thumbnail-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  z-index: 2;
  padding: 1rem;
  text-align: center;
}

.play-button {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #e3350d;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s, background-color 0.3s;
  cursor: pointer;
  z-index: 3;
}

.play-button:hover {
  transform: scale(1.1);
  background: rgba(139, 0, 0, 1);
}

.video-title {
  color: white;
  font-size: 0.875rem;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  margin-top: 0.5rem;
  z-index: 3;
  line-height: 1.2;
}

.youtube-short.fullscreen-video {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 1rem;
  position: relative;
  z-index: 4;
}

/* Botão CTA fora do fullscreen */
.cta-container {
  margin-top: 3rem;
  text-align: center;
  animation: fadeInUp 0.5s ease;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: #e3350d;
  color: white;
  text-decoration: none;
  border-radius: 2rem;
  font-weight: 700;
  font-size: 1.125rem;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 8px 25px rgba(227, 53, 13, 0.3);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(227, 53, 13, 0.4);
  background: #890b0b;
}

.cta-icon {
  flex-shrink: 0;
}

/* Responsividade */
@media (max-width: 375px) {
  .videos-section {
    width: 95%;
  }

  .videos-grid {
    gap: 0.75rem;
  }

  .video-card {
    border-radius: 0.75rem;
  }

  .play-button {
    width: 50px;
    height: 50px;
  }

  .video-title {
    font-size: 0.75rem;
  }

  .back-button,
  .budget-button,
  .cta-button {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }

  .video-card.fullscreen-active {
    max-height: 60vh;
    width: 100%;
    margin: 0 auto 1rem;
  }

  .fullscreen-controls {
    gap: 1rem;
  }
}

@media (min-width: 641px) and (max-width: 1023px) {
  .video-title {
    font-size: 1rem;
  }

  .play-button {
    width: 65px;
    height: 65px;
  }

  .videos-grid {
    grid-template-columns: repeat(2, 1fr);
    max-width: 600px;
    margin: 0 auto;
  }

  .video-card.fullscreen-active {
    max-height: 60vh;
    width: 400px;
    margin: 0 auto 1rem;
  }

  .back-button,
  .budget-button,
  .cta-button {
    padding: 1rem 2rem;
    font-size: 1.125rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .videos-grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .video-title {
    font-size: 1.125rem;
  }

  .play-button {
    width: 70px;
    height: 70px;
  }

  .video-card.fullscreen-active {
    max-height: 60vh;
    margin: 0 auto 1rem;
    max-width: 400px;
  }

  .back-button,
  .budget-button,
  .cta-button {
    padding: 1rem 2.5rem;
    font-size: 1.25rem;
  }
}

/* Ajustes para telas altas */
@media (min-height: 800px) {
  .video-card.fullscreen-active {
    max-height: 65vh;
  }
}

@media (min-height: 1000px) {
  .video-card.fullscreen-active {
    max-height: 70vh;
  }
}

/* Ajustes para modo paisagem em mobile */
@media (max-height: 600px) and (orientation: landscape) {
  .video-card.fullscreen-active {
    max-height: 80vh;
    max-width: 50vh;
    margin: 0 auto 1rem;
  }

  .fullscreen-controls {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 1rem;
  }

  .budget-button {
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
  }
}

@media (min-width: 1024px) {
  .video-card.fullscreen-active {
    max-width: 520px;
    max-height: 75vh;
  }

  .fullscreen-cta-below {
    opacity: 1;
    transform: translateY(0);
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
  }
}
</style>