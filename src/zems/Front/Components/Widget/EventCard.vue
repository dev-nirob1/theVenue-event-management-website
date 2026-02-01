<script setup>
import { RouterLink } from "vue-router";
import BaseImage from "../../../../components/element/BaseImage.vue";
import SubTitle from "../../../../components/element/SubTitle.vue";

defineProps({
  event: {
    type: Object,
    required: true,
  },
  variant: {
    type: String,
    default: "medium", // large, medium, small
  },
});
</script>

<template>
  <div class="event-card group">
    <div class="image-wrapper">
      <BaseImage :image="event.image" :alt="event.title" class="card-image" />

      <!-- Overlays -->
      <div v-if="event.category" class="category-badge">
        {{ event.category }}
      </div>
      <div
        v-if="event.ticketStatus"
        :class="[
          'status-badge',
          event.ticketStatus.toLowerCase().replace(' ', '-'),
        ]"
      >
        {{ event.ticketStatus }}
      </div>
    </div>

    <div class="content">
      <div class="header mb-1">
        <span v-if="event.organizer" class="organizer">{{
          event.organizer
        }}</span>
        <SubTitle class="title">{{ event.title }}</SubTitle>
      </div>

      <div class="meta-info">
        <div class="meta-item">
          <i class="far fa-calendar-alt icon"></i>
          <span>{{ event.date || event.displayDate }}</span>
        </div>
        <div class="meta-item">
          <i class="fas fa-map-marker-alt icon"></i>
          <span>{{ event.location }}</span>
        </div>
      </div>

      <div class="card-footer">
        <div class="price-block">
          <span class="price-label">Tickets from</span>
          <span class="price-value" v-if="event.price > 0"
            >${{ event.price }}</span
          >
          <span class="price-value free" v-else>FREE</span>
        </div>

        <RouterLink :to="`/events/${event.slug}`" class="details-btn">
          <span>Details</span>
          <i class="fas fa-arrow-right"></i>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.event-card {
  background: var(--surface);
  border-radius: 1rem;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--border);
}

.event-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary);
}

.image-wrapper {
  position: relative;
  overflow: hidden;
  aspect-ratio: 4/3;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.event-card:hover .card-image {
  transform: scale(1.05);
}

/* Badges */
.category-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: rgba(255, 255, 255, 0.95);
  padding: 0.25rem 0.75rem;
  border-radius: 2rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--text-main);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.status-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.25rem 0.75rem;
  border-radius: 2rem;
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  color: white;
  background: var(--text-muted); /* Fallback */
}

.status-badge.available {
  background: #10b981;
}
.status-badge.selling-fast {
  background: #f59e0b;
}
.status-badge.sold-out {
  background: #ef4444;
}

.content {
  padding: 1.25rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.organizer {
  display: block;
  font-size: 0.75rem;
  color: var(--primary);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.25rem;
}

.title {
  font-size: 1.25rem !important; /* Override if needed */
  line-height: 1.3;
  margin-bottom: 0.5rem;
}

.meta-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-muted);
  font-size: 0.875rem;
}

.meta-item .icon {
  color: var(--primary);
  width: 16px;
  text-align: center;
}

.card-footer {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--border);
  padding-top: 1rem;
}

.price-block {
  display: flex;
  flex-direction: column;
}

.price-label {
  font-size: 0.7rem;
  color: var(--text-muted);
  font-weight: 600;
  text-transform: uppercase;
}

.price-value {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-main);
}

.price-value.free {
  color: #10b981;
}

.details-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-main); /* Default text color */
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.details-btn:hover {
  color: var(--primary);
  gap: 0.75rem;
}
</style>
