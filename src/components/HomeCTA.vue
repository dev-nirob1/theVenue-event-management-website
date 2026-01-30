<script setup>
import BaseButton from './BaseButton.vue'
</script>

<template>
  <section class="home-cta">
    <div class="container">
      <div class="cta-card glass">
        <div class="cta-content">
          <h2 class="cta-title">Ready to Create <br/> Something Extraordinary?</h2>
          <p class="cta-subtitle">Secure your date at the city's most prestigious venue.</p>
          <div class="cta-actions">
            <BaseButton variant="primary" class="btn-giant">Start Your Booking</BaseButton>
            <router-link to="/contact" class="contact-link">Contact Sales Team</router-link>
          </div>
        </div>
        <div class="cta-visual">
          <div class="glow-sphere"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-cta {
  padding: 6rem 0 10rem;
}

.cta-card {
  background: #0F172A;
  border-radius: 3rem;
  padding: 6rem 5rem;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
}

.cta-content {
  position: relative;
  z-index: 2;
  flex: 1;
}

.cta-title {
  color: white;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.cta-subtitle {
  color: #94A3B8;
  font-size: 1.25rem;
  margin-bottom: 3.5rem;
  max-width: 500px;
}

.cta-actions {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.btn-giant {
  padding: 1.5rem 3rem;
  font-size: 1.125rem;
  border-radius: 4rem;
}

.contact-link {
  color: white;
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 8px;
  transition: opacity 0.3s ease;
}

.contact-link:hover {
  opacity: 0.7;
}

.cta-visual {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 50%;
  pointer-events: none;
}

.glow-sphere {
  position: absolute;
  top: 50%;
  right: -10%;
  transform: translateY(-50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%);
}

@media (max-width: 1024px) {
  .cta-card {
    padding: 4rem 3rem;
    flex-direction: column;
    text-align: center;
  }
  
  .cta-actions {
    flex-direction: column;
    gap: 2rem;
  }
  
  .cta-subtitle {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
