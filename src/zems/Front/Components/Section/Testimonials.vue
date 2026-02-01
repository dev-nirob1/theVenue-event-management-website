<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import SectionHeader from "../Widget/SectionHeader.vue";
import TestimonialCard from "../Widget/TestimonialCard.vue";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "CEO, TechVision Global",
    feedback:
      "The architectural design of the Grand Royal Hall provided the perfect backdrop for our annual summit. Flawless execution and premium service.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "David Chen",
    role: "Event Director, Moda Expo",
    feedback:
      "The industrial wing is a masterpiece of versatility. We hosted a massive tech expo and the infrastructure handled everything with ease.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Aesthetic Architect",
    feedback:
      "As an architect, I am impressed by the geometric precision and material honesty of this venue. It is a landmark of modern design.",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Marcus Thorne",
    role: "Founder, Elite Gatherings",
    feedback:
      "Every corner of The Venue tells a story of luxury. Our high-profile clients were absolutely mesmerized by the panoramic views.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
  },
];

const currentIndex = ref(0);
const autoplayInterval = ref(null);
const isMobile = ref(false);

// For 2-column layout on desktop, we show 2 cards at a time.
// We'll calculate the total number of "steps" or slides.
// Total cards: 4. Visible: 2. Steps: 3 (0-1, 1-2, 2-3) or 2 (0-1, 2-3).
// Given "prev/next" and "autoplay", sliding one by one is smoother.

const updateIsMobile = () => {
  isMobile.value = window.innerWidth < 992;
};

const maxIndex = computed(() => {
  if (isMobile.value) return testimonials.length - 1;
  return testimonials.length - 2;
});

const nextSlide = () => {
  if (currentIndex.value >= maxIndex.value) {
    currentIndex.value = 0;
  } else {
    currentIndex.value++;
  }
};

const prevSlide = () => {
  if (currentIndex.value <= 0) {
    currentIndex.value = maxIndex.value;
  } else {
    currentIndex.value--;
  }
};

const startAutoplay = () => {
  autoplayInterval.value = setInterval(nextSlide, 3000);
};

const stopAutoplay = () => {
  if (autoplayInterval.value) clearInterval(autoplayInterval.value);
};

onMounted(() => {
  updateIsMobile();
  window.addEventListener("resize", updateIsMobile);
  startAutoplay();
});

onUnmounted(() => {
  window.removeEventListener("resize", updateIsMobile);
  stopAutoplay();
});
</script>

<template>
  <section class="testimonials-section">
    <div class="container">
      <div class="header-row">
        <SectionHeader subTitle="Testimonials" title="What Our Clients Say" />

        <!-- Custom Navigation -->
        <div class="slider-nav">
          <button
            class="nav-btn prev"
            @click="prevSlide"
            aria-label="Previous testimonial"
          >
            <i class="fas fa-arrow-left"></i>
          </button>
          <button
            class="nav-btn next"
            @click="nextSlide"
            aria-label="Next testimonial"
          >
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>

      <div
        class="slider-viewport"
        @mouseenter="stopAutoplay"
        @mouseleave="startAutoplay"
      >
        <div
          class="slider-track"
          :style="{
            transform: `translateX(-${currentIndex * (isMobile ? 100 : 50)}%)`,
          }"
        >
          <div
            v-for="testimonial in testimonials"
            :key="testimonial.id"
            class="slide-item"
          >
            <TestimonialCard :client="testimonial" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials-section {
  padding: 4.75rem 0;
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2rem;
}

.slider-nav {
  display: flex;
  gap: 1rem;
}

.nav-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: white;
  border: 1px solid var(--border);
  color: var(--text-main);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: var(--shadow-sm);
}

.nav-btn:hover {
  background: var(--primary);
  border-color: var(--primary);
  color: white;
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.slider-viewport {
  margin: 0 -1rem;
  overflow: hidden; /* Mask only here */
  padding: 1.5rem 0; /* Vertical room for shadows and hover lift */
}

.slider-track {
  display: flex;
  transition: transform 0.8s cubic-bezier(0.65, 0, 0.35, 1);
}

.slide-item {
  flex: 0 0 50%;
  min-width: 50%;
}

@media (max-width: 992px) {
  .slide-item {
    flex: 0 0 100%;
    min-width: 100%;
  }
}

@media (max-width: 768px) {
  .header-row {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2rem;
  }
  .testimonials-section {
    padding: 3rem 0;
  }
}
</style>
