<script setup>
import { onMounted } from 'vue'
import SectionHeader from '../Components/Widget/SectionHeader.vue'
import BaseButton from '../Components/Widget/BaseButton.vue'
import Breadcrumbs from '../Components/Widget/Breadcrumbs.vue'

onMounted(() => {
  window.scrollTo(0, 0)
})

const pillars = [
  {
    icon: 'fa-pencil-ruler',
    title: 'Architectural Vision',
    desc: 'Designed by world-class visionaries, our space blends structural innovation with timeless elegance.'
  },
  {
    icon: 'fa-hand-sparkles',
    title: 'Elite Hospitality',
    desc: 'Every detail is curated by expert event managers dedicated to flawless guest experiences.'
  },
  {
    icon: 'fa-microchip',
    title: 'Future Tech',
    desc: 'Equipped with Tier-1 data connectivity and immersive audiovisual systems for global summits.'
  }
]
</script>

<template>
  <div class="about-page page-padding">
    <!-- 1. Cinematic Hero -->
    <!-- <section class="about-hero">
      <div class="hero-image-wrapper">
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" alt="The Venue Architecture" class="hero-img">
        <div class="hero-overlay"></div>
      </div>
      <div class="container hero-content">
        <Breadcrumbs />
        <div class="hero-badge">Est. 1998</div>
        <h1 class="hero-title">Engineering <br/><span class="text-accent">Memorable Legacies</span></h1>
        <p class="hero-subtitle">Discover the architectural masterpiece designed to host the world's most significant gatherings.</p>
      </div>
    </section> -->

    <!-- 2. The Heritage Story -->
    <!-- <section class="heritage-section container">
      <div class="heritage-grid">
        <div class="heritage-text">
          <SectionHeader 
            badge="Our Story"
            title="A Landmark of <br/> Unrivaled Ambition"
            theme="light"
          />
          <p class="main-para">
            "The Venue" was conceived not just as a convention center, but as a cathedral of industry. Born from the vision of avant-garde architects, it spans over 50,000 sq ft of engineered excellence.
          </p>
          <p class="sub-para">
            From the soaring ceilings of the Grand Royal Hall to the cinematic city views of the Sky Pavilion, every inch of this space has been optimized for inspiration, collaboration, and celebration.
          </p>
          
          <div class="heritage-stats">
            <div class="h-stat">
              <span class="num">25+</span>
              <span class="lab">Years of Service</span>
            </div>
            <div class="h-stat">
              <span class="num">5k+</span>
              <span class="lab">Events Hosted</span>
            </div>
          </div>
        </div>
        
        <div class="heritage-visual">
          <div class="visual-stack">
            <div class="img-box top">
              <img src="https://images.unsplash.com/photo-1517457373958-b7bdd458ad20?q=80&w=2070&auto=format&fit=crop" alt="Heritage 1">
            </div>
            <div class="img-box bottom glass">
              <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop" alt="Heritage 2">
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- 3. Pillars of Excellence -->
    <!-- <section class="pillars-section">
      <div class="container">
        <SectionHeader 
          align="center"
          badge="Our Values"
          title="The Pillars of Perfection"
          subtitle="Guided by precision, driven by passion, and defined by the excellence of our execution."
        />

        <div class="pillars-grid">
          <div v-for="pillar in pillars" :key="pillar.title" class="pillar-card glass">
            <div class="pillar-icon">
              <i :class="['fas', pillar.icon]"></i>
            </div>
            <h3>{{ pillar.title }}</h3>
            <p>{{ pillar.desc }}</p>
          </div>
        </div>
      </div>
    </section> -->

    <!-- 4. CTA -->
    <!-- <section class="about-cta container">
      <div class="cta-inner glass">
        <div class="cta-text">
          <h2>Ready to book <br/> your next masterpiece?</h2>
          <p>Join the ranks of global leaders who choose our space for their vision.</p>
        </div>
        <div class="cta-btns">
          <BaseButton variant="primary" size="lg">Explore Venues</BaseButton>
          <router-link to="/contact" class="secondary-btn">Contact Sales <i class="fas fa-arrow-right"></i></router-link>
        </div>
      </div>
    </section> -->
  </div>
</template>

<style scoped>
.about-page {
  overflow-x: hidden;
}

.page-padding {
  padding-top: 0; /* Hero is full screen */
}

/* 1. Hero Section */
.about-hero {
  position: relative;
  height: 90vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-image-wrapper {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.1);
  animation: slowZoom 20s infinite alternate;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.4) 60%, transparent 100%);
}

.hero-content {
  position: relative;
  z-index: 2;
  color: white;
}

.hero-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 3rem;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 2rem;
}

.hero-title {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 950;
  line-height: 0.95;
  letter-spacing: -0.04em;
  margin-bottom: 2rem;
}

.text-accent {
  background: linear-gradient(to right, #6366F1, #F43F5E);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 500px;
  line-height: 1.6;
}

/* 2. Heritage Section */
.heritage-section {
  padding: 10rem 0;
}

.heritage-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;
}

.main-para {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-main);
  line-height: 1.5;
  margin-bottom: 2rem;
}

.sub-para {
  font-size: 1.125rem;
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: 3.5rem;
}

.heritage-stats {
  display: flex;
  gap: 4rem;
}

.h-stat .num {
  display: block;
  font-size: 2.5rem;
  font-weight: 950;
  color: var(--primary);
  line-height: 1;
  margin-bottom: 0.5rem;
}

.h-stat .lab {
  font-size: 0.75rem;
  font-weight: 800;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.visual-stack {
  position: relative;
  height: 500px;
}

.img-box {
  position: absolute;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.img-box.top {
  width: 80%;
  height: 80%;
  top: 0;
  left: 0;
  z-index: 1;
}

.img-box.bottom {
  width: 60%;
  height: 60%;
  bottom: 0;
  right: 0;
  z-index: 2;
  border: 4px solid white;
}

.img-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 3. Pillars Section */
.pillars-section {
  padding: 10rem 0;
  background: #f8fafc;
}

.pillars-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-top: 5rem;
}

.pillar-card {
  padding: 4rem 3rem;
  background: white;
  border-radius: 2.5rem;
  border: 1px solid var(--border);
  text-align: center;
  transition: all 0.4s ease;
}

.pillar-card:hover {
  transform: translateY(-10px);
  border-color: var(--primary);
  box-shadow: var(--shadow-lg);
}

.pillar-icon {
  width: 70px;
  height: 70px;
  background: rgba(99, 102, 241, 0.05);
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: var(--primary);
  margin: 0 auto 2.5rem;
  transition: all 0.3s ease;
}

.pillar-card:hover .pillar-icon {
  background: var(--primary);
  color: white;
  transform: rotateY(180deg);
}

.pillar-card h3 {
  font-size: 1.5rem;
  font-weight: 900;
  margin-bottom: 1.5rem;
}

.pillar-card p {
  color: var(--text-muted);
  line-height: 1.7;
}

/* 4. CTA Section */
.about-cta {
  padding: 8rem 0;
}

.cta-inner {
  padding: 6rem;
  background: #0F172A;
  border-radius: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}

.cta-text h2 {
  font-size: 3rem;
  font-weight: 900;
  color: white;
  margin-bottom: 1rem;
}

.cta-text p {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.6);
}

.cta-btns {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}

.secondary-btn {
  font-weight: 800;
  color: white;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: gap 0.3s ease;
}

.secondary-btn:hover {
  gap: 1.5rem;
}

@keyframes slowZoom {
  to { transform: scale(1.2); }
}

@media (max-width: 1024px) {
  .heritage-grid { grid-template-columns: 1fr; gap: 4rem; }
  .pillars-grid { grid-template-columns: 1fr; }
  .cta-inner { flex-direction: column; text-align: center; gap: 4rem; }
}

@media (max-width: 768px) {
  .hero-title { font-size: 3.5rem; }
  .about-hero { height: 80vh; }
  .cta-inner { padding: 4rem 2rem; }
  .cta-text h2 { font-size: 2.25rem; }
  .heritage-stats { flex-direction: column; gap: 2rem; }
}
</style>
