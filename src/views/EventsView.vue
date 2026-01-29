<script setup>
import { ref, computed } from 'vue'
import EventCard from '../components/EventCard.vue'

const searchQuery = ref('')
const selectedCategory = ref('All')

const categories = ['All', 'Music', 'Technology', 'Art', 'Sports', 'Social']

const events = ref([
  { id: 1, title: 'The Grand Ballroom', date: 'Capacity: 1200', location: 'North Wing', category: 'Social', price: 2500, image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop' },
  { id: 2, title: 'The Sky Pavilion', date: 'Capacity: 450', location: 'Rooftop', category: 'Social', price: 1800, image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop' },
  { id: 3, title: 'Conference Suite A', date: 'Capacity: 200', location: 'East Wing', category: 'Technology', price: 800, image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop' },
  { id: 4, title: 'The Industrial Hall', date: 'Capacity: 800', location: 'West Wing', category: 'Art', price: 1500, image: 'https://images.unsplash.com/photo-1522158633578-d19005a2c739?q=80&w=2071&auto=format&fit=crop' },
  { id: 5, title: 'VIP Lounge North', date: 'Capacity: 50', location: 'North Wing', category: 'Social', price: 400, image: 'https://images.unsplash.com/photo-1517457373958-b7bdd458ad20?q=80&w=2070&auto=format&fit=crop' },
  { id: 6, title: 'Innovation Suite', date: 'Capacity: 150', location: 'East Wing', category: 'Technology', price: 600, image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=2070&auto=format&fit=crop' },
])

const filteredEvents = computed(() => {
  return events.value.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesCategory = selectedCategory.value === 'All' || event.category === selectedCategory.value
    return matchesSearch && matchesCategory
  })
})
</script>

<template>
  <div class="events-page container">
    <header class="page-header">
      <h1 class="page-title">Our Premium Spaces</h1>
      <p class="page-subtitle">Choose from our versatile range of grand halls, suites, and rooftop pavilions.</p>
    </header>

    <div class="filters-bar glass">
      <div class="search-input">
        <i class="fas fa-search search-icon"></i>
        <input type="text" v-model="searchQuery" placeholder="Search by hall name or wing...">
      </div>
      <div class="category-filters">
        <button 
          v-for="cat in categories" 
          :key="cat"
          @click="selectedCategory = cat"
          :class="['filter-btn', { active: selectedCategory === cat }]"
        >
          {{ cat }}
        </button>
      </div>
    </div>

    <div class="results-info">
      <p>Showing <strong>{{ filteredEvents.length }}</strong> spaces available</p>
    </div>

    <div class="events-grid">
      <EventCard v-for="event in filteredEvents" :key="event.id" :event="event" />
    </div>

    <div v-if="filteredEvents.length === 0" class="no-results">
      <h3>No spaces found matching your criteria.</h3>
      <p>Try adjusting your filters or search query.</p>
    </div>
  </div>
</template>

<style scoped>
.events-page {
  padding: 4rem 1.5rem;
}

.page-header {
  margin-bottom: 3rem;
  text-align: center;
}

.page-title {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.page-subtitle {
  color: var(--text-muted);
  font-size: 1.125rem;
}

.filters-bar {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
}

@media (min-width: 768px) {
  .filters-bar {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.search-input {
  display: flex;
  align-items: center;
  background: white;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  border: 1px solid var(--border);
  flex-grow: 1;
  max-width: 400px;
}

.search-input input {
  border: none;
  outline: none;
  width: 100%;
  margin-left: 0.5rem;
  font-family: inherit;
  font-size: 1rem;
}

.category-filters {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.category-filters::-webkit-scrollbar {
  display: none;
}

.filter-btn {
  white-space: nowrap;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  background: white;
  border: 1px solid var(--border);
  font-size: 0.875rem;
  font-weight: 500;
  transition: all var(--transition-fast);
}

.filter-btn:hover {
  border-color: var(--primary);
  color: var(--primary);
}

.filter-btn.active {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}

.results-info {
  margin-bottom: 2rem;
  color: var(--text-muted);
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.no-results {
  text-align: center;
  padding: 4rem;
  color: var(--text-muted);
}
</style>
