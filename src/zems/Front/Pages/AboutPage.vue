<script setup>
import { onMounted } from "vue";
import PageHero from "../Components/Widget/PageHero.vue";
import StorySection from "../Components/Section/StorySection.vue";
import ValuesSection from "../Components/Section/ValuesSection.vue";
import AppCTA from "../Components/Section/AppCTA.vue";

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <div class="about-page">
    <!-- Hero -->
    <PageHero
      title="Engineering <br/> Memorable Legacies"
      subtitle="Our Journey & Vision"
      image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
    />

    <!-- Story Section -->
    <StorySection />

    <!-- Values Section -->
    <ValuesSection />

    <!-- CTA -->
    <AppCTA />
  </div>
</template>

<style scoped>
/* No styles needed - all sections are separate components */
</style>
