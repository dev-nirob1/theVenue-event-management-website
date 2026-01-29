<script setup>
import { ref } from 'vue'
import HeroSlider from '../components/HeroSlider.vue'
import EventCard from '../components/EventCard.vue'

const featuredVenues = ref([
  {
    id: 1,
    title: 'The Sky Loft',
    date: 'Available from Mar 2026',
    location: 'Central London',
    category: 'Corporate',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Ivy Garden Manor',
    date: 'Available from Jun 2026',
    location: 'Surrey, UK',
    category: 'Wedding',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Industrial Warehouse X',
    date: 'Year-round access',
    location: 'Shoreditch, London',
    category: 'Modern',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1522158633578-d19005a2c739?q=80&w=2071&auto=format&fit=crop'
  }
])
</script>

<template>
  <div class="home-page">
    <HeroSlider />

    <!-- Featured Venues Section -->
    <section class="featured-section container">
      <div class="section-header">
        <div>
          <h2 class="section-title">Prestigious Venues</h2>
          <p class="section-subtitle">Exclusively curated locations for your next milestone.</p>
        </div>
        <router-link to="/events" class="view-all">Explore all venues →</router-link>
      </div>
      
      <div class="events-grid">
        <EventCard v-for="event in featuredVenues" :key="event.id" :event="event" />
      </div>
    </section>

    <!-- Services Section -->
    <section class="services-section container">
       <div class="section-header">
        <h2 class="section-title">Our Management Services</h2>
      </div>
      <div class="services-grid">
        <div class="service-item glass">
          <i class="fas fa-handshake service-icon-alt"></i>
          <h3>Corporate Events</h3>
          <p>Professional planning for conferences, product launches, and gala dinners.</p>
        </div>
        <div class="service-item glass">
          <i class="fas fa-heart service-icon-alt"></i>
          <h3>Private Weddings</h3>
          <p>Bespoke wedding planning service tailored to your unique love story.</p>
        </div>
        <div class="service-item glass">
          <i class="fas fa-search-location service-icon-alt"></i>
          <h3>Venue Sourcing</h3>
          <p>Finding the perfect backdrop for your event from our exclusive network.</p>
        </div>
        <div class="service-item glass">
          <i class="fas fa-magic service-icon-alt"></i>
          <h3>Full Production</h3>
          <p>AV, lighting, catering, and logistics handled by our expert team.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  margin-top: -5rem; /* Offset App.vue padding to make slider flush with top */
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
