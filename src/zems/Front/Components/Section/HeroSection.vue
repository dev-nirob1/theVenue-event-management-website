<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import BaseImage from "../../../../components/element/BaseImage.vue";
import BaseParagraph from "../../../../components/element/BaseParagraph.vue";
import HeroTitle from "../../../../components/element/HeroTitle.vue";
import BaseButton from "../Widget/BaseButton.vue";

const slides = [
  {
    id: 1,
    title: "Grand Ballroom & Royal Suites",
    subtitle:
      "Where architectural grandeur meets world-class hospitality for the most prestigious global summits.",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Sky Pavilion Rooftop Lounge",
    subtitle:
      "A cinematic glass-walled ecosystem suspended above the city skyline, perfect for high-end product launches.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Industrial Hall Exhibition Wing",
    subtitle:
      "Vast, RAW, and versatile. A 15,000 sq ft canvas built for massive tech exhibitions and automotive shows.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
  },
];

const currentSlide = ref(0);
const slideInterval = ref(null);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length;
};

const startAutoplay = () => {
  slideInterval.value = setInterval(nextSlide, 5000);
};

const stopAutoplay = () => {
  if (slideInterval.value) clearInterval(slideInterval.value);
};

onMounted(() => {
  startAutoplay();
});

onUnmounted(() => {
  stopAutoplay();
});
</script>
<template>
  <section class="hero-section relative">
    <div class="container" style="position: relative; height: 100%">
      <transition-group name="fade">
        <div
          v-for="(slide, index) in slides"
          :key="slide.id"
          v-show="currentSlide === index"
          class="slide-container"
        >
          <div class="content">
            <HeroTitle>{{ slide.title }}</HeroTitle>
            <BaseParagraph>{{ slide.subtitle }}</BaseParagraph>
            <div class="flex gap-1 justify-center lg:justify-start">
              <BaseButton>Book Venue</BaseButton>
              <BaseButton>Virtual Tour</BaseButton>
            </div>
          </div>
          <div class="image">
            <BaseImage :image="slide.image" />
          </div>
        </div>
      </transition-group>
    </div>
  </section>
</template>
<style scoped>
.hero-section {
  min-height: 100vh;
  width: 100%;
  color: var(--white-color);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.hero-section .hero-title {
  font-weight: 800;
  font-size: 5rem;
}
.hero-section p {
  font-size: 1.25rem;
}
.slide-container {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  inset: 0;
}
.image::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 20;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.2)
  );
}
.content {
  position: relative;
  height: 100%;
  padding: 6rem 0;
  z-index: 50;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
@media (min-width: 992px) {
  .content {
    max-width: 60%;
    text-align: left;
    align-items: flex-start;
  }
}

/* Simple fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
