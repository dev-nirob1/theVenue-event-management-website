<script setup>
import { ref } from 'vue'
import SectionHeader from '../components/SectionHeader.vue'
import RoomCard from '../components/RoomCard.vue'
import { rooms } from '../data/rooms'
</script>

<template>
  <div class="rooms-page">
    <div class="header-section">
      <div class="container">
        <SectionHeader 
          badge="Exquisite Venues"
          title="Discover Our <br/> World-Class Spaces"
          subtitle="From grand ballrooms to intimate creative studios, find the perfect canvas for your next milestone event."
          theme="light"
        />
      </div>
    </div>

    <section class="rooms-grid-section container">
      <div class="rooms-grid">
        <RoomCard 
          v-for="room in rooms" 
          :key="room.id" 
          :room="room" 
        />
      </div>
    </section>

    <!-- Simple Inquiry CTA -->
    <section class="inquiry-cta container">
      <div class="cta-banner glass">
        <div class="cta-text">
          <h3>Need a custom configuration?</h3>
          <p>Our venue specialists can help you combine spaces or create a bespoke layout for massive events.</p>
        </div>
        <router-link to="/contact" class="btn-inquiry">
          Consult our Experts
        </router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
.rooms-page {
  padding-bottom: 8rem;
}

.header-section {
  padding: 6rem 0 4rem;
  background: linear-gradient(to bottom, #f1f5f9 0%, white 100%);
}

.rooms-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 2.5rem;
  margin-bottom: 6rem;
}

.inquiry-cta {
  margin-top: 2rem;
}

.cta-banner {
  padding: 4rem;
  border-radius: 2.5rem;
  background: var(--text-main);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.cta-text h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: white;
}

.cta-text p {
  color: #94A3B8;
  max-width: 500px;
}

.btn-inquiry {
  background: white;
  color: var(--text-main);
  padding: 1.25rem 2.5rem;
  border-radius: 3rem;
  font-weight: 800;
  white-space: nowrap;
  transition: all 0.3s ease;
}

.btn-inquiry:hover {
  background: var(--primary);
  color: white;
  transform: translateY(-5px);
}

@media (max-width: 1024px) {
  .cta-banner {
    flex-direction: column;
    text-align: center;
    padding: 3rem;
  }
}

@media (max-width: 640px) {
  .rooms-grid {
    grid-template-columns: 1fr;
  }
}
</style>
