<script setup>
// import HeroSection from '../Components/Section/HeroSection.vue';
import HeroSlider from "../Components/Section/HeroSlider.vue";
import VisionSection from "../Components/Section/VisionSection.vue";
import FeaturedSpaces from "../Components/Section/FeaturedSpaces.vue";
import PremiumFacilities from "../Components/Section/PremiumFacilities.vue";
import UpcomingEvents from "../Components/Section/UpcomingEvents.vue";
import AppCTA from "../Components/Section/AppCTA.vue";
</script>

<template>
  <div>
    <!-- <HeroSection/> -->
    <HeroSlider />

    <!-- Vision & Philosophy Section -->
    <VisionSection />

    <!-- Featured Venue Spaces -->
    <FeaturedSpaces />

    <!-- Premium Facilities -->
    <PremiumFacilities />

    <!-- Upcoming Events -->
    <UpcomingEvents />

    <!-- Final CTA -->
    <AppCTA class="overlap-footer" />
  </div>
</template>

<style scoped>
.home-page {
  margin-top: -5rem;
}

.overlap-footer {
  margin-bottom: -15rem; /* Overlap amount */
  position: relative;
  z-index: 50;
}
</style>
