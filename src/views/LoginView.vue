<script setup>
import BaseButton from '../components/BaseButton.vue'
</script>

<template>
  <div class="auth-page container">
    <div class="auth-card glass">
      <h1 class="auth-title">Welcome Back</h1>
      <p class="auth-subtitle">Login to manage your tickets and events.</p>
      
      <form class="auth-form" @submit.prevent>
        <div class="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="name@example.com" required>
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" placeholder="••••••••" required>
        </div>
        <div class="auth-actions">
          <BaseButton class="full-width">Login</BaseButton>
        </div>
      </form>
      
      <div class="auth-footer">
        <p>Don't have an account? <router-link to="/auth/register">Register</router-link></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.auth-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
}

.auth-card {
  width: 100%;
  max-width: 450px;
  padding: 3rem;
  border-radius: 1.5rem;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-lg);
}

.auth-title {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  text-align: center;
}

.auth-subtitle {
  color: var(--text-muted);
  text-align: center;
  margin-bottom: 2.5rem;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-main);
}

.form-group input {
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  border: 1px solid var(--border);
  font-family: inherit;
  font-size: 1rem;
}

.form-group input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.full-width {
  width: 100%;
}

.auth-footer {
  margin-top: 2rem;
  text-align: center;
  font-size: 0.875rem;
  color: var(--text-muted);
}

.auth-footer a {
  color: var(--primary);
  font-weight: 600;
}
</style>
