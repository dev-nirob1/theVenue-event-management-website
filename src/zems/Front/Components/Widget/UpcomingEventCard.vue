<script setup>
import { RouterLink } from "vue-router";
import BaseImage from "../../../../components/element/BaseImage.vue";

defineProps({
  event: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="event-card group">
    <!-- Image Side -->
    <div class="card-media">
      <BaseImage :image="event.image" :alt="event.title" class="event-image" />
      <div class="date-badge">
        <span class="day">{{ event.date }}</span>
        <span class="month">{{ event.month }}</span>
      </div>
    </div>

    <!-- Content Side -->
    <div class="card-content">
      <div class="meta-top">
        <span class="category-pill">{{ event.category }}</span>
        <span class="time-pill">
          <i class="far fa-clock"></i> {{ event.time }}
        </span>
      </div>

      <h3 class="event-title">
        <RouterLink :to="`/events/${event.id}`">{{ event.title }}</RouterLink>
      </h3>

      <div class="room-info">
        <i class="fas fa-map-marker-alt"></i>
        <span>{{ event.room }}</span>
      </div>

      <div class="action-row">
        <RouterLink :to="`/events/${event.id}`" class="details-link">
          View Details <i class="fas fa-arrow-right"></i>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.event-card {
  display: flex;
  background: var(--surface);
  border-radius: 1.5rem;
  overflow: hidden;
  border: 1px solid var(--border);
  transition: all 0.3s ease;
  height: 280px;
}

.event-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary);
}

/* Media Side */
.card-media {
  width: 45%;
  position: relative;
  overflow: hidden;
}

.event-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.event-card:hover .event-image {
  transform: scale(1.05);
}

.date-badge {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  background: rgba(255, 255, 255, 0.95);
  padding: 0.75rem 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-width: 70px;
}

.date-badge .day {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-main);
  line-height: 1;
}

.date-badge .month {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* Content Side */
.card-content {
  width: 55%;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.meta-top {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.category-pill {
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--primary);
  letter-spacing: 0.1em;
  background: rgba(var(--primary-rgb, 99, 102, 241), 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 2rem;
}

.time-pill {
  font-size: 0.85rem;
  color: var(--text-muted);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.event-title {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.event-title a {
  background: linear-gradient(
    to right,
    var(--text-main) 50%,
    var(--primary) 50%
  );
  background-size: 200% 100%;
  background-position: 0 0;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: background-position 0.3s ease;
}

.event-card:hover .event-title a {
  background-position: -100% 0;
}

.room-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-muted);
  font-weight: 600;
  margin-bottom: 2rem;
}

.room-info i {
  color: var(--primary);
}

.details-link {
  font-weight: 700;
  color: var(--text-main);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  transition:
    gap 0.3s ease,
    color 0.3s ease;
}

.event-card:hover .details-link {
  gap: 1rem;
  color: var(--primary);
}

@media (max-width: 900px) {
  .event-card {
    flex-direction: column;
    height: auto;
  }

  .card-media,
  .card-content {
    width: 100%;
  }

  .card-media {
    height: 240px;
  }

  .card-content {
    padding: 2rem;
  }

  .event-title {
    font-size: 1.5rem;
  }
}
</style>
