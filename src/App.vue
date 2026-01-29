<template>
  <header class="main-nav">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/events">Events</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/auth/login">Login</router-link>
    </nav>
  </header>

  <main>
    <router-view />
  </main>

  <footer class="main-footer">
    <p>&copy; 2026 Eventify. All rights reserved.</p>
  </footer>
</template>

<style>
.main-nav {
  padding: 1rem;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid #eee;
}

.main-nav nav {
  display: flex;
  gap: 2rem;
  justify-content: center;
}

.main-nav a {
  text-decoration: none;
  color: #0F172A;
  font-weight: 500;
  transition: color 0.3s;
}

.main-nav a:hover,
.main-nav a.router-link-active {
  color: #6366F1;
}

main {
  min-height: 80vh;
  padding: 2rem;
}

.main-footer {
  text-align: center;
  padding: 2rem;
  background: #0F172A;
  color: white;
}
</style>
