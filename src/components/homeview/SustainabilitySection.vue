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
          <span class="feature-icon">🌲</span>
          <h3 class="feature-title">Madeira Certificada</h3>
          <p class="feature-text">
            Trabalhamos exclusivamente com MDF de reflorestamento e selos de origem sustentável.
          </p>
        </div>
        <div class="feature-card">
          <span class="feature-icon">♻️</span>
          <h3 class="feature-title">Resíduo Zero</h3>
          <p class="feature-text">
            Processos inteligentes que minimizam o desperdício de material durante a fabricação.
          </p>
        </div>
        <div class="feature-card">
          <span class="feature-icon">🌿</span>
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

.container{
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
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s;
}

.feature-card:hover {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.dark .feature-card {
  background: #1f1f1f;
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 24px;
  display: block;
}

.feature-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 16px;
}

.feature-text {
  color: #666;
  line-height: 1.6;
}

.dark .feature-text {
  color: #999;
}
</style>