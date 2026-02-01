<script setup>
import { RouterLink } from "vue-router";
import BaseButton from "../Widget/BaseButton.vue";

defineProps({
  showExplore: {
    type: Boolean,
    default: true,
  },
});
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
          <RouterLink v-if="showExplore" to="/rooms">
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
  padding: 3rem 0;
  position: relative;
  z-index: 100;
  margin-bottom: -7rem; /* This creates the overlap with the footer */
}

.cta-inner {
  padding: 4rem 3rem;
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  border-radius: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

.cta-text {
  flex: 1;
  min-width: 300px; /* Prevent text from squashing too much */
  margin-right: 2rem;
}

.cta-text h2 {
  font-size: 2.75rem;
  font-weight: 900;
  color: white;
  margin-bottom: 1rem;
}

.cta-text p {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.6);
}

.cta-btns {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.25rem;
  flex-shrink: 0;
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
    align-items: center;
    text-align: center;
  }
  .app-cta {
    padding: 3rem 0;
  }
  .cta-text h2 {
    font-size: 2rem;
  }
}
</style>
