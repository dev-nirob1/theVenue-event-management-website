<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="auth-layout">
    <header class="auth-header">
      <div class="container">
        <RouterLink to="/" class="back-home">
          <i class="fas fa-arrow-left"></i>
          <span>Back to Home</span>
        </RouterLink>
      </div>
    </header>

    <main class="auth-main">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.auth-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--bg-primary);
}

.auth-header {
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--border);
}

.back-home {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 0.875rem;
  color: var(--text-secondary);
  transition: all 0.3s ease;
}

.back-home:hover {
  color: var(--primary);
  transform: translateX(-2px);
}

.back-home i {
  font-size: 0.75rem;
}

.auth-main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
}
</style>
