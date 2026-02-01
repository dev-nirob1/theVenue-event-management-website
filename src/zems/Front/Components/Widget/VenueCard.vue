<script setup>
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  venue: {
    type: Object,
    required: true,
  },
});

const currentImgIndex = ref(0);

const images = computed(() => {
  if (Array.isArray(props.venue.images)) return props.venue.images;
  if (Array.isArray(props.venue.image)) return props.venue.image;
  return props.venue.image
    ? [props.venue.image]
    : props.venue.images
      ? [props.venue.images]
      : [];
});

const mainImage = computed(() => {
  return (
    images.value[currentImgIndex.value] ||
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop"
  );
});

const nextImg = () => {
  currentImgIndex.value = (currentImgIndex.value + 1) % images.value.length;
};

const prevImg = () => {
  currentImgIndex.value =
    (currentImgIndex.value - 1 + images.value.length) % images.value.length;
};
</script>

<template>
  <div class="venue-card-standard">
    <div class="card-media">
      <img :src="mainImage" :alt="venue.title" class="venue-img" />

      <div v-if="venue.category" class="category-pill glass">
        {{ venue.category }}
      </div>

      <div class="capacity-tag glass">
        <i class="fas fa-users"></i>
        <span>{{ venue.capacity }}</span>
      </div>

      <!-- Slider Controls -->
      <div class="slider-controls" v-if="images.length > 1">
        <button @click.stop="prevImg" class="slide-btn">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button @click.stop="nextImg" class="slide-btn">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>

    <div class="card-body">
      <div class="info-top">
        <span v-if="venue.location" class="location-text">{{
          venue.location
        }}</span>
        <h3 class="venue-title">{{ venue.title }}</h3>
      </div>

      <div class="card-footer">
        <div class="price-box">
          <span class="p-label">Starting From</span>
          <span class="p-value">${{ venue.price }}</span>
        </div>

        <router-link
          :to="venue.slug ? `/rooms/${venue.slug}` : '/contact'"
          class="btn-link"
        >
          <span>Explore</span>
          <i class="fas fa-chevron-right"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.venue-card-standard {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid var(--border);
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.venue-card-standard:hover {
  transform: translateY(-8px);
  box-shadow: 0 30px 60px -15px rgba(15, 23, 42, 0.1);
  border-color: var(--primary);
}

.card-media {
  position: relative;
  height: 260px;
  overflow: hidden;
  border-radius: 1rem 1rem 0 0;
}

.venue-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease-in-out;
}

.venue-card-standard:hover .venue-img {
  transform: scale(1.05);
}

.category-pill {
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.4rem 0.8rem;
  border-radius: 2rem;
  font-size: 0.65rem;
  font-weight: 800;
  text-transform: uppercase;
  color: white;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.capacity-tag {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  padding: 0.4rem 0.8rem;
  border-radius: 2rem;
  font-size: 0.75rem;
  font-weight: 700;
  color: white;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.capacity-tag i {
  color: var(--primary);
}

/* Slider Controls */
.slider-controls {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.75rem;
  opacity: 0;
  transition: all 0.3s ease;
  pointer-events: none;
}

.venue-card-standard:hover .slider-controls {
  opacity: 1;
}

.slide-btn {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  color: var(--text-main);
  font-size: 0.7rem;
  pointer-events: auto;
}

.slide-btn:hover {
  background: var(--primary);
  color: white;
}

.card-body {
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.location-text {
  font-size: 0.7rem;
  font-weight: 800;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: block;
  margin-bottom: 0.25rem;
}

.venue-title {
  font-size: 1.5rem;
  color: var(--text-main);
  margin-bottom: 1rem;
}

.card-footer {
  margin-top: auto;
  padding-top: 1.25rem;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price-box {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.p-label {
  font-size: 0.6rem;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  line-height: 1;
  margin: 0;
  padding: 0;
  display: block;
}

.p-value {
  font-size: 1.25rem;
  font-weight: 900;
  color: var(--text-main);
  line-height: 1;
  padding: 0;

  display: block;
}

.btn-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 800;
  color: var(--text-main);
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.btn-link:hover {
  color: var(--primary);
  gap: 0.75rem;
}

.btn-link i {
  font-size: 0.75rem;
}
</style>
