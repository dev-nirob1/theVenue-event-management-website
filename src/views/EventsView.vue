<script setup>
import { ref, computed } from 'vue'
import EventCard from '../components/EventCard.vue'

const searchQuery = ref('')
const selectedCategory = ref('All')

const categories = ['All', 'Music', 'Technology', 'Art', 'Sports', 'Social']

const events = ref([
  { id: 1, title: 'Horizon Music Festival 2026', date: 'Aug 15, 2026', location: 'Central Park, NY', category: 'Music', price: 49, image: 'https://images.unsplash.com/photo-1459749411177-042180ce4372?q=80&w=2070&auto=format&fit=crop' },
  { id: 2, title: 'TechNova Conference', date: 'Sep 10, 2026', location: 'Silicon Valley, CA', category: 'Technology', price: 199, image: 'https://images.unsplash.com/photo-1540575861501-7ad0582371f3?q=80&w=2070&auto=format&fit=crop' },
  { id: 3, title: 'Modern Art Gala', date: 'Oct 05, 2026', location: 'The Met, NY', category: 'Art', price: 0, image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2070&auto=format&fit=crop' },
  { id: 4, title: 'Sunset Yoga Session', date: 'Aug 20, 2026', location: 'Santa Monica, CA', category: 'Sports', price: 15, image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop' },
  { id: 5, title: 'Startup Pitch Night', date: 'Nov 12, 2026', location: 'Austin, TX', category: 'Technology', price: 30, image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop' },
  { id: 6, title: 'Wine & Jazz Evening', date: 'Dec 01, 2026', location: 'Napa Valley, CA', category: 'Music', price: 75, image: 'https://images.unsplash.com/photo-1514525253361-bee8d137452e?q=80&w=2070&auto=format&fit=crop' },
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
      <h1 class="page-title">Browse Events</h1>
      <p class="page-subtitle">Find the perfect event for your next adventure.</p>
    </header>

    <div class="filters-bar glass">
      <div class="search-input">
        <span class="icon">🔍</span>
        <input type="text" v-model="searchQuery" placeholder="Search by name or location...">
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
      <p>Showing <strong>{{ filteredEvents.length }}</strong> events</p>
    </div>

    <div class="events-grid">
      <EventCard v-for="event in filteredEvents" :key="event.id" :event="event" />
    </div>

    <div v-if="filteredEvents.length === 0" class="no-results">
      <h3>No events found matching your search.</h3>
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
