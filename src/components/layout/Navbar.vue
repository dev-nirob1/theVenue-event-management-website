<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import BaseButton from '../BaseButton.vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <header :class="['navbar-container', { 'is-scrolled': isScrolled }]">
    <nav class="navbar container">
      <router-link to="/" class="logo">
        <span class="logo-icon">V</span>
        <span class="logo-text">The <span class="accent">Venue</span></span>
      </router-link>

      <!-- Desktop Nav -->
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/events">Venues</router-link></li>
        <li><router-link to="/about">Our Story</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>

      <div class="nav-actions">
        <router-link to="/auth/login" class="login-link">Login</router-link>
        <BaseButton size="md">Plan Your Event</BaseButton>
        <button class="mobile-toggle" @click="toggleMobileMenu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu Overlay -->
    <transition name="fade">
      <div v-if="isMobileMenuOpen" class="mobile-menu-overlay" @click="toggleMobileMenu">
        <div class="mobile-menu glass" @click.stop>
          <ul class="mobile-nav-links">
            <li><router-link to="/" @click="toggleMobileMenu">Home</router-link></li>
            <li><router-link to="/events" @click="toggleMobileMenu">Venues</router-link></li>
            <li><router-link to="/about" @click="toggleMobileMenu">Our Story</router-link></li>
            <li><router-link to="/contact" @click="toggleMobileMenu">Contact</router-link></li>
            <li><router-link to="/auth/login" @click="toggleMobileMenu">Login</router-link></li>
          </ul>
          <BaseButton class="full-width">Plan Your Event</BaseButton>
        </div>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.navbar-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1.5rem 0;
  transition: all var(--transition-normal);
}

.navbar-container.is-scrolled {
  padding: 0.75rem 0;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: var(--shadow-md);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 1.5rem;
  color: var(--text-main);
  text-decoration: none;
}

.logo-icon {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.75rem;
  font-size: 1.25rem;
}

.logo-text .accent {
  background: linear-gradient(to right, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text; /* Compatible property */
}

.nav-links {
  display: none;
  list-style: none;
  gap: 2.5rem;
}

@media (min-width: 992px) {
  .nav-links {
    display: flex;
  }
}

.nav-links a {
  font-weight: 600;
  color: var(--text-main);
  transition: color var(--transition-fast);
  position: relative;
  padding: 0.5rem 0;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary);
  transition: width var(--transition-fast);
}

.nav-links a:hover {
  color: var(--primary);
}

.nav-links a:hover::after,
.nav-links a.router-link-active::after {
  width: 100%;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.login-link {
  font-weight: 600;
  color: var(--text-main);
}

.mobile-toggle {
  display: flex;
  flex-direction: column;
  gap: 5px;
  z-index: 1100;
}

@media (min-width: 992px) {
  .mobile-toggle {
    display: none;
  }
}

.mobile-toggle .bar {
  width: 25px;
  height: 2px;
  background-color: var(--text-main);
  transition: all 0.3s;
}

/* Mobile Menu */
.mobile-menu-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
  z-index: 1050;
  display: flex;
  justify-content: flex-end;
}

.mobile-menu {
  width: 80%;
  max-width: 300px;
  height: 100%;
  padding: 5rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.mobile-nav-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.mobile-nav-links a {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-main);
}

.full-width {
  width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
