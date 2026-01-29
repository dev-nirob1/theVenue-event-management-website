<script setup>
import BaseButton from './BaseButton.vue'
</script>

<template>
  <section class="vision-section container">
    <!-- Big faint background text for depth -->
    <div class="parallax-text">EXCELLENCE</div>
    
    <div class="vision-wrapper">
      <div class="image-layer">
        <div class="image-main">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" alt="Modern Architecture">
          <div class="accent-box"></div>
        </div>
        <div class="image-sub">
          <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop" alt="Interior Detail">
        </div>
      </div>
      
      <div class="content-layer">
        <div class="content-card glass">
          <div class="card-badge">Our Philosophy</div>
          <h2 class="card-title">Where Vision Meets <span class="text-gradient">Architectural Mastery</span></h2>
          <p class="card-desc">
            We believe that every grand event begins with an inspiring space. Our center isn't just a building; it's a canvas for the world's most innovative ideas and prestigious celebrations.
          </p>
          <div class="stats-row">
            <div class="stat-item">
              <span class="stat-num">50k+</span>
              <span class="stat-label">Sq. Ft. Space</span>
            </div>
            <div class="stat-item">
              <span class="stat-num">15+</span>
              <span class="stat-label">Luxury Halls</span>
            </div>
          </div>
          <BaseButton variant="outline" class="learn-more-btn">Discover Our Story</BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.vision-section {
  position: relative;
  padding: 10rem 1.5rem;
  overflow: hidden;
}

.parallax-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 15vw;
  font-weight: 900;
  color: rgba(15, 23, 42, 0.03);
  z-index: 0;
  pointer-events: none;
  letter-spacing: 0.1em;
  white-space: nowrap;
}

.vision-wrapper {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 6rem;
  position: relative;
  z-index: 1;
}

.image-layer {
  position: relative;
}

.image-main {
  position: relative;
  width: 90%;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.2);
}

.image-main img {
  width: 100%;
  display: block;
}

.accent-box {
  position: absolute;
  bottom: -40px;
  right: -40px;
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 2rem;
  z-index: -1;
  opacity: 0.2;
}

.image-sub {
  position: absolute;
  bottom: -60px;
  right: 0;
  width: 45%;
  border-radius: 1.5rem;
  overflow: hidden;
  border: 10px solid white;
  box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.3);
}

.image-sub img {
  width: 100%;
  display: block;
}

.content-layer {
  position: relative;
}

.content-card {
  padding: 4rem;
  border-radius: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transform: translateX(-100px);
  background: rgba(255, 255, 255, 0.8);
  text-align: left;
}

.card-badge {
  color: var(--primary);
  font-weight: 800;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-bottom: 2rem;
}

.card-title {
  font-size: 3.5rem;
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 2rem;
  letter-spacing: -0.02em;
}

.card-desc {
  font-size: 1.125rem;
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: 3rem;
}

.stats-row {
  display: flex;
  gap: 3rem;
  margin-bottom: 3.5rem;
}

.stat-num {
  display: block;
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--text-muted);
  letter-spacing: 0.05em;
}

.learn-more-btn {
  border-radius: 1rem;
  padding: 1.25rem 2.5rem;
  font-weight: 800;
  font-size: 1rem;
}

@media (max-width: 1200px) {
  .vision-wrapper {
    grid-template-columns: 1fr;
    gap: 8rem;
  }
  
  .content-card {
    transform: none;
    max-width: 700px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .card-title {
    font-size: 2.5rem;
  }
  
  .content-card {
    padding: 2.5rem;
  }
  
  .image-sub {
    width: 60%;
    bottom: -40px;
  }
  
  .parallax-text {
    font-size: 25vw;
  }
}
</style>
