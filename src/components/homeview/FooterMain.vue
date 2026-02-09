<script setup>
// Importe os ícones
import Instagram from 'vue-material-design-icons/Instagram.vue';
import Whatsapp from 'vue-material-design-icons/Whatsapp.vue';
import MapMarker from 'vue-material-design-icons/MapMarker.vue';
import Phone from 'vue-material-design-icons/Phone.vue';
import Email from 'vue-material-design-icons/Email.vue';
import Leaf from 'vue-material-design-icons/Leaf.vue';
import Facebook from 'vue-material-design-icons/Facebook.vue';
</script>

<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-col">
                    <img src="../../assets/images/hanna.png"
                        alt="Logo" class="footer-logo" />
                    <p class="footer-description">
                        Excelência em móveis planejados de alto padrão. Unimos o design contemporâneo à
                        consciência ambiental para transformar seu lar.
                    </p>
                    <div class="footer-social">
                        <a href="https://www.facebook.com/hannamoveisplanejados" target="_blank" class="social-link" aria-label="Website">
                            <Facebook :size="20" />
                        </a>
                        <a href="https://www.instagram.com/hannamoveisplanejados/" target="_blank" class="social-link" aria-label="Instagram">
                            <Instagram :size="20" />
                        </a>
                        <a href="https://wa.me/5547991899212" target="_blank" class="social-link" aria-label="WhatsApp">
                            <Whatsapp :size="20" />
                        </a>
                    </div>
                </div>
                <div class="footer-col">
                    <h4 class="footer-heading">Informações</h4>
                    <ul class="footer-list">
                        <li class="footer-list-item">
                            <MapMarker :size="16" class="footer-list-icon" />
                            <span>Av. Cel. Procópio Gomes, 254 - Bucarein, Joinville - SC<br />CEP: 89202-300</span>
                        </li>
                        <li class="footer-list-item">
                            <Phone :size="16" class="footer-list-icon" />
                            <span>(47) 99189-9212</span>
                        </li>
                        <li class="footer-list-item">
                            <Email :size="16" class="footer-list-icon" />
                            <span>contato@hannamoveisplanejados.com.br</span>
                        </li>
                        <li class="whatsapp-item">
                            <a href="https://wa.me/5547991899212" class="whatsapp-link">
                                <Whatsapp :size="16" class="whatsapp-icon" />
                                <span>WhatsApp Comercial</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4 class="footer-heading">Horário de Atendimento</h4>
                    <ul class="footer-schedule">
                        <li class="schedule-item">
                            <span>Segunda a Sexta</span>
                            <strong>08h às 18h</strong>
                        </li>
                        <li class="schedule-item">
                            <span>Sábados</span>
                            <strong>09h às 13h</strong>
                        </li>
                    </ul>
                    <div class="sustainability-badge">
                        <Leaf :size="16" class="badge-icon" />
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
                    <span>© 2026 HANNA MÓVEIS PLANEJADOS</span>
                    <span class="separator">|</span>
                    <span>TODOS OS DIREITOS RESERVADOS</span>
                    <span class="separator">|</span>
                    <span>Feito e Desenvolvido por: <a href="https://my-portfolio-anthonygabriel.vercel.app/" class="link" target="_blank"> Anthony Gabriel</a></span>
                </div>
                <div class="footer-brand">
                    <strong>UMA MARCA DURAN GROUP</strong>
                    <a>POLÍTICA DE PRIVACIDADE</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    background: white;
    padding: 48px 0 24px;
    border-top: 1px solid #e5e5e5;
    color: #292929;
}

.link{
    text-decoration: none;
    color: #e3350d;
    font-weight: 600;
    margin-left: .3rem;
}

.container {
    margin: auto;
    width: 93%;
}

.footer-grid {
    display: grid;
    gap: 48px;
    margin-bottom: 48px;
}

@media (min-width: 768px) {
    .footer-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .footer-grid {
        grid-template-columns: repeat(4, 1fr);
        gap: 64px;
    }
}

.footer-logo {
    height: 44px;
    width: auto;
    object-fit: contain;
    margin-bottom: 24px;
}

.footer-description {
    font-size: 14px;
    line-height: 1.7;
    max-width: 320px;
    margin-bottom: 24px;
    color: #666;
}

.dark .footer-description {
    color: #999;
}

.footer-social {
    display: flex;
    gap: 16px;
}

.social-link {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #e5e5e5;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #666;
    transition: all 0.3s ease;
    color: #e3350d;

}

.social-link:hover {
    background: #e3350d;
    border-color: #e3350d;
    color: white;
    transform: translateY(-3px);
}

.social-link.web:hover {
    background: #333;
    border-color: #333;
}

.social-link.instagram:hover {
    background: #E4405F;
    border-color: #E4405F;
}

.dark .social-link {
    border-color: #444;
    color: #999;
}

.footer-heading {
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 24px;
    color: #333;
}

.dark .footer-heading {
    color: #e5e5e5;
}

.footer-list,
.footer-links,
.footer-schedule {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.footer-list-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    font-size: 14px;
    line-height: 1.6;
    color: #666;
}

.dark .footer-list-item {
    color: #999;
}

.footer-list-icon {
    color: #e3350d;
    flex-shrink: 0;
    margin-top: 2px;
}

.footer-schedule {
    gap: 12px;
}

.schedule-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    padding-bottom: 12px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    color: #666;
}

.dark .schedule-item {
    border-bottom-color: rgba(255, 255, 255, 0.05);
    color: #999;
}

.schedule-item strong {
    color: #333;
    font-weight: 600;
}

.dark .schedule-item strong {
    color: #e5e5e5;
}

.whatsapp-item {
    padding-top: 12px;
}

.whatsapp-link {
    background: rgba(227, 53, 13, 0.05);
    padding: 12px 16px;
    border-radius: 8px;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: #e3350d;
    font-weight: 600;
    font-size: 14px;
    transition: background-color 0.3s;
}

.whatsapp-link:hover {
    background: rgba(227, 53, 13, 0.1);
}

.whatsapp-icon {
    color: #e3350d;
}

.sustainability-badge {
    margin-top: 24px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #666;
    padding: 10px 16px;
    background: rgba(76, 175, 80, 0.05);
    border-radius: 8px;
    border: 1px solid rgba(76, 175, 80, 0.1);
}

.dark .sustainability-badge {
    color: #999;
    background: rgba(76, 175, 80, 0.1);
    border-color: rgba(76, 175, 80, 0.2);
}

.badge-icon {
    color: #4CAF50;
}

.footer-links a {
    color: #666;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s;
    display: flex;
    align-items: center;
    padding: 4px 0;
}

.footer-links a:hover {
    color: #e3350d;
}

.dark .footer-links a {
    color: #999;
}

.footer-bottom {
    padding-top: 32px;
    border-top: 1px solid #e5e5e5;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    color: #999;
    font-weight: 500;
    letter-spacing: 0.02em;
}

@media (min-width: 768px) {
    .footer-bottom {
        flex-direction: row;
    }
}

.dark .footer-bottom {
    border-top-color: #333;
}

.footer-copyright {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    text-align: center;
}

@media (min-width: 768px) {
    .footer-copyright {
        flex-direction: row;
        gap: 16px;
        text-align: left;
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
    flex-direction: column;
    gap: 12px;
    align-items: center;
    text-align: center;
}

@media (min-width: 768px) {
    .footer-brand {
        flex-direction: row;
        gap: 24px;
        text-align: left;
    }
}

.footer-brand strong {
    color: #333;
    font-weight: 600;
}

.dark .footer-brand strong {
    color: #999;
}

.footer-brand a {
    color: #666;
    text-decoration: none;
    transition: color 0.3s;
    font-size: 12px;
}

.footer-brand a:hover {
    color: #e3350d;
}

.dark .footer-brand a {
    color: #999;
}

/* Dark mode */
.dark .footer {
    background: #121212;
    border-top-color: #333;
    color: #e5e5e5;
}

.dark .social-link {
    border-color: #444;
    color: #999;
}

.dark .social-link:hover {
    color: white;
}

.dark .footer-heading {
    color: #e5e5e5;
}

.dark .footer-list-item {
    color: #999;
}

.dark .schedule-item {
    color: #999;
}

.dark .schedule-item strong {
    color: #e5e5e5;
}

.dark .footer-links a {
    color: #999;
}

.dark .footer-links a:hover {
    color: #e3350d;
}

.dark .footer-bottom {
    color: #999;
    border-top-color: #333;
}
span{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>