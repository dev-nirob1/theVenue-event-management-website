<script setup>
import { ref } from 'vue'

const props = defineProps({
  room: {
    type: Object,
    required: true
  }
})

const currentImgIndex = ref(0)

const nextImg = () => {
  currentImgIndex.value = (currentImgIndex.value + 1) % props.room.images.length
}

const prevImg = () => {
  currentImgIndex.value = (currentImgIndex.value - 1 + props.room.images.length) % props.room.images.length
}
</script>

<template>
  <div class="room-card-refined">
    <div class="card-media">
      <div class="image-slider">
        <img 
          :src="(room.images && room.images[currentImgIndex]) || 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop'" 
          :alt="room.title" 
          class="room-img"
          @error="(e) => (e.target.src = 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop')"
        >
        <div class="slider-controls" v-if="room.images.length > 1">
          <button @click.stop="prevImg" class="slide-btn prev"><i class="fas fa-chevron-left"></i></button>
          <button @click.stop="nextImg" class="slide-btn next"><i class="fas fa-chevron-right"></i></button>
        </div>
      </div>
      <div class="category-badge">{{ room.category }} Hall</div>
    </div>

    <div class="card-content">
      <div class="header-row">
        <h3 class="room-title">{{ room.title }}</h3>
        <div class="capacity-pill">
          <i class="fas fa-users"></i>
          <span>{{ room.capacity }}</span>
        </div>
      </div>
      
      <div class="event-capsules">
        <span v-for="type in room.eventTypes.slice(0, 3)" :key="type" class="capsule">
          {{ type }}
        </span>
      </div>

      <div class="card-spacer"></div>

      <div class="footer-row">
        <div class="pricing">
          <span class="p-label">Rental starts</span>
          <span class="p-value">${{ room.price }}</span>
        </div>
        <router-link :to="`/rooms/${room.slug}`" class="view-btn">
          <span>Explore</span>
          <i class="fas fa-long-arrow-alt-right"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.room-card-refined {
  background: white;
  border-radius: 2.5rem;
  overflow: hidden;
  border: 1px solid var(--border);
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  display: flex;
  flex-direction: column;
}

.room-card-refined:hover {
  transform: translateY(-10px);
  box-shadow: 0 40px 80px -20px rgba(15, 23, 42, 0.1);
  border-color: var(--primary);
}

.card-media {
  height: 260px;
  position: relative;
  overflow: hidden;
}

.image-slider {
  width: 100%;
  height: 100%;
  position: relative;
}

.room-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s ease;
}

.room-card-refined:hover .room-img {
  transform: scale(1.08);
}

.slider-controls {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  opacity: 0;
  transition: all 0.3s ease;
}

.room-card-refined:hover .slider-controls {
  opacity: 1;
}

.slide-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  color: var(--text-main);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.slide-btn:hover {
  background: var(--primary);
  color: white;
}

.category-badge {
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  padding: 0.5rem 1rem;
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(8px);
  color: white;
  border-radius: 2rem;
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Content */
.card-content {
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.room-title {
  font-size: 1.75rem;
  font-weight: 950;
  color: var(--text-main);
}

.capacity-pill {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.8rem;
  background: var(--background);
  border-radius: 2rem;
  font-size: 0.85rem;
  font-weight: 800;
  color: var(--text-muted);
  white-space: nowrap;
}

.capacity-pill i { color: var(--primary); }

.event-capsules {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.capsule {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--text-muted);
  background: #f1f5f9;
  padding: 0.4rem 0.75rem;
  border-radius: 0.5rem;
}

.card-spacer {
  margin-top: auto;
  height: 1.5rem;
}

.footer-row {
  padding-top: 1.5rem;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.p-label {
  display: block;
  font-size: 0.75rem;
  color: var(--text-muted);
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.p-value {
  font-size: 1.5rem;
  font-weight: 900;
  color: var(--text-main);
}

.view-btn {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 900;
  color: var(--primary);
  transition: all 0.3s ease;
}

.view-btn:hover {
  gap: 1.5rem;
}

@media (max-width: 640px) {
  .room-title { font-size: 1.5rem; }
  .card-content { padding: 1.5rem; }
}
</style>
