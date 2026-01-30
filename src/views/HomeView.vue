<script setup>
import HeroSlider from '../components/HeroSlider.vue'
import VisionSection from '../components/VisionSection.vue'
import FeaturedSpaces from '../components/FeaturedSpaces.vue'
import PremiumFacilities from '../components/PremiumFacilities.vue'
import UpcomingEvents from '../components/UpcomingEvents.vue'
import HomeCTA from '../components/HomeCTA.vue'
</script>

<template>
  <div class="home-page">
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
    <HomeCTA />
  </div>
</template>

<style scoped>
.home-page {
  margin-top: -5rem; 
}
</style>
