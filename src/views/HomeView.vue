<script setup>
import { ref } from 'vue';
import Whatsapp from "vue-material-design-icons/Whatsapp.vue"

const isDark = ref(false);

const handleSubmit = (e) => {
  e.preventDefault();
  alert('Formulário enviado! Entraremos em contato em breve.');
};
</script>

<template>
  <div :class="{ dark: isDark }" class="app">
    <header class="header">
      <div class="container header-content">
        <div class="logo-container">
          <img
            src="../assets/images/hanna.png"
            alt="Hanna Móveis Logo" class="logo" />
        </div>
        <nav class="nav">
          <a href="#inicio">Início</a>
          <a href="#sobre">A Hanna</a>
          <a href="#sustentabilidade">Ecológico</a>
          <a href="#qualidades">Qualidades</a>
          <a href="#galeria">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
        <div class="header-actions">

          <a href="#contato" class="btn-primary btn-desktop">Solicitar Orçamento</a>
        </div>
      </div>
    </header>

    <section id="inicio" class="hero">
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
        </div>
      </div>
    </section>

    <section id="sobre" class="about">
      <div class="container">
        <div class="about-grid">
          <div class="about-image-wrapper">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFLwOWMNnaS-V4Exj9rFQXEcdWCrkQGQcz353XQmVZVXizKlAFrHcW8WPqDZO4adUu2xC3tYxSfUk6gFTdzDGTCcLhbz6cgT5J3atCMAUXvkFFHA73AslTg6bh3g5me3t72zYtPyM7i_RNg5K_9fDWzaWeLi9rwlJd9YoMTauuIF-DMzWktJS7326UXZdWQlYK2JN735HBaSFDwehnnQRIivThU8W56P3kGMavzkRClD1bLRNPVb1U0Ud_QCUHuB0s4n4iHcCXBD0"
              alt="Cozinha Planejada Moderna" class="about-image" />
            <div class="about-decoration"></div>
          </div>
          <div class="about-text">
            <h2 class="section-title">Excelência do Duran Group agora na Hanna</h2>
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
                <span class="stat-number">25+</span>
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

    <section id="galeria" class="gallery">
      <div class="container">
        <div class="gallery-header">
          <div>
            <h2 class="section-title">Nossos Projetos</h2>
            <p class="gallery-subtitle">
              Ambientes reais transformados em sonhos realizados com marcenaria premium.
            </p>
          </div>
          <a href="#" class="gallery-link">Ver Portfólio Completo →</a>
        </div>
        <div class="gallery-grid">
          <div class="gallery-item">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdhhIUOms8HGCHT1C2xd7sBV6o1XdHA4IVE6BjO8XQPXVEk2Bd-JBDMd7wyHx-6cQaCxe75GM_TC2dCCzPD6JUn-6KLghzowxM-FUTZlPajU7603v-buTRCiVLntSW0NVfSd8JJ3jsIlfJfXwKz5QM3CqP4-6MT9NhhTON4KYmtFOQKMz4hJwGhdxtt54eCKyxNU5ctxBbfM6iuX3gOW-jW8kzAseCaNbdVB4UsdqLXZbl_YsY-ebcNOqcR7w5VjyPGx-Xv83aV34"
              alt="Cozinha Minimalista" />
            <div class="gallery-overlay">
              <div class="gallery-tag">Cozinha Gourmet</div>
              <h4 class="gallery-title">Minimalismo Funcional</h4>
              <p class="gallery-description">Linhas limpas e acabamento em carvalho natural.</p>
            </div>
          </div>
          <div class="gallery-item">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuv0_MHae8MqAN3YwqEkBc4fhXG-_RvgCmtqonwE-tYv82wi5zrI6LLnP59Ss1DYGJ4Kkcb2kDwUkwBDHW5pNpSaE25Y2MgX_9Wq5z8SrFfz5SPM0o7IRQnqn9n6WLuO0H6Yy93LXae-yzLoZ5VLI0_1L_cYkpzhDPvsMk0GiTfrAeAGbcW4Co23K9ffnG6_PDa3W6nAwoLogT5oqixxh41F1hD5S_nPPo4rZSZu46k4TNOAB5yNiPAsW27ybSQTPuK16E0H2_Mc0"
              alt="Living Sofisticado" />
            <div class="gallery-overlay">
              <div class="gallery-tag">Living Room</div>
              <h4 class="gallery-title">Home Theater Premium</h4>
              <p class="gallery-description">Painéis ripados com iluminação em LED embutida.</p>
            </div>
          </div>
          <div class="gallery-item">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1GpOFeXChytlhmo6wpLiM3_8gZgVh8R8OiMvY9bMqu2vBPvU4K4tqNEVoVAcaguQMqt9IM1Muz1Ij4EwRAbVz4qZsxYRnoUHyIRZtFsu9qnGn9nNSzg1N41dd3TwxyKXjuPsw9TRGp_W7z8R0FjtP-xJDCEjftpt5Y9iTY4Eud6WwrNfCYVRjq79l5Aaa5GlDfBnmb37TACEWepzqweRo0GWMY8GBe1Z_r0psdNiSdkOmrwkqj_V3F4TUc7nd6o5a45wt_UQ7lXw"
              alt="Dormitório" />
            <div class="gallery-overlay">
              <div class="gallery-tag">Suíte Master</div>
              <h4 class="gallery-title">Refúgio Contemporâneo</h4>
              <p class="gallery-description">Closet integrado e cabeceira estofada sob medida.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contato" class="contact">
      <div class="container">
        <div class="contact-card">
          <div class="contact-info">
            <div>
              <h2 class="contact-title">Vamos planejar sua felicidade?</h2>
              <p class="contact-subtitle">
                Fale conosco e agende uma consultoria sem compromisso com nossos designers.
              </p>
              <div class="contact-details">
                <div class="contact-item">
                  <span class="contact-icon">📍</span>
                  <div>
                    <h4>Endereço</h4>
                    <p>Rua Blumenau, Joinville, SC<br />CEP: 89204-200</p>
                  </div>
                </div>
                <div class="contact-item">
                  <span class="contact-icon">📞</span>
                  <div>
                    <h4>Telefone</h4>
                    <p>(47) 3433-0000</p>
                  </div>
                </div>
                <div class="contact-item">
                  <span class="contact-icon">✉️</span>
                  <div>
                    <h4>E-mail</h4>
                    <p>contato@hannamoveis.com.br</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="social-links">
              <a href="#">🌐</a>
              <a href="#">📷</a>
              <a href="#">💬</a>
            </div>
          </div>
          <div class="contact-form-wrapper">
            <form @submit="handleSubmit" class="contact-form">
              <div class="form-row">
                <div class="form-group">
                  <label>Nome Completo</label>
                  <input type="text" placeholder="Seu nome" required />
                </div>
                <div class="form-group">
                  <label>E-mail</label>
                  <input type="email" placeholder="seu@email.com" required />
                </div>
              </div>
              <div class="form-group">
                <label>Qual ambiente deseja planejar?</label>
                <select required>
                  <option>Cozinha</option>
                  <option>Dormitório</option>
                  <option>Sala de Estar</option>
                  <option>Banheiro</option>
                  <option>Área Gourmet</option>
                  <option>Corporativo</option>
                </select>
              </div>
              <div class="form-group">
                <label>Sua Mensagem</label>
                <textarea placeholder="Conte-nos um pouco sobre seu sonho..." rows="4" required></textarea>
              </div>
              <button type="submit" class="btn-submit">Enviar Solicitação</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCf64EPxSzXRBz2oLH1J5P5KH9SH1TnaVdmhRx8_6l4itBLZYgztaeB7eZnalZHsw0HNBsLwN5NaDS03iydgqlBGg07ZN6zRfKWFk7JECrD3rFcN9YMejAlnX6ny_pM-KtokUljK9HFLg2LM-gru59CoSzC4U6-Py713xX1_cxNyZvEG0TIPh_-1EOOateCYRLDsGHqMBPOUBR_jP-Rp-PoDhBHnMi_8yEB4Pr3WWn4F_zhme_m5hG0o6-JjLTZ6ypBhhXET6w0Chg"
              alt="Logo" class="footer-logo" />
            <p class="footer-description">
              Excelência em móveis planejados de alto padrão. Unimos o design contemporâneo à
              consciência ambiental para transformar seu lar.
            </p>
            <div class="footer-social">
              <a href="#">🌐</a>
              <a href="#">📷</a>
              <a href="#">💬</a>
            </div>
          </div>
          <div class="footer-col">
            <h4 class="footer-heading">Informações</h4>
            <ul class="footer-list">
              <li>📍 Rua Blumenau, 1234, Joinville, SC<br />CEP: 89204-200</li>
              <li>📞 (47) 3433-0000</li>
              <li>✉️ contato@hannamoveis.com.br</li>
              <li class="whatsapp-item">
                <a href="https://wa.me/5547000000000">💬 WhatsApp Comercial</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4 class="footer-heading">Horário de Atendimento</h4>
            <ul class="footer-schedule">
              <li>
                <span>Segunda a Sexta</span>
                <strong>08h às 18h</strong>
              </li>
              <li>
                <span>Sábados</span>
                <strong>09h às 13h</strong>
              </li>
            </ul>
            <div class="sustainability-badge">
              <span>🌱</span>
              <span>Selo Duran Group Sustentável</span>
            </div>
          </div>
          <div class="footer-col">
            <h4 class="footer-heading">Links Rápidos</h4>
            <ul class="footer-links">
              <li><a href="#inicio">Início</a></li>
              <li><a href="#sobre">Nossa História</a></li>
              <li><a href="#sustentabilidade">Sustentabilidade</a></li>
              <li><a href="#galeria">Projetos Executados</a></li>
              <li><a href="#contato">Solicitar Orçamento</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="footer-copyright">
            <span>© 2026   HANNA MÓVEIS PLANEJADOS</span>
            <span class="separator">|</span>
            <span>TODOS OS DIREITOS RESERVADOS</span>
          </div>
          <div class="footer-brand">
            <strong>UMA MARCA DURAN GROUP</strong>
            <a href="#">POLÍTICA DE PRIVACIDADE</a>
          </div>
        </div>
      </div>
    </footer>

    <a href="https://wa.me/5547000000000" target="_blank" class="whatsapp-float">
      <Whatsapp />
    </a>
  </div>
</template>

<style scoped>
span{
  display: flex;
  justify-content: center;
  align-items: center;
}

.app {
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: #ffffff;
  color: #333333;
  transition: background-color 0.3s, color 0.3s;
  scroll-behavior: smooth;
}

.app.dark {
  background: #121212;
  color: #e5e5e5;
}

.container {
  width: 90%;
  margin: 0 auto;
  padding: 0 24px;
}

/* Header */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 1 );
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.dark .header {
  background: rgba(18, 18, 18, 0.9);
  border-bottom-color: rgba(255, 255, 255, 0.05);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
}

.logo {
  height: 48px;
  width: auto;
  object-fit: contain;
}

.nav {
  display: none;
  gap: 32px;
  font-weight: 500;
}

@media (min-width: 768px) {
  .nav {
    display: flex;
  }
}

.nav a {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s;
}

.nav a:hover {
  color: #e3350d;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.theme-toggle {
  padding: 8px;
  border: none;
  background: transparent;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  transition: background-color 0.3s;
}

.theme-toggle:hover {
  background: rgba(0, 0, 0, 0.05);
}

.dark .theme-toggle:hover {
  background: rgba(255, 255, 255, 0.05);
}

.btn-primary {
  background: #e3350d;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  
  font-weight: 600;
  transition: background-color 0.3s, transform 0.3s;
  display: flex;

  align-items: center;
}

.btn-primary:hover {
  background: #c72d0a;
  transform: translateY(-2px);
}

.btn-desktop {
  display: none;
}

@media (min-width: 640px) {
  .btn-desktop {
    display: inline-block;
  }
}

/* Hero */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 80px;
  background: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)),
    url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop') center/cover;
}

.dark .hero {
  background: linear-gradient(rgba(18, 18, 18, 0.8), rgba(18, 18, 18, 0.8)),
    url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop') center/cover;
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
}

@media (min-width: 640px) {
  .hero-buttons {
    flex-direction: row;
  }
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

/* About */
.about {
  padding: 96px 0;
  background: white;
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

/* Sustainability */
.sustainability {
  padding: 50px 0;
  background: #f5f5f5;
}

.dark .sustainability {
  background: rgba(41, 41, 41, 0.3);
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

/* Qualities */
.qualities {
  padding: 96px 0;
  background: #f5f5f5;
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

/* Gallery */
.gallery {
  padding: 96px 0;
  background: white;
}

.dark .gallery {
  background: #121212;
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
}

.gallery-link {
  color: #e3350d;
  font-weight: 700;
  text-decoration: none;
  margin-top: 16px;
}

@media (min-width: 768px) {
  .gallery-link {
    margin-top: 0;
  }
}

.gallery-grid {
  display: grid;
  gap: 24px;
}

@media (min-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  aspect-ratio: 4/5;
  cursor: pointer;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.gallery-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(51, 51, 51, 0.9), rgba(51, 51, 51, 0.2), transparent);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 32px;
  opacity: 0;
  transition: opacity 0.5s;
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
}

.gallery-title {
  color: white;
  font-size: 24px;
  font-weight: 700;
}

.gallery-description {
  color: #ccc;
  font-size: 14px;
  margin-top: 8px;
}

/* Contact */
.contact {
  padding: 96px 0;
  background: #f5f5f5;
}

.dark .contact {
  background: rgba(41, 41, 41, 0.3);
}

.contact-card {
  background: white;
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: grid;
}

.dark .contact-card {
  background: #1f1f1f;
}

@media (min-width: 1024px) {
  .contact-card {
    grid-template-columns: 2fr 3fr;
  }
}

.contact-info {
  background: #333;
  padding: 48px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.dark .contact-info {
  background: #000;
}

.contact-title {
  font-family: 'Playfair Display', serif;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 32px;
}

.contact-subtitle {
  color: #999;
  margin-bottom: 48px;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.contact-item {
  display: flex;
  gap: 16px;
}

.contact-icon {
  font-size: 24px;
  color: #e3350d;
}

.contact-item h4 {
  font-weight: 700;
  margin-bottom: 4px;
}

.contact-item p {
  color: #999;
  line-height: 1.6;
}

.social-links {
  display: flex;
  gap: 24px;
  margin-top: 48px;
  font-size: 24px;
}

.social-links a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.social-links a:hover {
  color: #e3350d;
}

.contact-form-wrapper {
  padding: 48px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-row {
  display: grid;
  gap: 24px;
}

@media (min-width: 768px) {
  .form-row {
    grid-template-columns: 1fr 1fr;
  }
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
}

.form-group input,
.form-group select,
.form-group textarea {
  background: #f5f5f5;
  border: none;
  border-radius: 8px;
  padding: 16px;
  font-family: inherit;
  font-size: 14px;
  transition: all 0.3s;
}

.dark .form-group input,
.dark .form-group select,
.dark .form-group textarea {
  background: #2a2a2a;
  color: #e5e5e5;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  box-shadow: 0 0 0 2px #e3350d;
}

.btn-submit {
  width: 100%;
  background: #e3350d;
  color: white;
  font-weight: 700;
  padding: 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  box-shadow: 0 4px 16px rgba(227, 53, 13, 0.2);
}

.btn-submit:hover {
  background: #c72d0a;
}

/* Footer */
.footer {
  background: white;
  padding: 96px 0 48px;
  border-top: 1px solid #e5e5e5;
  color: #292929;
}

.dark .footer {
  background: #121212;
  border-top-color: #333;
  color: #ccc;
}

.footer-grid {
  display: grid;
  gap: 64px;
  margin-bottom: 64px;
}

@media (min-width: 768px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .footer-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.footer-logo {
  height: 64px;
  width: auto;
  object-fit: contain;
  margin-bottom: 32px;
}

.footer-description {
  font-size: 14px;
  line-height: 1.7;
  max-width: 320px;
  margin-bottom: 32px;
}

.footer-social {
  display: flex;
  gap: 20px;
}

.footer-social a {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 20px;
  transition: all 0.3s;
}

.dark .footer-social a {
  border-color: #333;
}

.footer-social a:hover {
  background: #e3350d;
  border-color: #e3350d;
  color: white;
}

.footer-heading {
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 32px;
}

.footer-list,
.footer-links,
.footer-schedule {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer-list li {
  font-size: 14px;
  line-height: 1.6;
}

.footer-schedule li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.dark .footer-schedule li {
  border-bottom-color: rgba(255, 255, 255, 0.05);
}

.whatsapp-item {
  padding-top: 8px;
}

.whatsapp-item a {
  background: rgba(227, 53, 13, 0.05);
  padding: 12px 16px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: #e3350d;
  font-weight: 700;
  font-size: 14px;
  transition: background-color 0.3s;
}

.whatsapp-item a:hover {
  background: rgba(227, 53, 13, 0.1);
}

.sustainability-badge {
  margin-top: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #999;
}

.footer-links a {
  color: inherit;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s;
  display: flex;
  align-items: center;
}

.footer-links a:hover {
  color: #e3350d;
}

.footer-bottom {
  padding-top: 40px;
  border-top: 1px solid #e5e5e5;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  font-size: 11px;
  color: #999;
  font-weight: 500;
  letter-spacing: 0.05em;
}

@media (min-width: 768px) {
  .footer-bottom {
    flex-direction: row;
    font-size: 12px;
  }
}

.dark .footer-bottom {
  border-top-color: #333;
}

.footer-copyright {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
}

@media (min-width: 768px) {
  .footer-copyright {
    flex-direction: row;
    gap: 16px;
  }
}

.separator {
  display: none;
  color: #ccc;
}

@media (min-width: 768px) {
  .separator {
    display: inline;
  }
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 24px;
}

.footer-brand strong {
  color: #292929;
}

.dark .footer-brand strong {
  color: #999;
}

.footer-brand a {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-brand a:hover {
  color: #e3350d;
}

/* WhatsApp Float */
.whatsapp-float {
  position: fixed;
  bottom: 32px;
  right: 32px;
  background: #25d366;
  color: white;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  transition: transform 0.3s;
  z-index: 999;
}

.whatsapp-float:hover {
  transform: scale(1.1);
}
</style>