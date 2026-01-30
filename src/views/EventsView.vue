<script setup>
import { ref, computed } from 'vue'
import { events } from '../data/events'
import EventCard from '../components/EventCard.vue'
import SectionHeader from '../components/SectionHeader.vue'

const searchQuery = ref('')
const selectedCategory = ref('All')
const selectedTimeFrame = ref('upcoming') // upcoming, past

const categories = ['All', 'Technology', 'Social', 'Art', 'Music', 'Business']

const filteredEvents = computed(() => {
  return events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                          event.organizer.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesCategory = selectedCategory.value === 'All' || event.category === selectedCategory.value
    const matchesTime = event.type === selectedTimeFrame.value
    
    return matchesSearch && matchesCategory && matchesTime
  })
})
</script>

<template>
  <div class="events-page page-padding">
    <div class="header-section">
      <div class="container">
        <SectionHeader 
          badge="What's Happening"
          title="Extraordinary Moments <br/> In Motion"
          subtitle="Explore the world-class gatherings, summits, and celebrations that define our space."
          theme="light"
        />
      </div>
    </div>

    <div class="container filters-section">
      <div class="filters-layout glass">
        <!-- Search & Category (Top Row) -->
        <div class="filters-main">
          <div class="search-box">
            <i class="fas fa-search"></i>
            <input type="text" v-model="searchQuery" placeholder="Search events or organizers...">
          </div>
          
          <div class="time-toggle">
            <button 
              @click="selectedTimeFrame = 'upcoming'" 
              :class="['time-btn', { active: selectedTimeFrame === 'upcoming' }]"
            >
              Upcoming
            </button>
            <button 
              @click="selectedTimeFrame = 'past'" 
              :class="['time-btn', { active: selectedTimeFrame === 'past' }]"
            >
              Past
            </button>
          </div>
        </div>

        <!-- Categories (Bottom Row) -->
        <div class="category-strip">
          <button 
            v-for="cat in categories" 
            :key="cat"
            @click="selectedCategory = cat"
            :class="['cat-pill', { active: selectedCategory === cat }]"
          >
            {{ cat }}
          </button>
        </div>
      </div>
    </div>

    <div class="results-section container">
      <div class="results-meta">
        <p>Showing <strong>{{ filteredEvents.length }}</strong> events found</p>
      </div>

      <div v-if="filteredEvents.length > 0" class="events-grid">
        <EventCard 
          v-for="event in filteredEvents" 
          :key="event.id" 
          :event="event" 
          variant="medium"
        />
      </div>

      <div v-else class="no-results glass">
        <div class="no-results-content">
          <i class="fas fa-calendar-times"></i>
          <h3>No events found</h3>
          <p>Try adjusting your search query or switching between Upcoming and Past events.</p>
          <button @click="searchQuery = ''; selectedCategory = 'All'" class="reset-btn">Clear All Filters</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.events-page {
  padding-bottom: 8rem;
}

.header-section {
  padding: 6rem 0 4rem;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
}

.filters-section {
  margin-top: -3rem;
  position: relative;
  z-index: 10;
}

.filters-layout {
  padding: 2.5rem;
  border-radius: 2.5rem;
  background: white;
  border: 1px solid var(--border);
  box-shadow: 0 40px 80px -20px rgba(0,0,0,0.08);
}

.filters-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.search-box {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1rem;
  background: var(--background);
  padding: 1rem 1.5rem;
  border-radius: 1.5rem;
  border: 1px solid var(--border);
  transition: all 0.3s ease;
}

.search-box:focus-within {
  border-color: var(--primary);
  background: white;
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
}

.search-box i {
  color: #94A3B8;
  font-size: 1.125rem;
}

.search-box input {
  border: none;
  background: transparent;
  width: 100%;
  font-size: 1.125rem;
  font-weight: 500;
  outline: none;
}

.time-toggle {
  display: flex;
  background: var(--background);
  padding: 0.5rem;
  border-radius: 2rem;
  border: 1px solid var(--border);
}

.time-btn {
  padding: 0.75rem 1.75rem;
  border-radius: 1.5rem;
  font-weight: 800;
  font-size: 0.9rem;
  border: none;
  cursor: pointer;
  background: transparent;
  color: var(--text-muted);
  transition: all 0.3s ease;
}

.time-btn.active {
  background: white;
  color: var(--primary);
  box-shadow: 0 10px 20px -5px rgba(0,0,0,0.1);
}

.category-strip {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.cat-pill {
  padding: 0.6rem 1.25rem;
  border-radius: 3rem;
  background: white;
  border: 1px solid var(--border);
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-muted);
  cursor: pointer;
  transition: all 0.3s ease;
}

.cat-pill:hover {
  border-color: var(--primary);
  color: var(--primary);
}

.cat-pill.active {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}

.results-section {
  margin-top: 4rem;
}

.results-meta {
  margin-bottom: 2rem;
  color: var(--text-muted);
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 2.5rem;
}

.no-results {
  padding: 6rem 2rem;
  text-align: center;
  background: white;
  border-radius: 3rem;
  border: 1px dashed var(--border);
}

.no-results-content i {
  font-size: 4rem;
  color: #E2E8F0;
  margin-bottom: 1.5rem;
}

.no-results-content h3 {
  font-size: 1.75rem;
  font-weight: 900;
  color: var(--text-main);
  margin-bottom: 1rem;
}

.no-results-content p {
  color: var(--text-muted);
  margin-bottom: 2rem;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}

.reset-btn {
  padding: 1rem 2rem;
  background: var(--background);
  border: 2px solid var(--border);
  border-radius: 3rem;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.3s ease;
}

.reset-btn:hover {
  background: var(--text-main);
  color: white;
  border-color: var(--text-main);
}

@media (max-width: 768px) {
  .filters-layout { padding: 1.5rem; }
  .filters-main { flex-direction: column; align-items: stretch; }
  .events-grid { grid-template-columns: 1fr; }
}
.page-padding {
  padding-top: 6rem;
}
</style>
