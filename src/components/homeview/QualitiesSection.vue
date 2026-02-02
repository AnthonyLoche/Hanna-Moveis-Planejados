<template>
  <section id="qualidades" class="qualities">
    <div class="container">
      <div class="qualities-grid">
        <div class="quality-card">
          <span class="quality-icon">🏛️</span>
          <h3 class="quality-title">Design Exclusivo</h3>
          <p class="quality-text">
            Projetos autorais que transformam sua personalidade em ambientes de alto padrão,
            unindo estética refinada e funcionalidade inteligente.
          </p>
        </div>
        <div class="quality-card">
          <span class="quality-icon">⭐</span>
          <h3 class="quality-title">Durabilidade Superior</h3>
          <p class="quality-text">
            Utilizamos as melhores matérias-primas e técnicas de construção de vanguarda para
            garantir móveis que resistem ao tempo com perfeição.
          </p>
        </div>
        <div class="quality-card">
          <span class="quality-icon">📅</span>
          <h3 class="quality-title">Compromisso com o Prazo</h3>
          <p class="quality-text">
            Respeito total ao seu cronograma. Garantimos a entrega e montagem pontual do seu
            projeto, sem surpresas ou atrasos.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.qualities {
  padding: 24px 0;
  background: #f5f5f5;
}

.container{
  width: 95%;
  margin: auto;
}


.dark .qualities {
  background: #0a0a0a;
}

.qualities-grid {
  display: grid;
  gap: 32px;
}

@media (min-width: 768px) {
  .qualities-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.quality-card {
  background: white;
  padding: 48px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e5e5;
  display: flex;
  flex-direction: column;
  text-align: left;
}

.dark .quality-card {
  background: #1f1f1f;
  border-color: #333;
}

.quality-icon {
  font-size: 48px;
  color: #e3350d;
  margin-bottom: 32px;
}

.quality-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
  color: #292929;
}

.dark .quality-title {
  color: white;
}

.quality-text {
  color: #666;
  line-height: 1.7;
}

.dark .quality-text {
  color: #999;
}
</style>