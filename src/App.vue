<script setup>
import Navbar from './components/layout/Navbar.vue'
</script>

<template>
  <div class="app-wrapper">
    <Navbar />

    <main class="content-area">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="main-footer">
      <div class="container footer-content">
        <div class="footer-brand">
          <div class="logo">
            <span class="logo-icon">V</span>
            <span class="logo-text">The <span class="accent">Venue</span></span>
          </div>
          <p>Crafting unforgettable experiences in the heart of the city.</p>
        </div>
        <div class="footer-links">
          <h4>Explore</h4>
          <router-link to="/events">Venues</router-link>
          <router-link to="/about">Our Story</router-link>
          <router-link to="/contact">Get in Touch</router-link>
        </div>
        <div class="footer-contact">
          <h4>Contact</h4>
          <p>hello@thevenue.com</p>
          <p>+44 20 7946 0000</p>
          <p>London, UK</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 The Venue Management. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style>
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content-area {
  flex: 1;
  padding-top: 5rem; /* Space for fixed navbar */
}

.main-footer {
  background: #0F172A;
  color: white;
  padding: 5rem 0 2rem;
  margin-top: 4rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 4rem;
  margin-bottom: 4rem;
}

.footer-brand .logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.footer-brand p {
  color: var(--text-muted);
  max-width: 300px;
}

.footer-links, .footer-contact {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-links h4, .footer-contact h4 {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: var(--text-muted);
  transition: color 0.3s;
}

.footer-links a:hover {
  color: var(--primary);
}

.footer-contact p {
  color: var(--text-muted);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  text-align: center;
  color: var(--text-muted);
  font-size: 0.875rem;
}

.logo-text .accent {
  background: linear-gradient(to right, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Page Transitions */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
