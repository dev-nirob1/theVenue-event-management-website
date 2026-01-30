<script setup>
defineProps({
  event: {
    type: Object,
    required: true
  },
  variant: {
    type: String,
    default: 'medium' // large, medium, small
  }
})
</script>

<template>
  <div :class="['modern-event-card', `variant-${variant}`]">
    <!-- Image Section -->
    <div class="card-media">
      <img 
        :src="event.image || 'https://images.unsplash.com/photo-1540575861501-7c001173a271?q=80&w=2070&auto=format&fit=crop'" 
        :alt="event.title" 
        class="card-img"
        @error="(e) => (e.target.src = 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop')"
      >
      <div class="category-tag">{{ event.category }}</div>
      <div v-if="event.ticketStatus" :class="['status-pill', event.ticketStatus.toLowerCase().replace(' ', '-')]">
        {{ event.ticketStatus }}
      </div>
    </div>

    <!-- Content Section -->
    <div class="card-content">
      <div class="content-header">
        <span class="org-name">{{ event.organizer }}</span>
        <h3 class="event-title">{{ event.title }}</h3>
      </div>
      
      <div class="event-metadata">
        <div class="meta-node">
          <i class="far fa-calendar-alt"></i>
          <span>{{ event.displayDate }}</span>
        </div>
        <div class="meta-node">
          <i class="fas fa-map-marker-alt"></i>
          <span>{{ event.location }}</span>
        </div>
      </div>

      <div class="card-divider"></div>

      <div class="content-footer">
        <div class="price-block">
          <span class="price-label">Tickets from</span>
          <span class="price-value" v-if="event.price > 0">${{ event.price }}</span>
          <span class="price-value free" v-else>FREE</span>
        </div>
        
        <router-link :to="`/events/${event.slug}`" class="action-btn">
          <span>Details</span>
          <i class="fas fa-arrow-right"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modern-event-card {
  background: white;
  border-radius: 2rem;
  overflow: hidden;
  border: 1px solid var(--border);
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.modern-event-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 30px 60px -15px rgba(0,0,0,0.1);
  border-color: var(--primary);
}

/* Media Section */
.card-media {
  position: relative;
  height: 240px;
  overflow: hidden;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.modern-event-card:hover .card-img {
  transform: scale(1.05);
}

.category-tag {
  position: absolute;
  top: 1.25rem;
  left: 1.25rem;
  padding: 0.5rem 1rem;
  background: white;
  color: var(--text-main);
  border-radius: 3rem;
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.status-pill {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  padding: 0.5rem 1rem;
  border-radius: 3rem;
  font-size: 0.65rem;
  font-weight: 900;
  text-transform: uppercase;
  color: white;
}

.status-pill.available { background: #10B981; }
.status-pill.waitlist { background: #F59E0B; }
.status-pill.completed { background: #64748B; }

/* Content Section */
.card-content {
  padding: 2rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.org-name {
  display: block;
  font-size: 0.8rem;
  color: var(--primary);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.75rem;
}

.event-title {
  font-size: 1.5rem;
  font-weight: 900;
  color: var(--text-main);
  line-height: 1.2;
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  overflow: hidden;
}

.event-metadata {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.meta-node {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-muted);
  font-size: 0.9rem;
  font-weight: 600;
}

.meta-node i {
  color: var(--primary);
  width: 16px;
}

.card-divider {
  height: 1px;
  background: var(--border);
  margin-bottom: 1.5rem;
  margin-top: auto;
}

.content-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price-label {
  display: block;
  font-size: 0.7rem;
  color: var(--text-muted);
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 0.25rem;
}

.price-value {
  font-size: 1.5rem;
  font-weight: 950;
  color: var(--text-main);
}

.price-value.free {
  color: #10B981;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--primary);
  font-weight: 800;
  transition: all 0.3s ease;
}

.action-btn:hover {
  gap: 1.25rem;
}

/* Variant Tweaks */
.variant-large {
  flex-direction: row;
  min-height: 350px;
}

.variant-large .card-media {
  width: 40%;
  height: 100%;
}

.variant-large .card-content {
  width: 60%;
  overflow: hidden;
}

@media (max-width: 768px) {
  .variant-large { flex-direction: column; }
  .variant-large .card-media { width: 100%; height: 240px; }
  .variant-large .card-content { width: 100%; }
}
</style>
