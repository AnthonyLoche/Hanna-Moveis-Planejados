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
                <div class="contact-icon-wrapper">
                  <MapMarker :size="24" class="contact-icon" />
                </div>
                <div>
                  <h4>Endereço</h4>
                  <p>Av. Cel. Procópio Gomes, 254 - Bucarein, Joinville - SC<br />CEP: 89202-300</p>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon-wrapper">
                  <Phone :size="24" class="contact-icon" />
                </div>
                <div>
                  <h4>Telefone</h4>
                  <p>(47) 99189-9212</p>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon-wrapper">
                  <Email :size="24" class="contact-icon" />
                </div>
                <div>
                  <h4>E-mail</h4>
                  <p>contato@hannamoveisplanejados.com.br</p>
                </div>
              </div>
            </div>
          </div>
          <div class="social-links">
            <a 
              href="https://www.facebook.com/hannamoveisplanejados#" 
              target="_blank" 
              class="social-link"
              aria-label="Facebook"
            >
              <Facebook :size="24" />
            </a>
            <a 
              href="https://www.instagram.com/hannamoveisplanejados/?hl=pt-br" 
              target="_blank" 
              class="social-link"
              aria-label="Instagram"
            >
              <Instagram :size="24" />
            </a>
            <a 
              href="https://wa.me/5547991899212" 
              target="_blank" 
              class="social-link"
              aria-label="WhatsApp"
            >
              <Whatsapp :size="24" />
            </a>
          </div>
        </div>
        <div class="contact-form-wrapper">
          <form @submit.prevent="enviarFormulario" class="contact-form">
            <div class="form-row">
              <div class="form-group">
                <label>Nome Completo</label>
                <input 
                  v-model="formData.nome" 
                  type="text" 
                  placeholder="Seu nome" 
                  required 
                  :disabled="carregando"
                />
              </div>
              <div class="form-group">
                <label>E-mail</label>
                <input 
                  v-model="formData.email" 
                  type="email" 
                  placeholder="seu@email.com" 
                  required 
                  :disabled="carregando"
                />
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label>WhatsApp</label>
                <input 
                  v-model="formData.whatsapp" 
                  type="tel" 
                  placeholder="(47) 9XXXX-XXXX" 
                  required 
                  :disabled="carregando"
                />
              </div>
              <div class="form-group">
                <label>Telefone</label>
                <input 
                  v-model="formData.telefone" 
                  type="tel" 
                  placeholder="(47) XXXX-XXXX" 
                  :disabled="carregando"
                />
              </div>
            </div>

            <div class="form-group">
              <label>Qual ambiente deseja planejar?</label>
              <select 
                v-model="formData.area_desejada" 
                required 
                :disabled="carregando"
              >
                <option value="" disabled selected>Selecione um ambiente</option>
                <option value="Cozinha">Cozinha</option>
                <option value="Dormitório">Dormitório</option>
                <option value="Sala de Estar">Sala de Estar</option>
                <option value="Banheiro">Banheiro</option>
                <option value="Área Gourmet">Área Gourmet</option>
                <option value="Corporativo">Corporativo</option>
                <option value="Outro">Outro</option>
              </select>
            </div>
            
            <div class="form-group">
              <label>Sua Mensagem</label>
              <textarea 
                v-model="formData.descricao" 
                placeholder="Conte-nos um pouco sobre seu sonho... (ex: medidas, estilo preferido, necessidades especiais)" 
                rows="4" 
                required 
                :disabled="carregando"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              class="btn-submit"
              :disabled="carregando"
              :class="{ loading: carregando }"
            >
              <span v-if="!carregando">Enviar Solicitação</span>
              <span v-else class="loading-text">Enviando...</span>
            </button>
            
            <p class="form-disclaimer">
              Ao enviar, você concorda com nossa política de privacidade e tratamento de dados.
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'
import MapMarker from 'vue-material-design-icons/MapMarker.vue'
import Phone from 'vue-material-design-icons/Phone.vue'
import Email from 'vue-material-design-icons/Email.vue'
import Whatsapp from 'vue-material-design-icons/Whatsapp.vue'
import Facebook from 'vue-material-design-icons/Facebook.vue'
import Instagram from 'vue-material-design-icons/Instagram.vue'

// Dados do formulário
const formData = ref({
  nome: '',
  email: '',
  whatsapp: '',
  telefone: '',
  area_desejada: '',
  descricao: ''
})

const carregando = ref(false)

// Função para enviar para tua API na Vercel
const enviarFormulario = async () => {
  try {
    carregando.value = true

    const payload = {
      nome: formData.value.nome,
      email: formData.value.email,
      whatsapp: formData.value.whatsapp,
      telefone: formData.value.telefone,
      area_desejada: formData.value.area_desejada,
      descricao: formData.value.descricao
    }

    const response = await fetch('/api/contato', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })

    const data = await response.json()

    if (!response.ok || !data?.ok) {
      throw new Error(data?.message || 'Erro ao enviar formulário')
    }

    alert('Solicitação enviada com sucesso! 🎉\n\nEntraremos em contato em breve para agendar sua consultoria gratuita.')

    // Resetar formulário
    formData.value = {
      nome: '',
      email: '',
      whatsapp: '',
      telefone: '',
      area_desejada: '',
      descricao: ''
    }

  } catch (error) {
    console.error('Erro ao enviar formulário:', error)

    alert(
      'Erro ao enviar sua solicitação. 😕\n\n' +
      'Por favor, tente novamente ou entre em contato diretamente pelo WhatsApp (47) 99189-9212.'
    )
  } finally {
    carregando.value = false
  }
}
</script>

<style scoped>
.contact {
  padding: 96px 0;
  background: #f5f5f5;
}

.dark .contact {
  background: rgba(41, 41, 41, 0.3);
}

.container {
  width: 95%;
  max-width: 1200px;
  margin: 0 auto;
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
  background: linear-gradient(135deg, #121212 0%, #292929 100%);
  padding: 48px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.contact-title {
  font-family: 'Playfair Display', serif;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 24px;
  line-height: 1.2;
}

.contact-subtitle {
  color: #ccc;
  margin-bottom: 48px;
  line-height: 1.6;
  font-size: 16px;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.contact-item {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.contact-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(227, 53, 13, 0.15);
  flex-shrink: 0;
}

.contact-icon {
  color: #e3350d;
}

.contact-item h4 {
  font-weight: 700;
  margin-bottom: 6px;
  font-size: 16px;
  color: white;
}

.contact-item p {
  color: #ccc;
  line-height: 1.6;
  font-size: 14px;
}

.social-links {
  display: flex;
  gap: 20px;
  margin-top: 48px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #e3350d;
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(227, 53, 13, 0.3);
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
  margin-bottom: 10px;
  color: #333;
}

.dark .form-group label {
  color: #e5e5e5;
}

.form-group input,
.form-group select,
.form-group textarea {
  background: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 14px 16px;
  font-family: inherit;
  font-size: 15px;
  transition: all 0.3s;
  color: #333;
}

.dark .form-group input,
.dark .form-group select,
.dark .form-group textarea {
  background: #2a2a2a;
  border-color: #444;
  color: #e5e5e5;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #e3350d;
  box-shadow: 0 0 0 3px rgba(227, 53, 13, 0.1);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #999;
}

.dark .form-group input::placeholder,
.dark .form-group textarea::placeholder {
  color: #777;
}

.form-group select {
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 16px center;
  background-size: 16px;
  padding-right: 40px;
  cursor: pointer;
}

.form-group input:disabled,
.form-group select:disabled,
.form-group textarea:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-submit {
  width: 100%;
  background: #e3350d;
  color: white;
  font-weight: 700;
  padding: 16px 24px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: 0 4px 16px rgba(227, 53, 13, 0.2);
  margin-top: 10px;
}

.btn-submit:hover:not(:disabled) {
  background: #c72d0a;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(227, 53, 13, 0.3);
}

.btn-submit:active:not(:disabled) {
  transform: translateY(0);
}

.btn-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.btn-submit.loading {
  position: relative;
  overflow: hidden;
}

.btn-submit.loading::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.loading-text {
  margin-left: 10px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.form-disclaimer {
  font-size: 12px;
  text-align: center;
  color: #666;
  margin-top: 16px;
  line-height: 1.4;
}

.dark .form-disclaimer {
  color: #aaa;
}

/* Responsividade */
@media (max-width: 1023px) {
  .contact-card {
    display: flex;
    flex-direction: column;
  }
  
  .contact-info,
  .contact-form-wrapper {
    padding: 40px 32px;
  }
  
  .contact-title {
    font-size: 30px;
  }
}

@media (max-width: 767px) {
  .contact {
    padding: 64px 0;
  }
  
  .contact-info,
  .contact-form-wrapper {
    padding: 32px 24px;
  }
  
  .contact-title {
    font-size: 28px;
  }
  
  .form-row {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .social-links {
    justify-content: center;
  }
}

span {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>