<script setup>
import { useRoute } from 'vue-router'
import BaseButton from '../components/BaseButton.vue'

const route = useRoute()
const eventId = route.params.id

// Mock data (In a real app, you'd fetch this by ID)
const event = {
  id: eventId,
  title: 'The Grand Ballroom',
  date: 'Capacity: 1200 Guests',
  time: 'Operational: 08:00 - 00:00',
  location: 'North Wing, Level 1',
  address: '124 Event Pl, Royal Docks, London E16 1XL, UK',
  category: 'Social/Gala',
  price: 2500,
  organizer: 'The Venue Management Team',
  description: 'The Grand Ballroom is our flagship venue, offering 15,000 square feet of pillar-less luxury. Featuring artisan-crafted chandeliers, a built-in 4K LED wall, and high-fidelity acoustics, it is the perfect setting for prestigious awards ceremonies, grand weddings, and global summits. The space includes a private VIP entrance, dedicated foyer for receptions, and professional green rooms.',
  image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop'
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
            <span class="meta-item"><i class="fas fa-users"></i> {{ event.date }}</span>
            <span class="meta-item"><i class="far fa-clock"></i> {{ event.time }}</span>
          </div>
        </div>

        <section class="details-section">
          <h2>Space Description</h2>
          <p class="description">{{ event.description }}</p>
        </section>

        <section class="location-section">
          <h2>Find this Suite</h2>
          <div class="location-card glass">
            <div class="map-placeholder">
              <span>📍 Hall Map Integration Placeholder</span>
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
            <span class="label">Rental starts from</span>
            <span class="price">{{ event.price === 0 ? 'Inquire' : `$${event.price}` }}</span>
            <span class="unit">/ full day</span>
          </div>
          <BaseButton size="lg" class="full-width">Inquire About Booking</BaseButton>
          <div class="divider"></div>
          <div class="organizer-info">
            <span class="label">Managed by</span>
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
