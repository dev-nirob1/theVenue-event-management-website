<script setup>
import SectionHeader from "../Widget/SectionHeader.vue";
import UpcomingEventCard from "../Widget/UpcomingEventCard.vue";

const upcomingEvents = [
  {
    id: 1,
    title: "Global Tech Summit 2026",
    date: "15",
    month: "MAR",
    time: "09:00 AM",
    room: "Grand Royal Hall",
    category: "Conference",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Modern Architecture Expo",
    date: "02",
    month: "APR",
    time: "10:00 AM",
    room: "Sky Pavilion",
    category: "Exhibition",
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Corporate Leadership Gala",
    date: "20",
    month: "APR",
    time: "07:00 PM",
    room: "Grand Royal Hall",
    category: "Gala",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop",
  },
];
</script>

<template>
  <section class="upcoming-events">
    <div class="container">
      <SectionHeader
        class="text-center mb-2"
        subTitle="Calendar"
        title="Upcoming Events"
      />

      <div class="events-list">
        <div v-for="event in upcomingEvents" :key="event.id">
          <UpcomingEventCard :event="event" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.upcoming-events {
  padding: 4.75rem 0;
  background: rgb(from var(--primary) r g b / 5%);
}

.events-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}
</style>
