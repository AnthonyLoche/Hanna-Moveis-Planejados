<script setup>
const emit = defineEmits(['submit']);

const handleSubmit = (e) => {
  e.preventDefault();
  emit('submit', e);
};
</script>

<template>
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
</template>

<style scoped>
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

.container{
  width: 95%;
  margin: auto;
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
</style>