<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-col">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCf64EPxSzXRBz2oLH1J5P5KH9SH1TnaVdmhRx8_6l4itBLZYgztaeB7eZnalZHsw0HNBsLwN5NaDS03iydgqlBGg07ZN6zRfKWFk7JECrD3rFcN9YMejAlnX6ny_pM-KtokUljK9HFLg2LM-gru59CoSzC4U6-Py713xX1_cxNyZvEG0TIPh_-1EOOateCYRLDsGHqMBPOUBR_jP-Rp-PoDhBHnMi_8yEB4Pr3WWn4F_zhme_m5hG0o6-JjLTZ6ypBhhXET6w0Chg"
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
                    <span>© 2026 HANNA MÓVEIS PLANEJADOS</span>
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
</template>

<style scoped>
.footer {
    background: white;
    padding: 48px 0 24px;
    border-top: 1px solid #e5e5e5;
    color: #292929;

}

.container {
    margin: auto;
    width: 95%;
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
</style>