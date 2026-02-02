<script setup>
</script>

<template>
  <header :class="{ dark: isDark }" class="header">
    <div class="container header-content">
      <div class="logo-container">
        <img
          src="../../assets/images/hanna.png"
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
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 1);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.header.dark {
  background: rgba(18, 18, 18, 0.9);
  border-bottom-color: rgba(255, 255, 255, 0.05);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  width: 95%;
  margin: auto;
  /* border: 2px solid red; */
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
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
</style>