<script setup>
// import HeroSection from '../Components/Section/HeroSection.vue';
import HeroSlider from "../Components/Section/HeroSlider.vue";
import VisionSection from "../Components/Section/VisionSection.vue";
import FeaturedSpaces from "../Components/Section/FeaturedSpaces.vue";
// import PremiumFacilities from '../Components/Section/PremiumFacilities.vue'
// import UpcomingEvents from '../Components/Section/UpcomingEvents.vue'
// import HomeCTA from '../Components/Section/HomeCTA.vue'
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
    <!-- <PremiumFacilities /> -->

    <!-- Upcoming Events -->
    <!-- <UpcomingEvents /> -->

    <!-- Final CTA -->
    <!-- <HomeCTA /> -->
  </div>
</template>

<style scoped>
.home-page {
  margin-top: -5rem;
}
</style>
