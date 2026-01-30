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
  <div class="room-card glass">
    <div class="card-image-wrapper">
      <div class="image-slider">
        <img 
          :src="room.images[currentImgIndex]" 
          :alt="room.title" 
          class="room-img"
        >
        <div class="slider-controls" v-if="room.images.length > 1">
          <button @click.stop="prevImg" class="slide-btn prev"><i class="fas fa-chevron-left"></i></button>
          <button @click.stop="nextImg" class="slide-btn next"><i class="fas fa-chevron-right"></i></button>
        </div>
        <div class="slider-dots" v-if="room.images.length > 1">
          <span 
            v-for="(_, index) in room.images" 
            :key="index"
            :class="['dot', { active: currentImgIndex === index }]"
          ></span>
        </div>
      </div>
      <div class="card-badge">{{ room.category }}</div>
    </div>

    <div class="card-body">
      <div class="card-header">
        <h3 class="room-name">{{ room.title }}</h3>
        <div class="capacity">
          <i class="fas fa-users"></i>
          <span>{{ room.capacity }} Guests</span>
        </div>
      </div>
      
      <div class="event-types">
        <span v-for="type in room.eventTypes" :key="type" class="type-tag">
          {{ type }}
        </span>
      </div>

      <div class="card-footer">
        <div class="price">
          <span class="label">Starting at</span>
          <span class="amount">${{ room.price }}</span>
        </div>
        <router-link :to="`/rooms/${room.id}`" class="view-details-btn">
          View Room
          <i class="fas fa-arrow-right"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.room-card {
  border-radius: 2rem;
  overflow: hidden;
  background: white;
  border: 1px solid var(--border);
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  display: flex;
  flex-direction: column;
}

.room-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary);
}

.card-image-wrapper {
  position: relative;
  height: 280px;
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

.room-card:hover .room-img {
  transform: scale(1.05);
}

.slider-controls {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.room-card:hover .slider-controls {
  opacity: 1;
}

.slide-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-main);
  font-size: 0.8rem;
  transition: all 0.3s ease;
}

.slide-btn:hover {
  background: var(--primary);
  color: white;
}

.slider-dots {
  position: absolute;
  bottom: 1.25rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease;
}

.dot.active {
  width: 18px;
  border-radius: 3px;
  background: white;
}

.card-badge {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  padding: 0.4rem 1rem;
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(8px);
  color: white;
  border-radius: 2rem;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.card-body {
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.room-name {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-main);
}

.capacity {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-muted);
  font-size: 0.85rem;
  font-weight: 600;
  background: var(--background);
  padding: 0.4rem 0.8rem;
  border-radius: 2rem;
}

.capacity i {
  color: var(--primary);
}

.event-types {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.type-tag {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--text-muted);
  background: rgba(99, 102, 241, 0.05);
  padding: 0.3rem 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(99, 102, 241, 0.1);
}

.card-footer {
  margin-top: auto;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price .label {
  display: block;
  font-size: 0.7rem;
  color: var(--text-muted);
  margin-bottom: 0.25rem;
}

.price .amount {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--text-main);
}

.view-details-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 700;
  color: var(--primary);
  transition: gap 0.3s ease;
}

.view-details-btn:hover {
  gap: 1.25rem;
}
</style>
