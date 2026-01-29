<script setup>
import { useRoute } from 'vue-router'
import BaseButton from '../components/BaseButton.vue'

const route = useRoute()
const eventId = route.params.id

// Mock data (In a real app, you'd fetch this by ID)
const event = {
  id: eventId,
  title: 'Horizon Music Festival 2026',
  date: 'Saturday, August 15, 2026',
  time: '18:00 - 23:00',
  location: 'Central Park, NY',
  address: 'Rumsey Playfield, Manhattan, NY 10021',
  category: 'Music',
  price: 49,
  organizer: 'Lumina Events',
  description: 'Join us for an unforgettable night of music under the stars. The Horizon Music Festival brings together the best international and local talent for a celebration of sound, light, and community. Experience immersive art installations, gourmet food trucks, and three stages of non-stop performances.',
  image: 'https://images.unsplash.com/photo-1459749411177-042180ce4372?q=80&w=2070&auto=format&fit=crop'
}
</script>

<template>
  <div class="event-details-page">
    <div class="hero-banner">
      <img :src="event.image" :alt="event.title">
      <div class="hero-overlay"></div>
    </div>

    <div class="container main-content">
      <div class="content-left">
        <div class="info-header">
          <div class="badge">{{ event.category }}</div>
          <h1 class="title">{{ event.title }}</h1>
          <div class="meta-row">
            <span class="meta-item"><i class="far fa-calendar-alt"></i> {{ event.date }}</span>
            <span class="meta-item"><i class="far fa-clock"></i> {{ event.time }}</span>
          </div>
        </div>

        <section class="details-section">
          <h2>About this Event</h2>
          <p class="description">{{ event.description }}</p>
        </section>

        <section class="location-section">
          <h2>Location</h2>
          <div class="location-card glass">
            <div class="map-placeholder">
              <span>📍 Map Integration Placeholder</span>
            </div>
            <div class="location-info">
              <h3>{{ event.location }}</h3>
              <p>{{ event.address }}</p>
            </div>
          </div>
        </section>
      </div>

      <aside class="sidebar">
        <div class="booking-card glass sticky">
          <div class="price-info">
            <span class="label">Tickets starting from</span>
            <span class="price">{{ event.price === 0 ? 'Free' : `$${event.price}` }}</span>
          </div>
          <BaseButton size="lg" class="full-width">Book Tickets Now</BaseButton>
          <div class="divider"></div>
          <div class="organizer-info">
            <span class="label">Organized by</span>
            <div class="organizer-name">{{ event.organizer }}</div>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<style scoped>
.event-details-page {
  padding-bottom: 6rem;
}

.hero-banner {
  height: 50vh;
  position: relative;
  overflow: hidden;
  margin-top: -2rem;
}

.hero-banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, var(--background), transparent);
}

.main-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-top: -100px;
  position: relative;
  z-index: 10;
}

@media (min-width: 992px) {
  .main-content {
    grid-template-columns: 2fr 1fr;
  }
}

.content-left {
  background: white;
  padding: 3rem;
  border-radius: 1.5rem;
  box-shadow: var(--shadow-lg);
}

.info-header {
  margin-bottom: 2.5rem;
}

.badge {
  background: var(--primary);
  color: white;
  padding: 0.25rem 1rem;
  border-radius: 2rem;
  display: inline-block;
  margin-bottom: 1rem;
  font-weight: 600;
  font-size: 0.875rem;
}

.title {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.meta-row {
  display: flex;
  gap: 2rem;
  color: var(--text-muted);
  font-weight: 500;
}

.details-section h2, .location-section h2 {
  font-size: 1.75rem;
  margin: 3rem 0 1.5rem;
}

.description {
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--text-muted);
}

.location-card {
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid var(--border);
}

.map-placeholder {
  height: 250px;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
}

.location-info {
  padding: 1.5rem;
}

.location-info h3 {
  margin-bottom: 0.25rem;
}

.booking-card {
  padding: 2rem;
  border-radius: 1.5rem;
  border: 1px solid var(--border);
  text-align: center;
}

.sticky {
  position: sticky;
  top: 6rem;
}

.price-info {
  margin-bottom: 2rem;
}

.price-info .label {
  display: block;
  font-size: 0.875rem;
  color: var(--text-muted);
  margin-bottom: 0.5rem;
}

.price-info .price {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--accent);
}

.full-width {
  width: 100%;
}

.divider {
  height: 1px;
  background: var(--border);
  margin: 2rem 0;
}

.organizer-info .label {
  font-size: 0.875rem;
  color: var(--text-muted);
}

.organizer-name {
  font-weight: 700;
  font-size: 1.125rem;
  margin-top: 0.5rem;
}
</style>
