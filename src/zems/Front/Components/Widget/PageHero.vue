<script setup>
import { onMounted, ref } from "vue";
import Breadcrumbs from "./Breadcrumbs.vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: "Prestige & Excellence",
  },
  image: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop",
  },
});

const isLoaded = ref(false);
onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true;
  }, 100);
});
</script>

<template>
  <div :class="['page-hero-cinematic', { 'is-active': isLoaded }]">
    <!-- Image Layer with Slow Parallax/Zoom -->
    <div class="hero-image-layer">
      <img :src="image" :alt="title" class="parallax-img" />
      <div class="gradient-overlay"></div>
      <div class="vignette-overlay"></div>
    </div>

    <!-- Decorative Elements -->
    <div class="architectural-line top"></div>
    <div class="architectural-line left"></div>

    <div class="container content-container">
      <div class="text-wrapper">
        <h1 class="hero-title" v-html="title"></h1>
      </div>

      <!-- Floating Breadcrumbs -->
      <div class="hero-breadcrumb-container">
        <Breadcrumbs />
      </div>
    </div>

    <div class="scroll-tag">
      <span>Discovery</span>
      <div class="tag-line"></div>
    </div>
  </div>
</template>

<style scoped>
.page-hero-cinematic {
  position: relative;
  height: 60vh;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 4rem;
  background: #0f172a;
}

/* Image Background Logic */
.hero-image-layer {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.parallax-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.15);
  transition: transform 2.5s cubic-bezier(0.16, 1, 0.3, 1);
  filter: brightness(0.9);
}

.is-active .parallax-img {
  transform: scale(1.02);
}

.gradient-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(15, 23, 42, 0.3) 0%,
    rgba(15, 23, 42, 0) 40%,
    rgba(15, 23, 42, 0.9) 100%
  );
}

.vignette-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle,
    transparent 20%,
    rgba(15, 23, 42, 0.4) 100%
  );
}

/* Content Layout */
.content-container {
  position: relative;
  z-index: 10;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text-wrapper {
  text-align: center;
  max-width: 900px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s;
}

.is-active .text-wrapper {
  opacity: 1;
  transform: translateY(0);
}

.hero-subtitle {
  font-size: 0.9rem;
  font-weight: 800;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.4em;
  display: block;
  margin-bottom: 1.5rem;
}

.title-divider {
  width: 60px;
  height: 2px;
  background: var(--primary);
  margin: 0 auto 2rem;
  transform: scaleX(0);
  transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.6s;
}

.is-active .title-divider {
  transform: scaleX(1);
}

.hero-title {
  font-size: clamp(3rem, 9vw, 6rem);
  font-weight: 950;
  color: white;
  text-transform: uppercase;
  line-height: 0.95;
  letter-spacing: -0.04em;
  margin-bottom: 1rem;
  text-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

/* Breadcrumb Container */
.hero-breadcrumb-container {
  position: absolute;
  bottom: -4rem;
  left: 50%;
  transform: translateX(-50%) translateY(20px);
  opacity: 0;
  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.9s;
  z-index: 20;
}

.is-active .hero-breadcrumb-container {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

/* Architectural Decals */
.architectural-line {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  z-index: 5;
}

.architectural-line.top {
  top: 10%;
  left: 5%;
  right: 5%;
  height: 1px;
}

.architectural-line.left {
  top: 5%;
  bottom: 5%;
  left: 10%;
  width: 1px;
}

.scroll-tag {
  position: absolute;
  right: 4rem;
  bottom: 4rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transform: rotate(-90deg) translateX(100%);
  transform-origin: right bottom;
  color: rgba(255, 255, 255, 0.3);
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

.tag-line {
  width: 40px;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
}

@media (max-width: 1024px) {
  .page-hero-cinematic {
    height: 50vh;
  }
  .scroll-tag {
    display: none;
  }
}

@media (max-width: 768px) {
  .page-hero-cinematic {
    height: 45vh;
    min-height: 400px;
    margin-bottom: 5rem;
  }
  .hero-title {
    font-size: clamp(2rem, 10vw, 4rem);
    line-height: 1.1;
  }
  .breadcrumb-dock {
    padding: 0.5rem 1.5rem;
    bottom: -3.5rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2.25rem;
  }
  .page-hero-cinematic {
    height: 40vh;
    min-height: 320px;
    margin-bottom: 4rem;
  }
}
</style>
