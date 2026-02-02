<script setup>
import { ref } from "vue";
import BaseButton from "../../Front/Components/Widget/BaseButton.vue";

const fullName = ref("");
const email = ref("");
const password = ref("");

const handleRegister = () => {
  console.log("Register attempt", {
    fullName: fullName.value,
    email: email.value,
    password: password.value,
  });
};
</script>

<template>
  <div class="auth-container">
    <div class="auth-card">
      <div class="auth-header">
        <h1>Create Account</h1>
        <p>Join us to start booking amazing events</p>
      </div>

      <form @submit.prevent="handleRegister" class="auth-form">
        <div class="form-group">
          <label for="fullName">Full Name</label>
          <input
            id="fullName"
            v-model="fullName"
            type="text"
            placeholder="John Doe"
            required
          />
        </div>

        <div class="form-group">
          <label for="email">Email Address</label>
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="name@example.com"
            required
          />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="••••••••"
            required
          />
        </div>

        <BaseButton type="submit" variant="primary" class="submit-btn">
          Create Account
        </BaseButton>
      </form>

      <div class="auth-footer">
        <p>
          Already have an account?
          <router-link to="/auth/login">Login</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.auth-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 80px);
  padding: 2rem 1rem;
}

.auth-card {
  width: 650px;
  max-width: 95%;
  padding: 2.5rem;
  background: var(--bg-primary);
  border: 1px solid var(--border);
  border-radius: 1rem;
  box-shadow: var(--shadow-lg);
}

.auth-header {
  text-align: center;
  margin-bottom: 2rem;
}

.auth-header h1 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--text-main);
}

.auth-header p {
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-main);
}

.form-group input {
  width: 100%;
  padding: 0.875rem 1rem;
  font-size: 1rem;
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  background: var(--bg-primary);
  color: var(--text-main);
  transition: all 0.3s ease;
}

.form-group input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.form-group input::placeholder {
  color: var(--text-muted);
}

.submit-btn {
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.875rem;
  font-size: 1rem;
  font-weight: 600;
}

.auth-footer {
  margin-top: 1.5rem;
  text-align: center;
  border-top: 1px solid var(--border);
}

.auth-footer p {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.auth-footer a {
  color: var(--primary);
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease;
}

.auth-footer a:hover {
  color: var(--primary-dark);
  text-decoration: underline;
}

/* Responsive */
@media (max-width: 768px) {
  .auth-container {
    padding: 2rem 1.5rem;
    min-height: calc(100vh - 60px);
  }

  .auth-card {
    width: 100%;
    max-width: 100%;
    padding: 2rem 1.5rem;
  }

  .auth-header h1 {
    font-size: 1.75rem;
  }

  .auth-header p {
    font-size: 0.875rem;
  }
}
</style>
