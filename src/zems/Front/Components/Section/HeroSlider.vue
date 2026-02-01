<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import BaseButton from "../Widget/BaseButton.vue";

const slides = [
  {
    id: 1,
    title:
      'Grand Ballroom & <br/><span class="text-gradient">Royal Suites</span>',
    subtitle:
      "Where architectural grandeur meets world-class hospitality for the most prestigious global summits.",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop",
    align: "left",
  },
  {
    id: 2,
    title:
      'Sky Pavilion <br/><span class="text-gradient">Rooftop Lounge</span>',
    subtitle:
      "A cinematic glass-walled ecosystem suspended above the city skyline, perfect for high-end product launches.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
    align: "left",
  },
  {
    id: 3,
    title:
      'Industrial Hall <br/><span class="text-gradient">Exhibition Wing</span>',
    subtitle:
      "Vast, RAW, and versatile. A 15,000 sq ft canvas built for massive tech exhibitions and automotive shows.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
    align: "left",
  },
];

const currentSlide = ref(0);
const slideInterval = ref(null);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length;
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
  <section
    class="hero-slider"
    @mouseenter="stopAutoplay"
    @mouseleave="startAutoplay"
  >
    <div class="slides-container">
      <div
        v-for="(slide, index) in slides"
        :key="slide.id"
        :class="['slide', { active: currentSlide === index }]"
      >
        <!-- Background with slow zoom -->
        <div class="image-wrapper">
          <img
            :src="
              slide.image ||
              'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop'
            "
            :alt="slide.title"
            class="slide-image"
            @error="
              (e) =>
                (e.target.src =
                  'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop')
            "
          />
          <div class="overlay"></div>
        </div>

        <div class="slide-content-wrapper">
          <div :class="['slide-content', `align-${slide.align}`]">
            <div class="content-inner">
              <h1 class="slide-title" v-html="slide.title"></h1>
              <p class="slide-subtitle-bottom">{{ slide.subtitle }}</p>
              <div class="slide-actions">
                <BaseButton variant="primary" size="lg" class="btn-cinema"
                  >Book Venue</BaseButton
                >
                <BaseButton
                  variant="outline"
                  size="lg"
                  class="btn-cinema-outline"
                  >Virtual Tour</BaseButton
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Minimalist Navigation -->
    <button class="nav-btn prev" @click="prevSlide">
      <i class="fas fa-chevron-left"></i>
    </button>
    <button class="nav-btn next" @click="nextSlide">
      <i class="fas fa-chevron-right"></i>
    </button>

    <!-- Slide Indicators -->
    <div class="indicators">
      <button
        v-for="(_, index) in slides"
        :key="index"
        :class="['indicator', { active: currentSlide === index }]"
        @click="currentSlide = index"
      ></button>
    </div>
  </section>
</template>

<style scoped>
.hero-slider {
  position: relative;
  height: 100vh;
  min-height: 700px;
  overflow: hidden;
  background: #000;
}

.slides-container {
  height: 100%;
}

.slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  visibility: hidden;
  transition: opacity 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  display: flex;
  align-items: center;
}

.slide.active {
  opacity: 1;
  visibility: visible;
  z-index: 10;
}

.image-wrapper {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.1);
  transition: transform 10s linear;
}

.slide.active .slide-image {
  transform: scale(1.2);
}

.overlay {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      circle at center,
      transparent 0%,
      rgba(15, 23, 42, 0.4) 100%
    ),
    linear-gradient(to right, rgba(15, 23, 42, 0.6) 0%, transparent 60%);
}

.slide.active .overlay {
  background:
    radial-gradient(
      circle at center,
      transparent 0%,
      rgba(15, 23, 42, 0.4) 110%
    ),
    linear-gradient(to right, rgba(15, 23, 42, 0.8) 0%, transparent 80%);
}

/* Cinematic Typography */
.slide-content-wrapper {
  position: relative;
  z-index: 20;
  width: 100%;
  padding: 0 10rem;
}

.slide-content {
  max-width: 850px;
  color: white;
}

.slide-title {
  font-size: clamp(3rem, 6vw, 6rem);
  font-weight: 900;
  line-height: 0.95;
  margin-bottom: 1.5rem;
  letter-spacing: -0.04em;
  opacity: 0;
  transform: skewY(5deg) translateY(50px);
  transition: all 1.2s cubic-bezier(0.165, 0.84, 0.44, 1) 0.8s;
  z-index: 2;
}

.text-gradient {
  color: var(--white-color);
  display: inline-block;
}

.slide-subtitle-bottom {
  font-size: 1.25rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  max-width: 500px;
  margin-bottom: 1.5rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease 1.2s;
}

.slide-actions {
  display: flex;
  gap: 1.5rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease 1.5s;
}

/* Animations Trigger */
.slide.active .slide-title,
.slide.active .slide-subtitle-bottom,
.slide.active .slide-actions {
  opacity: 1;
  transform: none;
}

.slide.active .slide-title {
  color: var(--white-color);
  transform: skewY(0) translateY(0);
}

/* Base Buttons Tweaks */
.btn-cinema {
  border-radius: 4rem;
  /* padding: 1.25rem 3rem; */
  font-weight: 800;
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
}

.btn-cinema-outline {
  border-radius: 4rem;
  /* padding: 1.25rem 3rem; */
  font-weight: 800;
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
  color: white;
}

.btn-cinema-outline:hover {
  background: white;
  color: var(--text-main);
}

/* Nav & Indicators */
.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 30;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 1.15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.nav-btn:hover {
  background: var(--primary);
  border-color: var(--primary);
  transform: translateY(-50%) scale(1.1);
}

.prev {
  left: 2rem;
}
.next {
  right: 2rem;
}

.indicators {
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 30;
  display: flex;
  gap: 1.5rem;
}

.indicator {
  width: 40px;
  height: 2px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  transition: all 0.5s ease;
}

.indicator.active {
  background: var(--primary);
}

.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

@media (max-width: 768px) {
  .slide-content-wrapper {
    padding: 0 2rem;
  }
  .slide-content {
    text-align: left;
  }
  .slide-actions {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
  .nav-btn {
    display: none;
  }
}
</style>
