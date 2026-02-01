<script setup>
import { ref, computed, onMounted } from "vue";
import { events } from "../../../data/events";
import UpcomingEventCard from "../Components/Widget/UpcomingEventCard.vue";
import PageHero from "../Components/Widget/PageHero.vue";
import AppCTA from "../Components/Section/AppCTA.vue";

const selectedTimeFrame = ref("upcoming"); // upcoming, past

const filteredEvents = computed(() => {
  return events.filter((event) => event.type === selectedTimeFrame.value);
});

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <div class="events-page">
    <PageHero
      title="Extraordinary Moments <br/> In Motion"
      subtitle="The Event Gallery"
      image="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop"
    />

    <!-- Ultra-Premium Cinematic Tabs -->
    <div class="container tabs-lockup">
      <div class="luxury-dock glass">
        <!-- Sliding Indicator -->
        <div class="active-slide" :class="selectedTimeFrame"></div>

        <button
          @click="selectedTimeFrame = 'upcoming'"
          :class="['dock-link', { active: selectedTimeFrame === 'upcoming' }]"
        >
          <span class="link-label">Upcoming</span>
          <span class="link-count">{{
            events.filter((e) => e.type === "upcoming").length
          }}</span>
        </button>

        <button
          @click="selectedTimeFrame = 'past'"
          :class="['dock-link', { active: selectedTimeFrame === 'past' }]"
        >
          <span class="link-label">Past</span>
          <span class="link-count">{{
            events.filter((e) => e.type === "past").length
          }}</span>
        </button>
      </div>
    </div>

    <!-- Architectural List Section -->
    <div class="container events-gallery">
      <div v-if="filteredEvents.length > 0" class="vertical-stack">
        <transition-group name="fade-slide">
          <UpcomingEventCard
            v-for="(event, idx) in filteredEvents"
            :key="event.id"
            :event="event"
            class="gallery-item"
            :style="{ '--delay': idx * 0.15 + 's' }"
          />
        </transition-group>
      </div>

      <!-- Empty Architecture -->
      <div v-else class="gallery-empty glass">
        <div class="empty-symbol"><i class="fas fa-calendar-alt"></i></div>
        <h3>Curated Selection Pending</h3>
        <p>
          Our upcoming calendar is being meticulously refined. Please check back
          for our next unveiling.
        </p>
      </div>
    </div>

    <!-- Final CTA -->
    <AppCTA />
  </div>
</template>

<style scoped>
.events-page {
  padding-bottom: 0;
}

/* Luxury Tab Dock */
.tabs-lockup {
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 100;
  margin-bottom: 2.5rem;
}

.luxury-dock {
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(25px) saturate(180%);
  padding: 0.5rem;
  border-radius: 100px;
  display: flex;
  gap: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow:
    0 30px 60px -12px rgba(15, 23, 42, 0.12),
    0 18px 36px -18px rgba(15, 23, 42, 0.1);
  position: relative;
  min-width: 420px;
}

.dock-link {
  flex: 1;
  padding: 1.15rem 2.5rem;
  border: none;
  background: transparent;
  cursor: pointer;
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}

.link-label {
  font-weight: 900;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--text-muted);
  transition: all 0.4s ease;
}

.dock-link.active .link-label {
  color: var(--text-main);
}

.link-count {
  font-size: 0.7rem;
  font-weight: 800;
  color: var(--text-muted);
  background: rgba(15, 23, 42, 0.05);
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
  transition: all 0.4s ease;
}

.dock-link.active .link-count {
  background: rgba(255, 255, 255, 0.3);
  color: var(--text-main);
}

/* Sliding Background */
.active-slide {
  position: absolute;
  top: 0.5rem;
  bottom: 0.5rem;
  width: calc(50% - 0.75rem);
  background: white;
  border-radius: 100px;
  box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.08);
  transition: all 0.7s cubic-bezier(0.19, 1, 0.22, 1);
  z-index: 1;
}

.active-slide.past {
  transform: translateX(calc(100% + 0.5rem));
}

.vertical-stack {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1050px;
  margin: 0 auto;
  margin-bottom: 4rem;
}

.gallery-item {
  width: 100%;
}

/* Animations */
.fade-slide-enter-active {
  transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
  transition-delay: var(--delay);
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(40px);
}

/* Empty State */
.gallery-empty {
  padding: 10rem 2rem;
  text-align: center;
  background: white;
  border-radius: 4rem;
  border: 1px dashed var(--border);
}

.empty-symbol {
  font-size: 3.5rem;
  color: #e2e8f0;
  margin-bottom: 2.5rem;
}

.gallery-empty h3 {
  font-size: 2.5rem;
  font-weight: 950;
  color: var(--text-main);
  letter-spacing: -0.03em;
  margin-bottom: 1.5rem;
}

.gallery-empty p {
  color: var(--text-muted);
  font-size: 1.15rem;
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.8;
}

@media (max-width: 768px) {
  .luxury-dock {
    min-width: 100%;
    border-radius: 2.5rem;
  }
  .active-slide {
    display: none;
  }
  .dock-link.active {
    background: white;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  }
  .events-gallery {
    margin-top: 6rem;
  }
  .vertical-stack {
    gap: 2.5rem;
  }
}
</style>
