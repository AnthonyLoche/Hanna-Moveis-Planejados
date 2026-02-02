<template>
  <section id="galeria" class="gallery">
    <div class="container">
      <div class="gallery-header">
        <div>
          <h2 class="section-title">Nossos Projetos</h2>
          <p class="gallery-subtitle">
            Ambientes reais transformados em sonhos realizados com marcenaria premium.
          </p>
        </div>
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
</template>

<style scoped>
.gallery {
  padding: 96px 0;
  background: white;
}

.dark .gallery {
  background: #121212;
}

.container{
  width: 95%;
  margin: auto;
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
</style>