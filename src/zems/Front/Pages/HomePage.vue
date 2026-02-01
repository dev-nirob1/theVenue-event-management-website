<script setup>
// import HeroSection from '../Components/Section/HeroSection.vue';
import HeroSlider from "../Components/Section/HeroSlider.vue";
import VisionSection from "../Components/Section/VisionSection.vue";
import FeaturedSpaces from "../Components/Section/FeaturedSpaces.vue";
import PremiumFacilities from "../Components/Section/PremiumFacilities.vue";
import UpcomingEvents from "../Components/Section/UpcomingEvents.vue";
import Testimonials from "../Components/Section/Testimonials.vue";
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

    <!-- Testimonials -->
    <Testimonials />

    <!-- Final CTA -->
    <AppCTA />
  </div>
</template>

<style scoped></style>
