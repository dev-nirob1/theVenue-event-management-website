<script setup>
defineProps({
  event: {
    type: Object,
    required: true
  },
  variant: {
    type: String,
    default: 'small' // large, medium, small
  }
})
</script>

<template>
  <div :class="['event-card', `card-${variant}`]">
    <div class="card-image-box">
      <img :src="event.image || 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop'" :alt="event.title" class="card-img">
      <div class="card-overlay"></div>
      
      <!-- Top Badges -->
      <div class="card-badges">
        <div class="card-badge glass">{{ event.category }}</div>
      </div>

      <!-- Corner Content (Editorial Style) -->
      <div class="card-corner-top-right" v-if="variant === 'large'">
        <div class="capacity-pill glass">
          <i class="fas fa-users"></i> {{ event.date.replace('Cap: ', '') }}
        </div>
      </div>

      <div class="card-info-box">
        <div class="info-top">
          <span class="location-label"><i class="fas fa-map-marker-alt"></i> {{ event.location }}</span>
          <h3 class="card-title">{{ event.title }}</h3>
        </div>
        
        <div class="info-bottom" v-if="variant !== 'small'">
          <div class="price-info">
            <span class="label">Rental from</span>
            <span class="amount">${{ event.price }}</span>
          </div>
          <router-link :to="`/events/${event.id}`" class="explore-btn">
            View Hall <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
        
        <!-- Small variant specific link -->
        <router-link :to="`/events/${event.id}`" class="full-link" v-if="variant === 'small'"></router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.event-card {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 1.5rem;
  overflow: hidden;
  background: var(--surface);
  border: 1px solid var(--border);
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.card-image-box {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.event-card:hover .card-img {
  transform: scale(1.1);
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.2) 50%, transparent 100%);
  opacity: 0.85;
  transition: opacity 0.5s ease;
}

.event-card:hover .card-overlay {
  opacity: 0.95;
}

.card-badges {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  z-index: 10;
}

.card-badge {
  padding: 0.4rem 0.8rem;
  border-radius: 2rem;
  font-size: 0.65rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.card-corner-top-right {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 10;
}

.capacity-pill {
  padding: 0.4rem 0.8rem;
  border-radius: 2rem;
  font-size: 0.7rem;
  font-weight: 700;
  color: #10B981;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.card-info-box {
  position: absolute;
  inset: 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 5;
  color: white;
}

.location-label {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 0.5rem;
  transition: transform 0.3s ease;
}

.info-bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease 0.1s;
}

.event-card:hover .info-bottom {
  opacity: 1;
  transform: translateY(0);
}

.price-info .label {
  display: block;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.25rem;
}

.price-info .amount {
  font-size: 1.5rem;
  font-weight: 800;
}

.explore-btn {
  color: white;
  font-weight: 700;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: gap 0.3s ease;
}

.explore-btn:hover {
  gap: 1.25rem;
  color: var(--primary);
}

.full-link {
  position: absolute;
  inset: 0;
  z-index: 15;
}

/* Variant Specifics */
.card-large .card-title {
  font-size: 2.5rem;
}

.card-medium .card-title {
  font-size: 1.75rem;
}

.card-small .card-title {
  font-size: 1.125rem;
}

.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

@media (max-width: 768px) {
  .card-large .card-title,
  .card-medium .card-title,
  .card-small .card-title {
    font-size: 1.5rem;
  }
  
  .info-bottom {
    opacity: 1;
    transform: none;
  }
}
</style>
