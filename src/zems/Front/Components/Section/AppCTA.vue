<script setup>
import { RouterLink } from "vue-router";
import BaseButton from "../Widget/BaseButton.vue";
</script>

<template>
  <section class="app-cta">
    <div class="container">
      <div class="cta-inner">
        <div class="cta-text">
          <h2>Ready to book <br />your next masterpiece?</h2>
          <p>
            Join the ranks of global leaders who choose our space for their
            vision.
          </p>
        </div>
        <div class="cta-btns">
          <RouterLink to="/events">
            <BaseButton variant="primary" size="lg">Explore Venues</BaseButton>
          </RouterLink>
          <RouterLink to="/contact" class="secondary-btn">
            Contact Sales <i class="fas fa-arrow-right"></i>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.app-cta {
  padding: 5rem 0;
  position: relative;
  z-index: 10;
  background: #0f172a;
  margin-bottom: 3rem;
}

.cta-inner {
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}

.cta-text h2 {
  font-size: 3rem;
  font-weight: 900;
  color: white;
  margin-bottom: 1rem;
}

.cta-text p {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.6);
}

.cta-btns {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
}

.secondary-btn {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease-in-out;
}

.secondary-btn:hover {
  background: white;
  color: var(--text-main);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .cta-inner {
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 0;
  }
  .app-cta {
    padding: 3rem 0;
  }
  .cta-text h2 {
    font-size: 2.25rem;
  }
}
</style>
