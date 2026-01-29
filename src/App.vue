<script setup>
import Navbar from './components/layout/Navbar.vue'
import TheFooter from './components/layout/TheFooter.vue'
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

    <TheFooter />
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

/* Shared Utility for Logo Text (Used in Navbar and Footer) */
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
