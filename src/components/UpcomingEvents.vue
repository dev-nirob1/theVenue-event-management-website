<script setup>
import SectionHeader from './SectionHeader.vue'

const upcomingEvents = [
  {
    id: 1,
    title: 'Global Tech Summit 2026',
    date: 'March 15, 2026 • 09:00 AM',
    room: 'Grand Royal Hall',
    category: 'Conference',
    image: 'https://images.unsplash.com/photo-1540575861501-7c001173a271?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Modern Architecture Expo',
    date: 'April 02, 2026 • 10:00 AM',
    room: 'Sky Pavilion',
    category: 'Exhibition',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Corporate Leadership Gala',
    date: 'April 20, 2026 • 07:00 PM',
    room: 'Grand Royal Hall',
    category: 'Gala',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop'
  }
]
</script>

<template>
  <section class="upcoming-events container">
    <SectionHeader 
      badge="Calendar"
      title="Upcoming Events"
      subtitle="Join world-class experiences hosted in our premier venue spaces."
      theme="light"
      align="center"
    />

    <div class="events-list">
      <div v-for="event in upcomingEvents" :key="event.id" class="event-strip glass">
        <div class="event-info-main">
          <div class="event-meta">
            <span class="category">{{ event.category }}</span>
            <span class="divider"></span>
            <span class="date">{{ event.date }}</span>
          </div>
          <h3 class="event-name">{{ event.title }}</h3>
          <div class="event-room">
            <i class="fas fa-map-marker-alt"></i>
            {{ event.room }}
          </div>
        </div>
        <div class="event-action">
          <router-link :to="`/events/${event.id}`" class="view-btn">
            View Details
            <i class="fas fa-chevron-right"></i>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.upcoming-events {
  padding: 8rem 1.5rem;
}

.events-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}

.event-strip {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 3rem;
  border-radius: 2rem;
  background: white;
  border: 1px solid var(--border);
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.event-strip:hover {
  transform: translateX(10px);
  border-color: var(--primary);
  box-shadow: var(--shadow-md);
}

.event-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

.category {
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--primary);
  letter-spacing: 0.1em;
}

.divider {
  width: 4px;
  height: 4px;
  background: var(--border);
  border-radius: 50%;
}

.date {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-muted);
}

.event-name {
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: var(--text-main);
}

.event-room {
  font-size: 0.9rem;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.event-room i {
  color: var(--primary);
}

.view-btn {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 700;
  color: var(--text-main);
  transition: all 0.3s ease;
  padding: 1rem 2rem;
  border-radius: 3rem;
  background: var(--background);
}

.view-btn:hover {
  background: var(--primary);
  color: white;
}

@media (max-width: 768px) {
  .event-strip {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    padding: 2rem;
  }
  
  .event-action {
    width: 100%;
  }
  
  .view-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
