<script setup>
import { ref } from 'vue'
import SectionHeader from './SectionHeader.vue'
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
  <section class="featured-spaces container">
    <SectionHeader 
      badge="Featured Spaces"
      title="Architectural <br/> Venue Masterpieces"
      subtitle="Curated high-performance environments engineered for inspiration."
      theme="light"
    />
    
    <div class="section-actions" style="margin-top: -1.5rem; margin-bottom: 3rem;">
      <router-link to="/events" class="explore-all-btn">
        <span>Explore All Halls</span>
        <i class="fas fa-long-arrow-alt-right"></i>
      </router-link>
    </div>
    
    <div class="bento-reveal-grid">
      <div 
        v-for="(hall, index) in featuredHalls" 
        :key="hall.id" 
        :class="['bento-node', `size-${hall.size}`, `delay-${index}`]"
      >
        <EventCard :event="hall" :variant="hall.size" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.featured-spaces {
  padding: 8rem 0;
  position: relative;
}

.explore-all-btn {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-weight: 800;
  color: var(--text-main);
  font-size: 1.125rem;
  transition: all 0.3s ease;
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

/* Bento Reveal Grid */
.bento-reveal-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 300px;
  gap: 2rem;
}

.bento-node {
  position: relative;
  opacity: 0;
  transform: translateY(30px);
  animation: revealUp 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
}

.size-large { grid-column: span 2; grid-row: span 2; }
.size-medium { grid-column: span 2; grid-row: span 1; }
.size-small { grid-column: span 1; grid-row: span 1; }

.delay-0 { animation-delay: 0.1s; }
.delay-1 { animation-delay: 0.2s; }
.delay-2 { animation-delay: 0.3s; }
.delay-3 { animation-delay: 0.4s; }

@keyframes revealUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 1024px) {
  .bento-reveal-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .featured-spaces {
    padding: 6rem 1.5rem;
  }
  
  .bento-reveal-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(400px, auto);
  }
  
  .size-large, .size-medium, .size-small {
    grid-column: span 1;
    grid-row: span 1;
  }
}
</style>
