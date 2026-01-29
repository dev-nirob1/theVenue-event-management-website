<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import BaseButton from './BaseButton.vue'

const currentSlide = ref(0)
const slides = [
  {
    id: 1,
    title: 'The Grand <br/><span class="text-gradient">Ballroom</span>',
    subtitle: 'London\'s most prestigious space for gala dinners, weddings, and high-profile corporate events.',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop',
    align: 'left'
  },
  {
    id: 2,
    title: 'The Sky <br/><span class="text-gradient">Pavilion</span>',
    subtitle: 'A breathtaking rooftop venue with panoramic city views, perfect for cocktail receptions and product launches.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop',
    align: 'right'
  },
  {
    id: 3,
    title: 'Modern <br/><span class="text-gradient">Conference</span> Suites',
    subtitle: 'State-of-the-art facilities designed for global exhibitions, conferences, and hybrid events.',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop',
    align: 'left'
  }
]

let slideInterval = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}

const startAutoplay = () => {
  slideInterval = setInterval(nextSlide, 6000)
}

const stopAutoplay = () => {
  if (slideInterval) clearInterval(slideInterval)
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<template>
  <section class="hero-slider" @mouseenter="stopAutoplay" @mouseleave="startAutoplay">
    <div class="slides-container">
      <transition-group name="slide" tag="div" class="slides-wrapper">
        <div 
          v-for="(slide, index) in slides" 
          :key="slide.id" 
          v-show="currentSlide === index"
          class="slide"
        >
          <div class="slide-bg" :style="{ backgroundImage: `url(${slide.image})` }"></div>
          <div class="slide-overlay"></div>
          
          <!-- Vibrant Background Shapes restored from previous design -->
          <div class="hero-bg-shapes">
            <div class="shape shape-1"></div>
            <div class="shape shape-2"></div>
          </div>
          
          <div class="container slide-content-wrapper">
            <div :class="['slide-content', `align-${slide.align}`]">
              <h1 class="slide-title" v-html="slide.title"></h1>
              <p class="slide-subtitle">{{ slide.subtitle }}</p>
              <div class="slide-actions">
                <BaseButton size="lg">Our Services</BaseButton>
                <BaseButton variant="outline" size="lg">Contact Us</BaseButton>
              </div>
            </div>
          </div>
        </div>
      </transition-group>
    </div>

    <!-- Navigation Buttons -->
    <button class="nav-btn prev" @click="prevSlide" aria-label="Previous slide">
      <i class="fas fa-chevron-left"></i>
    </button>
    <button class="nav-btn next" @click="nextSlide" aria-label="Next slide">
      <i class="fas fa-chevron-right"></i>
    </button>

    <!-- Indicators -->
    <div class="indicators">
      <span 
        v-for="(_, index) in slides" 
        :key="index"
        :class="['indicator', { active: currentSlide === index }]"
        @click="currentSlide = index"
      ></span>
    </div>
  </section>
</template>

<style scoped>
.hero-slider {
  position: relative;
  height: 100vh;
  min-height: 100vh;
  overflow: hidden;
  background: #000;
}

.slides-container, .slides-wrapper, .slide {
  height: 100%;
  width: 100%;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
}

.slide-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transform: scale(1.1);
  transition: transform 6s ease;
}

.slide[style*="display: block"] .slide-bg {
  transform: scale(1);
}

.slide-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom, 
    rgba(15, 23, 42, 0.4) 0%, 
    rgba(15, 23, 42, 0.8) 100%
  );
}

/* Background Shapes Restored */
.hero-bg-shapes .shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.5;
  z-index: 5;
  animation: float 20s infinite alternate;
}

.shape-1 {
  width: 500px;
  height: 500px;
  background: var(--primary);
  top: -100px;
  right: -50px;
}

.shape-2 {
  width: 400px;
  height: 400px;
  background: var(--secondary);
  bottom: -50px;
  left: -50px;
  animation-delay: -5s !important;
}

@keyframes float {
  from { transform: translate(0, 0); }
  to { transform: translate(30px, 30px); }
}

.slide-content-wrapper {
  position: relative;
  z-index: 20;
  height: 100%;
  display: flex;
  align-items: center;
}

.slide-content {
  max-width: 700px;
  color: white;
}

.align-left {
  text-align: left;
  margin-right: auto;
}

.align-right {
  text-align: right;
  margin-left: auto;
}

.slide-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  line-height: 1.1;
  margin-bottom: 1.5rem;
  font-weight: 800;
}

.text-gradient {
  background: linear-gradient(to right, #6366F1, #F43F5E);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.slide-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  line-height: 1.6;
}

.slide-actions {
  display: flex;
  gap: 1.25rem;
  justify-content: inherit;
}

.align-right .slide-actions {
  justify-content: flex-end;
}

/* Nav Buttons */
.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 1.25rem;
  z-index: 20;
  transition: all var(--transition-fast);
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-btn:hover {
  background: var(--primary);
  border-color: var(--primary);
  transform: translateY(-50%) scale(1.1);
}

.prev { left: 1rem; }
.next { right: 1rem; }

/* Indicators */
.indicators {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1rem;
  z-index: 20;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.indicator.active {
  background: var(--primary);
  width: 30px;
  border-radius: 10px;
}

/* Slide Transition (Right to Left) */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.8s cubic-bezier(0.65, 0, 0.35, 1);
}

.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

@media (max-width: 768px) {
  .slide-content {
    text-align: center !important;
    padding: 1rem;
  }
  .slide-actions {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
    max-width: 280px;
    margin: 0 auto;
  }
  .nav-btn {
    width: 35px;
    height: 35px;
  }
}
</style>
