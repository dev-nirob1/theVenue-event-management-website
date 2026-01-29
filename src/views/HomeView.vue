<script setup>
import HeroSlider from '../components/HeroSlider.vue'
import VisionSection from '../components/VisionSection.vue'
import FeaturedSpaces from '../components/FeaturedSpaces.vue'
import PremiumFacilities from '../components/PremiumFacilities.vue'
import BaseButton from '../components/BaseButton.vue'
</script>

<template>
  <div class="home-page">
    <HeroSlider />

    <!-- Vision & Philosophy Section -->
    <VisionSection />

    <!-- Featured Venue Spaces -->
    <FeaturedSpaces />

    <!-- Premium Facilities -->
    <PremiumFacilities />

    <!-- Newsletter CTA -->
    <section class="newsletter-section-fancy">
      <div class="container">
        <div class="newsletter-card glass">
          <div class="newsletter-glow"></div>
          <div class="newsletter-content-inner">
            <div class="icon-circle">
              <i class="fas fa-paper-plane"></i>
            </div>
            <h2 class="title">Stay in the Arena</h2>
            <p class="subtitle">Join our exclusive circle of event planners and industry leaders. Receive quarterly insights on event technology and venue innovations.</p>
            <form class="newsletter-form-fancy" @submit.prevent>
              <div class="input-group-fancy">
                <input type="email" placeholder="Your executive email" required>
                <BaseButton variant="primary" class="btn-glow">Subscribe Now</BaseButton>
              </div>
            </form>
            <p class="privacy-note">Zero spam. Only world-class inspiration.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  margin-top: -5rem; 
}

/* Fancy Newsletter Section */
.newsletter-section-fancy {
  padding: 8rem 0;
  background: white;
  position: relative;
}

.newsletter-card {
  position: relative;
  padding: 6rem 4.5rem;
  border-radius: 3rem;
  background: #1E293B; /* Slate 800 */
  text-align: left;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 40px 80px -20px rgba(15, 23, 42, 0.3);
}

.newsletter-glow {
  position: absolute;
  top: -50%;
  right: -20%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%);
  z-index: 0;
}

.newsletter-content-inner {
  position: relative;
  z-index: 1;
  max-width: 700px;
}

.icon-circle {
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
  font-size: 2rem;
  color: var(--primary);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.newsletter-card .title {
  color: white;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 900;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
}

.newsletter-card .subtitle {
  color: #94A3B8;
  font-size: 1.125rem;
  line-height: 1.7;
  margin-bottom: 3.5rem;
}

.newsletter-form-fancy {
  max-width: 550px;
  margin-bottom: 2.5rem;
}

.input-group-fancy {
  display: flex;
  gap: 1rem;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.25rem;
  backdrop-filter: blur(10px);
}

.input-group-fancy input {
  flex: 1;
  background: transparent;
  border: none;
  padding: 1rem 1.5rem;
  color: white;
  font-family: inherit;
  font-size: 1rem;
  outline: none;
}

.btn-glow {
  border-radius: 1rem;
  padding: 0 2rem;
  font-weight: 800;
  box-shadow: 0 10px 20px rgba(99, 102, 241, 0.2);
  white-space: nowrap;
}

.privacy-note {
  font-size: 0.8rem;
  color: #64748B;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

@media (max-width: 640px) {
  .input-group-fancy {
    flex-direction: column;
    background: transparent;
    border: none;
    padding: 0;
    gap: 1.5rem;
  }
  
  .input-group-fancy input {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 1rem;
  }
  
  .btn-glow {
    padding: 1.25rem;
  }
}
</style>
