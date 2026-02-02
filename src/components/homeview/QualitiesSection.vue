<script setup>
// Importe os ícones apropriados
import Palette from 'vue-material-design-icons/Palette.vue'; // Para design
import Star from 'vue-material-design-icons/Star.vue'; // Para qualidade/duração
import CalendarCheck from 'vue-material-design-icons/CalendarCheck.vue'; // Para compromisso/prazo
</script>

<template>
  <section id="qualidades" class="qualities">
    <div class="container">
      <div class="qualities-grid">
        <div class="quality-card">
          <div class="quality-icon-wrapper">
            <Palette :size="48" class="quality-icon" />
          </div>
          <h3 class="quality-title">Design Exclusivo</h3>
          <p class="quality-text">
            Projetos autorais que transformam sua personalidade em ambientes de alto padrão,
            unindo estética refinada e funcionalidade inteligente.
          </p>
        </div>
        <div class="quality-card">
          <div class="quality-icon-wrapper">
            <Star :size="48" class="quality-icon" />
          </div>
          <h3 class="quality-title">Durabilidade Superior</h3>
          <p class="quality-text">
            Utilizamos as melhores matérias-primas e técnicas de construção de vanguarda para
            garantir móveis que resistem ao tempo com perfeição.
          </p>
        </div>
        <div class="quality-card">
          <div class="quality-icon-wrapper">
            <CalendarCheck :size="48" class="quality-icon" />
          </div>
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

.container {
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
  padding: 48px 32px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #e5e5e5;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  transition: all 0.3s ease;
}

.quality-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  border-color: #e3350d;
}

.dark .quality-card {
  background: #1f1f1f;
  border-color: #333;
}

.dark .quality-card:hover {
  border-color: #e3350d;
}

.quality-icon-wrapper {
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(227, 53, 13, 0.1);
  transition: all 0.3s ease;
}

.quality-card:hover .quality-icon-wrapper {
  background: rgba(227, 53, 13, 0.2);
  transform: scale(1.1);
}

.quality-icon {
  color: #e3350d;
}

.dark .quality-icon {
  color: #ff6b4a;
}

.quality-title {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #292929;
  line-height: 1.3;
}

.dark .quality-title {
  color: white;
}

.quality-text {
  color: #666;
  line-height: 1.7;
  font-size: 16px;
}

.dark .quality-text {
  color: #999;
}

span{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>