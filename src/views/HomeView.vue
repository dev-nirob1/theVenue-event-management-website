<script setup>
import { ref } from 'vue'
import HeroSlider from '../components/HeroSlider.vue'
import EventCard from '../components/EventCard.vue'

const featuredHalls = ref([
  {
    id: 1,
    title: 'Grand Royal Hall',
    date: 'Cap: 1200 Guests',
    location: 'North Wing',
    category: 'Gala/Wedding',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'The Glass Pavilion',
    date: 'Cap: 450 Guests',
    location: 'Rooftop Terrace',
    category: 'Cocktail/Product',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'The Industrial Studio',
    date: 'Cap: 800 Guests',
    location: 'East Wing',
    category: 'Exhibition/Tech',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1522158633578-d19005a2c739?q=80&w=2071&auto=format&fit=crop'
  }
])
</script>

<template>
  <div class="home-page">
    <HeroSlider />

    <!-- Featured Venue Spaces -->
    <section class="featured-section container">
      <div class="section-header">
        <div>
          <h2 class="section-title">Exquisite Event Spaces</h2>
          <p class="section-subtitle">Discover the perfect setting within our world-class convention center.</p>
        </div>
        <router-link to="/events" class="view-all">View all halls →</router-link>
      </div>
      
      <div class="events-grid">
        <EventCard v-for="hall in featuredHalls" :key="hall.id" :event="hall" />
      </div>
    </section>

    <!-- Amenities Section -->
    <section class="services-section container">
       <div class="section-header">
        <h2 class="section-title">Premium Facilities</h2>
        <p class="section-subtitle">Everything you need for a seamless world-class experience.</p>
      </div>
      <div class="services-grid">
        <div class="service-item glass">
          <i class="fas fa-utensils service-icon-alt"></i>
          <h3>In-House Catering</h3>
          <p>Exquisite culinary experiences tailored to your event requirements.</p>
        </div>
        <div class="service-item glass">
          <i class="fas fa-microchip service-icon-alt"></i>
          <h3>High-Tech AV</h3>
          <p>State-of-the-art sound, lighting, and streaming technology in every hall.</p>
        </div>
        <div class="service-item glass">
          <i class="fas fa-shield-alt service-icon-alt"></i>
          <h3>Concierge Security</h3>
          <p>Professional event security and concierge services for your peace of mind.</p>
        </div>
        <div class="service-item glass">
          <i class="fas fa-parking service-icon-alt"></i>
          <h3>Valet Parking</h3>
          <p>Ample secure parking with professional valet service for all guests.</p>
        </div>
      </div>
    </section>

    <!-- Newsletter CTA -->
    <section class="newsletter-section glass container">
      <div class="newsletter-content">
        <h2>Stay in the Loop</h2>
        <p>Subscribe to receive updates about upcoming exhibitions, public shows, and exclusive venue offers.</p>
        <form class="newsletter-form" @submit.prevent>
          <input type="email" placeholder="Enter your email address" required>
          <BaseButton variant="primary">Subscribe</BaseButton>
        </form>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  margin-top: -5rem; 
}

/* Newsletter Section */
.newsletter-section {
  margin: 4rem auto 8rem;
  padding: 5rem 3rem;
  border-radius: 2rem;
  text-align: center;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(244, 63, 94, 0.1));
}

.newsletter-content h2 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.newsletter-content p {
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto 3rem;
  font-size: 1.125rem;
}

.newsletter-form {
  display: flex;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
}

.newsletter-form input {
  flex: 1;
  padding: 1rem 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid var(--border);
  background: white;
  font-family: inherit;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s;
}

.newsletter-form input:focus {
  border-color: var(--primary);
}

@media (max-width: 640px) {
  .newsletter-form {
    flex-direction: column;
  }
}

/* Section Header */
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3.5rem;
}

.section-title {
  font-size: 2.75rem;
  margin-bottom: 0.5rem;
}

.section-subtitle {
  color: var(--text-muted);
  font-size: 1.125rem;
}

.view-all {
  color: var(--primary);
  font-weight: 700;
  padding-bottom: 0.5rem;
}

/* Featured Section */
.featured-section {
  padding: 8rem 1.5rem;
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2.5rem;
}

/* Services Grid */
.services-section {
  padding: 4rem 1.5rem 10rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
}

.service-item {
  padding: 3rem 2rem;
  text-align: left;
  border-radius: 1.5rem;
  transition: all var(--transition-normal);
  border: 1px solid var(--border);
}

.service-item:hover {
  transform: translateY(-8px);
  border-color: var(--primary);
  background: white;
  box-shadow: var(--shadow-lg);
}

.service-icon-alt {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.service-item h3 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.service-item p {
  color: var(--text-muted);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
}
</style>
