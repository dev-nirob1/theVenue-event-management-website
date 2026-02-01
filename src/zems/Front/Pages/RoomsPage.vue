<script setup>
import { ref } from "vue";
import PageHero from "../Components/Widget/PageHero.vue";
import VenueCard from "../Components/Widget/VenueCard.vue";
import AppCTA from "../Components/Section/AppCTA.vue";
import { rooms } from "../../../data/rooms";
</script>

<template>
  <div class="rooms-page">
    <PageHero
      title="Exquisite Venues"
      subtitle="The Art of Space"
      image="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop"
    />

    <section class="rooms-grid-section container">
      <div class="medium-2 large-3 gap-2">
        <VenueCard v-for="room in rooms" :key="room.id" :venue="room" />
      </div>
    </section>

    <!-- Final CTA -->
    <AppCTA :showExplore="false" />
  </div>
</template>

<style scoped>
.rooms-page {
  /* Removed padding-bottom to allow AppCTA to overlap footer */
}

.rooms-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 2rem;
  margin-bottom: 6rem;
}

.page-padding {
  padding-top: 6rem;
}
</style>
