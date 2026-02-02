<script setup>
// Importe os ícones que deseja usar
import Tree from 'vue-material-design-icons/Tree.vue';
import Recycle from 'vue-material-design-icons/Recycle.vue';
import Leaf from 'vue-material-design-icons/Leaf.vue';
</script>

<template>
  <section id="sustentabilidade" class="sustainability">
    <div class="container text-center">
      <h2 class="section-title">Produção Ecológica e Sustentável</h2>
      <div class="title-underline"></div>
      <p class="section-subtitle">
        Acreditamos que o design sofisticado não deve custar o nosso planeta. Nossa produção
        segue os mais rigorosos padrões de preservação ambiental.
      </p>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon-wrapper">
            <Tree :size="48" class="feature-icon" />
          </div>
          <h3 class="feature-title">Madeira Certificada</h3>
          <p class="feature-text">
            Trabalhamos exclusivamente com MDF de reflorestamento e selos de origem sustentável.
          </p>
        </div>
        <div class="feature-card">
          <div class="feature-icon-wrapper">
            <Recycle :size="48" class="feature-icon" />
          </div>
          <h3 class="feature-title">Resíduo Zero</h3>
          <p class="feature-text">
            Processos inteligentes que minimizam o desperdício de material durante a fabricação.
          </p>
        </div>
        <div class="feature-card">
          <div class="feature-icon-wrapper">
            <Leaf :size="48" class="feature-icon" />
          </div>
          <h3 class="feature-title">Insumos Naturais</h3>
          <p class="feature-text">
            Utilização de colas e acabamentos com baixa emissão de compostos químicos voláteis.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sustainability {
  padding: 24px 0;
  background: #f5f5f5;
}

.dark .sustainability {
  background: rgba(41, 41, 41, 0.3);
}

.container {
  width: 95%;
  margin: auto;
}

.text-center {
  text-align: center;
}

.title-underline {
  width: 96px;
  height: 4px;
  background: #e3350d;
  margin: 0 auto 48px;
}

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 32px;
}

.section-subtitle {
  max-width: 768px;
  margin: 0 auto 64px;
  font-size: 20px;
  color: #666;
}

.dark .section-subtitle {
  color: #999;
}

.features-grid {
  display: grid;
  gap: 48px;
}

@media (min-width: 768px) {
  .features-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.feature-card {
  background: white;
  padding: 40px 32px;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.feature-card:hover {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transform: translateY(-5px);
}

.dark .feature-card {
  background: #1f1f1f;
}

.feature-icon-wrapper {
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(227, 53, 13, 0.1);
  transition: all 0.3s ease;
}

.feature-card:hover .feature-icon-wrapper {
  background: rgba(227, 53, 13, 0.2);
  transform: scale(1.1);
}

.feature-icon {
  color: #e3350d;
}

.dark .feature-icon {
  color: #ff6b4a;
}

.feature-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 16px;
  color: #292929;
}

.dark .feature-title {
  color: #e5e5e5;
}

.feature-text {
  color: #666;
  line-height: 1.6;
}

.dark .feature-text {
  color: #999;
}

span{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>