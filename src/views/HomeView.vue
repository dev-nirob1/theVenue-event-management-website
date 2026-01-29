<script setup>
import { ref } from 'vue'
import BaseButton from '../components/BaseButton.vue'
import EventCard from '../components/EventCard.vue'

const featuredEvents = ref([
  {
    id: 1,
    title: 'Horizon Music Festival 2026',
    date: 'Aug 15, 2026',
    location: 'Central Park, NY',
    category: 'Music',
    price: 49,
    image: 'https://images.unsplash.com/photo-1459749411177-042180ce4372?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'TechNova Conference',
    date: 'Sep 10, 2026',
    location: 'Silicon Valley, CA',
    category: 'Technology',
    price: 199,
    image: 'https://images.unsplash.com/photo-1540575861501-7ad0582371f3?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Modern Art Gala',
    date: 'Oct 05, 2026',
    location: 'The Met, NY',
    category: 'Art',
    price: 0,
    image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2070&auto=format&fit=crop'
  }
])
</script>

<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container hero-content">
        <h1 class="hero-title">Experience <span class="text-gradient">Unforgettable</span> Events</h1>
        <p class="hero-subtitle">Discover, book, and host events that matter. Your gateway to the world's most exciting gatherings.</p>
        <div class="hero-actions">
          <router-link to="/events">
            <BaseButton size="lg">Explore Events</BaseButton>
          </router-link>
          <BaseButton variant="outline" size="lg">Host an Event</BaseButton>
        </div>
      </div>
      <div class="hero-bg-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
      </div>
    </section>

    <!-- Featured Events Section -->
    <section class="featured-section container">
      <div class="section-header">
        <h2 class="section-title">Featured Events</h2>
        <router-link to="/events" class="view-all">View all events →</router-link>
      </div>
      
      <div class="events-grid">
        <EventCard v-for="event in featuredEvents" :key="event.id" :event="event" />
      </div>
    </section>

    <!-- Categories Section -->
    <section class="categories-section container">
       <div class="section-header">
        <h2 class="section-title">Browse by Category</h2>
      </div>
      <div class="categories-grid">
        <div class="category-item glass">
          <span class="category-icon">🎸</span>
          <h3>Music</h3>
        </div>
        <div class="category-item glass">
          <span class="category-icon">💻</span>
          <h3>Tech</h3>
        </div>
        <div class="category-item glass">
          <span class="category-icon">🎨</span>
          <h3>Art</h3>
        </div>
        <div class="category-item glass">
          <span class="category-icon">🏃</span>
          <h3>Sports</h3>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  margin-top: -2rem; /* Offset App.vue padding */
}

.hero {
  position: relative;
  padding: 8rem 0 10rem;
  background: var(--text-main);
  color: white;
  overflow: hidden;
  text-align: center;
}

.hero-content {
  position: relative;
  z-index: 10;
}

.hero-title {
  font-size: clamp(3rem, 8vw, 5rem);
  margin-bottom: 1.5rem;
  line-height: 1.1;
}

.text-gradient {
  background: linear-gradient(to right, #6366F1, #F43F5E);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto 3rem;
  opacity: 0.9;
}

.hero-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}

/* Hero Background Shapes */
.hero-bg-shapes .shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
}

.shape-1 {
  width: 400px;
  height: 400px;
  background: var(--primary);
  top: -100px;
  right: -50px;
}

.shape-2 {
  width: 300px;
  height: 300px;
  background: var(--secondary);
  bottom: -50px;
  left: -50px;
}

/* Section Header */
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.5rem;
}

.view-all {
  color: var(--primary);
  font-weight: 600;
}

/* Events Grid */
.featured-section {
  padding: 6rem 1.5rem;
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

/* Categories Grid */
.categories-section {
  padding: 4rem 1.5rem 8rem;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
}

.category-item {
  padding: 2.5rem;
  text-align: center;
  border-radius: 1.5rem;
  transition: all var(--transition-normal);
  cursor: pointer;
  border: 1px solid var(--border);
}

.category-item:hover {
  transform: translateY(-5px);
  border-color: var(--primary);
  background: white;
  box-shadow: var(--shadow-md);
}

.category-icon {
  font-size: 3rem;
  display: block;
  margin-bottom: 1rem;
}
</style>
