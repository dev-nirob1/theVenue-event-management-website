<script setup>
import { ref, computed, onMounted } from "vue";
import { events } from "../../../data/events";
import UpcomingEventCard from "../Components/Widget/UpcomingEventCard.vue";
import PageHero from "../Components/Widget/PageHero.vue";
import LuxuryTabs from "../Components/Widget/LuxuryTabs.vue";
import AppCTA from "../Components/Section/AppCTA.vue";

const selectedTimeFrame = ref("upcoming"); // upcoming, past

const tabs = computed(() => [
  {
    label: "Upcoming",
    value: "upcoming",
    count: events.filter((e) => e.type === "upcoming").length,
  },
  {
    label: "Past",
    value: "past",
    count: events.filter((e) => e.type === "past").length,
  },
]);

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
    <div class="container tabs-container">
      <LuxuryTabs v-model="selectedTimeFrame" :tabs="tabs" />
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

/* Luxury Tab Container */
.tabs-container {
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 100;
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
  .events-gallery {
    margin-top: 6rem;
  }
  .vertical-stack {
    gap: 2.5rem;
  }
}
</style>
