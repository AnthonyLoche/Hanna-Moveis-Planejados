<template>
  <section class="testimonials-section" id="depoimentos">
    <div class="container">
      <div class="testimonials-header">
        <div class="stars">
          <Star v-for="i in 5" :key="i" :size="24" fillColor="#FFC107" />
        </div>
        <h3 class="section-title">O que nossos clientes dizem</h3>
        <p class="section-subtitle">Mais de 4.9 estrelas baseadas em avaliações reais no Google</p>
      </div>

      <div class="testimonials-carousel">
        <button class="carousel-btn prev" @click="prevSlide" aria-label="Avaliação anterior">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </button>

        <div class="testimonials-wrapper">
          <div class="testimonials-grid" :style="{ transform: `translateX(-${currentSlide * slidePercentage}%)` }">
            <div v-for="(testimonial, index) in shuffledTestimonials" :key="index" class="testimonial-card"
              :class="{ 'expanded': expandedCard === index }">
              <div class="testimonial-header">
                <img :src="testimonial.picture" alt="Cozinha Planejada, Cozinha Sob Medida, Cozinha Modulada, Cozinha Alto Padrão, Dormitório Sob Medida, Dormitório Planejado, Dormitório Modulado, Dormitório Alto Padrão, Dormitório Sob Medida, Suíte Casal Sob Medida, Suíte Casal Planejada, Suíte Casal Modulada, Suíte Casal Alto Padrão, Dormitório Infantil Planejado, Dormitório Infantil Sob Medida, Dormitório Infantil Modulado, Dormitório Infantil Alto Padrão, Dormitório Casal Sob Medida, Dormitório Casal Planejado, Dormitório Casal Modulado, Dormitório Casal Alto Padrão." class="testimonial-avatar">
                <div>
                  <p class="testimonial-name">{{ testimonial.name }}</p>
                  <div class="rating-and-date">
                    <div class="mini-stars">
                      <Star v-for="i in 5" :key="i" :size="16"
                        :fillColor="i <= testimonial.rating ? '#FFC107' : '#E5E7EB'" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="testimonial-content">
                <p class="testimonial-text"
                  :class="{ 'clamped': !isTextLong(testimonial.description) || expandedCard !== index }"
                  ref="textElements">
                  {{ testimonial.description }}
                </p>
                <button v-if="isTextLong(testimonial.description)" class="read-more-btn"
                  @click.stop="toggleExpand(index)">
                  {{ expandedCard === index ? 'Ver menos' : 'Ver mais...' }}
                </button>
              </div>
            </div>
          </div>
        </div>

        <button class="carousel-btn next" @click="nextSlide" aria-label="Próxima avaliação">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </button>
      </div>

      <div class="testimonials-cta">
        <a href="#contato" class="btn btn-accent">Quero Meu Orçamento Agora</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import Star from 'vue-material-design-icons/Star.vue'
import { avaliacoes } from '@/data/testimonials'

const shuffleArray = (array) => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const shuffledTestimonials = ref([])
const currentSlide = ref(0)
const expandedCard = ref(null)
const textElements = ref([])

// Verifica se o texto é longo demais para o card
const isTextLong = (text) => {
  return text.length > 200 // Ajuste este valor conforme necessário
}

const toggleExpand = (index) => {
  if (expandedCard.value === index) {
    expandedCard.value = null
  } else {
    expandedCard.value = index
  }
}

// Fecha card expandido quando muda de slide
const closeExpandedCard = () => {
  expandedCard.value = null
}

const cardsPerView = ref(1)

const updateCardsPerView = () => {
  if (window.innerWidth < 768) {
    cardsPerView.value = 1
  } else if (window.innerWidth < 1024) {
    cardsPerView.value = 2
  } else {
    cardsPerView.value = 3
  }
}

const slidePercentage = computed(() => {
  return 100 / cardsPerView.value
})

const totalSlides = computed(() => {
  if (shuffledTestimonials.value.length <= cardsPerView.value) {
    return 1
  }
  return shuffledTestimonials.value.length - cardsPerView.value + 1
})

const nextSlide = () => {
  closeExpandedCard()
  if (currentSlide.value < totalSlides.value - 1) {
    currentSlide.value++
  } else {
    currentSlide.value = 0
  }
}

const prevSlide = () => {
  closeExpandedCard()
  if (currentSlide.value > 0) {
    currentSlide.value--
  } else {
    currentSlide.value = totalSlides.value - 1
  }
}

let autoRotateInterval

const startAutoRotate = () => {
  stopAutoRotate()
  autoRotateInterval = setInterval(nextSlide, 5000)
}

const stopAutoRotate = () => {
  if (autoRotateInterval) {
    clearInterval(autoRotateInterval)
  }
}

const handleUserInteraction = () => {
  stopAutoRotate()
  setTimeout(startAutoRotate, 10000)
}

onMounted(() => {
  shuffledTestimonials.value = shuffleArray(avaliacoes)
  updateCardsPerView()
  startAutoRotate()

  window.addEventListener('resize', updateCardsPerView)

  const carouselBtns = document.querySelectorAll('.carousel-btn, .carousel-dot')
  carouselBtns.forEach(btn => {
    btn.addEventListener('click', handleUserInteraction)
  })
})

onUnmounted(() => {
  stopAutoRotate()
  window.removeEventListener('resize', updateCardsPerView)
})
</script>

<style scoped>
.testimonials-section {
  padding: 5rem 0;
  background-color: white;
}

.container {
  width: 95%;
  margin: auto;
  position: relative;
  max-width: 1200px;
}

.testimonials-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
  margin-bottom: 4rem;
}

.stars {
  display: flex;
  gap: 0.25rem;
}

.section-title {
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-align: center;
}

.section-subtitle {
  color: #6b7280;
  max-width: 42rem;
}

.testimonials-carousel {
  position: relative;
  overflow: hidden;
  margin-bottom: 2rem;
}

.testimonials-wrapper {
  overflow: hidden;
  margin: 0 4rem;
  /* Espaço para os botões */
}

@media (max-width: 767px) {
  .testimonials-wrapper {
    margin: 0 3.5rem;
    /* Mais espaço para setas no mobile */
  }
}

.testimonials-grid {
  display: flex;
  transition: transform 0.5s ease-in-out;
  gap: 2rem;
}

.testimonial-card {
  flex: 0 0 100%;
  padding: 2rem;
  border-radius: 1rem;
  background-color: #f8f5f5;
  border: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 250px;
  box-sizing: border-box;
  transition: all 0.3s ease;
  position: relative;
}

.testimonial-card.expanded {
  z-index: 100;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  transform: scale(1.02);
  min-height: auto;
}

.testimonial-header {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.testimonial-avatar {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  object-fit: cover;
}

.testimonial-name {
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.rating-and-date {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.mini-stars {
  display: flex;
  gap: 0.125rem;
}

.testimonial-content {
  flex-grow: 1;
  position: relative;
}

.testimonial-text {
  font-size: 0.875rem;
  color: #4b5563;
  line-height: 1.5;
  transition: all 0.3s ease;
}

.testimonial-text.clamped {
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (max-width: 767px) {
  .testimonial-text.clamped {
    -webkit-line-clamp: 5;
  }
}

.read-more-btn {
  background: none;
  border: none;
  color: #e3350d;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0.25rem 0;
  margin-top: 0.5rem;
  display: inline-block;
  transition: color 0.3s ease;
  text-align: left;
}

.read-more-btn:hover {
  color: #8c0303;
  text-decoration: underline;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: white;
  border: 1px solid #e5e7eb;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
}

.carousel-btn:hover {
  background-color: #e3350d;
  color: white;
  border-color: #e3350d;
}

.carousel-btn.prev {
  left: 0;
}

.carousel-btn.next {
  right: 0;
}

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 3rem;
}

.carousel-dot {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background-color: #e5e7eb;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.carousel-dot.active {
  background-color: #e3350d;
  transform: scale(1.2);
}

.carousel-dot:hover {
  background-color: #e3350d;
}

.testimonials-cta {
  display: flex;
  justify-content: center;
}

.btn {
  padding: 0.875rem 2rem;
  border-radius: 0.5rem;
  font-weight: 700;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}

.btn-accent {
  background-color: #e3350d;
  color: white;
  box-shadow: 0 10px 25px rgba(139, 0, 0, 0.2);
}

.btn-accent:hover {
  background-color: #8c0303;
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(139, 0, 0, 0.3);
}

/* Versão Tablet - 2 cards */
@media (min-width: 768px) {
  .testimonial-card {
    flex: 0 0 calc(50% - 1rem);
    /* 2 cards por vez no tablet */
    padding: 1.5rem;
  }

  .testimonials-grid {
    gap: 2rem;
  }

  .testimonials-wrapper {
    margin: 0 4rem;
  }
}

@media (min-width: 1024px) {
  .testimonial-card {
    flex: 0 0 calc(33.333% - 1.33rem);
  }
}

@media (max-width: 767px) {
  .carousel-btn {
    display: flex;
    width: 2.5rem;
    height: 2.5rem;
  }

  .container {
    width: 95%;
  }

  .carousel-btn.prev {
    left: 0.5rem;
  }

  .carousel-btn.next {
    right: 0.5rem;
  }

  .testimonial-card {
    min-height: 280px;
    padding: 1.5rem;
  }

  .testimonial-card.expanded {
    min-height: auto;
  }

  .testimonials-grid {
    gap: 0;
  }
}

/* Overlay para focar no card expandido (opcional) */
.testimonial-card.expanded::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.1);
  z-index: 99;
  pointer-events: none;
  opacity: 0;
}
</style>