<script setup>
import BaseButton from './BaseButton.vue'
import SectionHeader from './SectionHeader.vue'
</script>

<template>
  <section class="vision-section container">
    <div class="vision-grid">
      <!-- Content Side (Left) -->
      <div class="vision-content">
        <SectionHeader 
          badge="Our Philosophy"
          title="Where Vision Meets <br/> Architectural Mastery"
          theme="light"
        />
        
        <p class="section-desc">
          An architectural symphony of glass and steel, designed to serve as the ultimate stage for global summits and luxury ceremonies.
        </p>

        <div class="stats-row">
          <div class="stat-item">
            <span class="num">150+</span>
            <span class="label">Major Events</span>
          </div>
          <div class="stat-item">
            <span class="num">20M+</span>
            <span class="label">Investment</span>
          </div>
        </div>

        <div class="action-row">
          <BaseButton variant="primary" class="btn-fancy">Explore Our Story</BaseButton>
          <button class="play-btn">
            <span class="icon"><i class="fas fa-play"></i></span>
            <span class="text">Watch Cinema</span>
          </button>
        </div>
      </div>

      <!-- Visual Side (Right) -->
      <div class="vision-visuals">
        <div class="image-stack">
          <div class="img-wrapper main-img">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" alt="Architecture">
          </div>
          <div class="img-wrapper floating-img">
            <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop" alt="Detail">
          </div>
        </div>
        
        <div class="floating-badge glass">
          <i class="fas fa-award"></i>
          <span>Award Winning Venue</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.vision-section {
  padding: 6rem 0;
  position: relative;
}

.vision-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.section-desc {
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--text-muted);
  max-width: 500px;
  margin-bottom: 2.5rem;
}

.stats-row {
  display: flex;
  gap: 3rem;
  margin-bottom: 3.5rem;
}

.stat-item .num {
  display: block;
  font-size: 2.25rem;
  font-weight: 900;
  color: var(--text-main);
  margin-bottom: 0.5rem;
}

.stat-item .label {
  font-size: 0.75rem;
  font-weight: 800;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.action-row {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.btn-fancy {
  border-radius: 4rem;
  padding: 1.25rem 2.5rem;
  font-weight: 800;
}

.play-btn {
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  font-weight: 800;
  color: var(--text-main);
}

.play-btn .icon {
  width: 50px;
  height: 50px;
  border: 1px solid var(--border);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.play-btn:hover .icon {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
  transform: scale(1.1);
}

/* Visuals */
.vision-visuals {
  position: relative;
}

.image-stack {
  position: relative;
  height: 500px;
}

.img-wrapper {
  position: absolute;
  overflow: hidden;
  border-radius: 2rem;
  box-shadow: var(--shadow-lg);
}

.main-img {
  width: 85%;
  height: 90%;
  top: 0;
  right: 0;
  z-index: 1;
}

.main-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.floating-img {
  width: 50%;
  height: 45%;
  bottom: -30px;
  left: 0;
  z-index: 2;
  border: 5px solid white;
  animation: float 6s infinite ease-in-out;
}

.floating-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.floating-badge {
  position: absolute;
  bottom: 2rem;
  right: -1rem;
  padding: 1rem 1.5rem;
  border-radius: 1.25rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: var(--shadow-md);
  z-index: 10;
}

.floating-badge i {
  color: var(--primary);
  font-size: 1.25rem;
}

.floating-badge span {
  font-weight: 800;
  font-size: 0.8rem;
  text-transform: uppercase;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

@media (max-width: 1024px) {
  .vision-grid {
    grid-template-columns: 1fr;
    gap: 6rem;
  }
  .vision-content { order: 2; }
  .vision-visuals { order: 1; }
}

@media (max-width: 768px) {
  .action-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }
  .stats-row {
    flex-direction: column;
    gap: 2rem;
  }
}
</style>
