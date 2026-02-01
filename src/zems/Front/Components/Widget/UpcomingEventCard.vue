<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";
import BaseImage from "../../../../components/element/BaseImage.vue";

const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
});

// Helper to format date if provided as ISO string (from events.js)
const dateParsed = computed(() => {
  if (props.event.date && props.event.date.includes("-")) {
    const d = new Date(props.event.date);
    return {
      day: d.getDate().toString().padStart(2, "0"),
      month: d.toLocaleString("default", { month: "short" }).toUpperCase(),
      time: d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
  }
  return {
    day: props.event.date || "00",
    month: props.event.month || "JAN",
    time: props.event.time || "00:00",
  };
});
</script>

<template>
  <div class="event-card group">
    <!-- Image Side -->
    <div class="card-media">
      <BaseImage :image="event.image" :alt="event.title" class="event-image" />
      <div class="date-badge">
        <span class="day">{{ dateParsed.day }}</span>
        <span class="month">{{ dateParsed.month }}</span>
      </div>

      <!-- Past Event Overlay -->
      <div v-if="event.type === 'past'" class="past-overlay">
        <span>Event Concluded</span>
      </div>
    </div>

    <!-- Content Side -->
    <div class="card-content">
      <div class="meta-top">
        <span class="category-pill">{{ event.category }}</span>
        <span class="time-pill">
          <i class="far fa-clock"></i> {{ dateParsed.time }}
        </span>
      </div>

      <h3 class="event-title">
        <RouterLink :to="`/events/${event.slug || event.id}`">{{
          event.title
        }}</RouterLink>
      </h3>

      <div class="room-info">
        <i class="fas fa-map-marker-alt"></i>
        <span>{{ event.room || event.location }}</span>
      </div>

      <div class="action-row">
        <RouterLink
          :to="`/events/${event.slug || event.id}`"
          class="details-link"
        >
          {{ event.type === "past" ? "View Story" : "View Details" }}
          <i class="fas fa-arrow-right"></i>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.event-card {
  display: flex;
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid var(--border);
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  height: 280px;
  position: relative;
}

.event-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 40px 80px -20px rgba(15, 23, 42, 0.12);
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
  transition: transform 0.8s ease;
}

.event-card:hover .event-image {
  transform: scale(1.1);
}

.date-badge {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  padding: 0.75rem 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  min-width: 70px;
  z-index: 2;
  border: 1px solid rgba(255, 255, 255, 0.5);
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

.past-overlay {
  position: absolute;
  inset: 0;
  background: rgba(15, 23, 42, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  z-index: 1;
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
  gap: 1.5rem;
  margin-bottom: 1.25rem;
}

.category-pill {
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--primary);
  letter-spacing: 0.15em;
  background: rgba(99, 102, 241, 0.08);
  padding: 0.35rem 0.85rem;
  border-radius: 2rem;
}

.time-pill {
  font-size: 0.85rem;
  color: var(--text-muted);
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.event-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 1.25rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.event-title a {
  color: var(--text-main);
  text-decoration: none;
  background: linear-gradient(to right, var(--primary), var(--primary));
  background-size: 0% 2px;
  background-repeat: no-repeat;
  background-position: left bottom;
  transition: all 0.3s ease;
}

.event-card:hover .event-title a {
  color: var(--primary);
  background-size: 100% 2px;
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
  font-weight: 800;
  color: var(--text-main);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
}

.event-card:hover .details-link {
  gap: 1.25rem;
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
