<script setup>
import { onMounted, ref } from 'vue';
import hannasection from '../../assets/images/hannasection.jpg';
import hannasection1 from '../../assets/images/hannasection1.jpg';
import hannasection2 from '../../assets/images/hannasection2.jpg';


const selectedImage = ref(null);

onMounted(() => {

  const number = Math.floor(Math.random() * 3);
  switch (number) {
    case 0:
      selectedImage.value = hannasection;
      break;
    case 1:
      selectedImage.value = hannasection1;
      break;
    case 2:
      selectedImage.value = hannasection2;
      break;
    default:
      selectedImage.value = hannasection;
  }

});

</script>

<template>
  <section id="sobre" class="about">
    <div class="container">
      <div class="about-grid">
        <div class="about-image-wrapper">
          <img
            :src="selectedImage"
            alt="Cozinha Planejada Moderna" class="about-image" />
          <div class="about-decoration"></div>
        </div>
        <div class="about-text">
          <h2 class="section-title">Hanna Única Empresa Que Dá A Você Assistência Vitalícia Dos Seus Móveis</h2>
          <p class="text-large">
            A Hanna Móveis Planejados nasce sob a égide do conceituado Duran Group, trazendo
            décadas de experiência em marcenaria de alto padrão para Joinville e região.
          </p>
          <p class="text-large">
            Nossa missão é criar ambientes que não apenas atendam às suas necessidades
            funcionais, mas que elevem sua qualidade de vida. Cada detalhe é pensado para
            refletir a personalidade e a felicidade de quem habita o espaço.
          </p>
          <div class="stats-grid">
            <div class="stat-item">
              <span class="stat-number">15+</span>
              <span class="stat-label">Anos de Grupo</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">100%</span>
              <span class="stat-label">Ecológico</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 96px 0;
  background: white;
}

.container{
    width: 95%;
    margin: auto;
}

.dark .about {
  background: #121212;
}

.about-grid {
  display: grid;
  gap: 64px;
  align-items: center;
}

@media (min-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.about-image-wrapper {
  position: relative;
}

.about-image {
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 500px;
  object-fit: cover;
  position: relative;
  z-index: 10;
}

.about-decoration {
  position: absolute;
  bottom: -24px;
  right: -24px;
  width: 256px;
  height: 256px;
  background: rgba(227, 53, 13, 0.1);
  border-radius: 16px;
  z-index: 0;
}

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 32px;
}

.text-large {
  font-size: 18px;
  color: #666;
  margin-bottom: 24px;
  line-height: 1.7;
}

.dark .text-large {
  color: #999;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 32px;
}

.stat-item {
  border-left: 4px solid #e3350d;
  padding-left: 16px;
}

.stat-number {
  display: block;
  font-size: 36px;
  font-weight: 700;
}

.stat-label {
  font-size: 12px;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
</style>