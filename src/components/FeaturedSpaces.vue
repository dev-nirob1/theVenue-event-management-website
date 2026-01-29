<script setup>
import { ref } from 'vue'
import EventCard from './EventCard.vue'

const featuredHalls = ref([
  {
    id: 1,
    title: 'Grand Royal Hall',
    date: 'Cap: 1200 Guests',
    location: 'North Wing',
    category: 'Gala/Wedding',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop',
    size: 'large'
  },
  {
    id: 2,
    title: 'Sky Pavilion',
    date: 'Cap: 450 Guests',
    location: 'Rooftop Terrace',
    category: 'Cocktail',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
    size: 'medium'
  },
  {
    id: 3,
    title: 'Industrial Studio',
    date: 'Cap: 800 Guests',
    location: 'East Wing',
    category: 'Exhibition',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1522158633578-d19005a2c739?q=80&w=2071&auto=format&fit=crop',
    size: 'small'
  },
  {
    id: 4,
    title: 'Tech Lab Suite',
    date: 'Cap: 200 Guests',
    location: 'West Wing',
    category: 'Workshop',
    price: 900,
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd458ad20?q=80&w=2070&auto=format&fit=crop',
    size: 'small'
  }
])
</script>

<template>
  <section class="featured-section container">
    <div class="section-badge">Featured Spaces</div>
    <div class="section-header">
      <div class="header-content">
        <h2 class="section-title">Architectural <br/><span class="text-gradient">Masterpieces</span></h2>
        <p class="section-subtitle">A curated selection of our most iconic halls, designed for unparalleled event experiences.</p>
        <router-link to="/events" class="explore-all-btn">
          <span>Explore All Halls</span>
          <i class="fas fa-long-arrow-alt-right"></i>
        </router-link>
      </div>
    </div>
    
    <div class="bento-grid">
      <div 
        v-for="hall in featuredHalls" 
        :key="hall.id" 
        :class="['grid-item', `size-${hall.size}`]"
      >
        <EventCard :event="hall" :variant="hall.size" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.featured-section {
  padding: 6rem 0 8rem;
}

.section-badge {
  display: inline-block;
  padding: 0.5rem 1.25rem;
  background: rgba(99, 102, 241, 0.1);
  color: var(--primary);
  border-radius: 2rem;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 2rem;
}

.section-header {
  margin-bottom: 5rem;
}

.header-content {
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.section-title {
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  margin-bottom: 1.5rem;
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.03em;
}

.section-subtitle {
  color: var(--text-muted);
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.6;
  max-width: 500px;
  margin-bottom: 2rem;
}

.explore-all-btn {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-weight: 800;
  color: var(--text-main);
  font-size: 1.125rem;
  transition: all 0.3s ease;
  padding: 1rem 0;
  margin-top: 1rem;
}

.explore-all-btn i {
  color: var(--primary);
  font-size: 1.5rem;
  transition: transform 0.3s ease;
}

.explore-all-btn:hover {
  color: var(--primary);
}

.explore-all-btn:hover i {
  transform: translateX(10px);
}

/* Bento Grid System */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 250px;
  gap: 1.5rem;
}

.grid-item {
  position: relative;
}

.size-large {
  grid-column: span 2;
  grid-row: span 2;
}

.size-medium {
  grid-column: span 2;
  grid-row: span 1;
}

.size-small {
  grid-column: span 1;
  grid-row: span 1;
}

@media (max-width: 1024px) {
  .bento-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 300px;
  }
}

@media (max-width: 768px) {
  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }
  
  .bento-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(350px, auto);
  }
  
  .size-large, .size-medium, .size-small {
    grid-column: span 1;
    grid-row: span 1;
  }
}
</style>
