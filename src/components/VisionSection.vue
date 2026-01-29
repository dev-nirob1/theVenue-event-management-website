<script setup>
import BaseButton from './BaseButton.vue'
</script>

<template>
  <section class="vision-fancy">
    <div class="container overflow-visible">
      <div class="vision-grid">
        <!-- Content Side (Left) -->
        <div class="vision-content">
          <div class="reveal-tag">Est. 2024</div>
          <h2 class="title-main">
            An Architectural <br/>
            <span class="text-gradient">Legacy of Excellence</span>
          </h2>
          
          <div class="description-block">
            <div class="vertical-line"></div>
            <p>
              The Venue is more than a structure; it is a symphony of glass, steel, and vision. Designed by world-renowned architects, our space serves as the ultimate stage for the most prestigious global summits and intimate luxury celebrations alike.
            </p>
          </div>

          <div class="stats-glass-row">
            <div class="stat-glass">
              <span class="num">150+</span>
              <span class="label">Major Events</span>
            </div>
            <div class="stat-glass">
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

        <!-- Visual Side (Right/Overlap) -->
        <div class="vision-visuals">
          <div class="image-stack">
            <div class="img-wrapper main-img">
              <div class="frame-tag">Main Gallery</div>
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" alt="Architecture">
            </div>
            <div class="img-wrapper floating-img-1">
              <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop" alt="Detail">
            </div>
            <!-- <div class="img-wrapper floating-img-2">
              <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop" alt="Meeting">
            </div> -->
          </div>
          
          <!-- Decorative UI Elements -->
          <div class="ui-element floating-badge glass">
            <i class="fas fa-award"></i>
            <span>Award Winning Venue</span>
          </div>
        </div>
      </div>
    </div>
    
  </section>
</template>

<style scoped>
.vision-fancy {
  position: relative;
  padding: 3.75rem 0;
  background: white;
  overflow: hidden;
}

.overflow-visible {
  overflow: visible;
}

.vision-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  position: relative;
  z-index: 2;
}

/* Content Styles */
.reveal-tag {
  font-size: 0.75rem;
  font-weight: 800;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.4em;
}

.title-main {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 900;
  line-height: 0.95;
  margin: 2rem 0;
  letter-spacing: -0.04em;
  color: var(--text-main);
}

.description-block {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
}

.vertical-line {
  width: 2px;
  background: linear-gradient(to bottom, var(--primary), transparent);
  flex-shrink: 0;
}

.description-block p {
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--text-muted);
  max-width: 500px;
}

.stats-glass-row {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
}

.stat-glass {
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 0, 0, 0.05);
  padding: 2rem;
  border-radius: 1.5rem;
  flex: 1;
  transition: all 0.4s ease;
}

.stat-glass:hover {
  transform: translateY(-5px);
  background: white;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
}

.stat-glass .num {
  display: block;
  font-size: 2.25rem;
  font-weight: 900;
  color: var(--text-main);
  margin-bottom: 0.5rem;
}

.stat-glass .label {
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
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.2);
}

.play-btn {
  display: flex;
  align-items: center;
  gap: 1rem;
  /* background: none; */
  border: none;
  cursor: pointer;
  font-weight: 800;
  color: var(--text-main);
  transition: all 0.3s ease;
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

/* Visual Styles */
.vision-visuals {
  position: relative;
}

.image-stack {
  position: relative;
  height: 600px;
}

.img-wrapper {
  position: absolute;
  overflow: hidden;
  border-radius: 2rem;
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.15);
  transition: all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.main-img {
  width: 80%;
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

.frame-tag {
  position: absolute;
  top: 2rem;
  left: 2rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.65rem;
  font-weight: 800;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  z-index: 5;
}

.floating-img-1 {
  width: 45%;
  height: 40%;
  bottom: -40px;
  left: 0;
  z-index: 2;
  border: 4px solid white;
  animation: float 6s infinite ease-in-out;
}

.floating-img-1 img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.floating-img-2 {
  width: 35%;
  height: 30%;
  top: 40px;
  left: -80px;
  z-index: 0;
  opacity: 0.8;
  filter: grayscale(1);
}

.floating-img-2 img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.floating-badge {
  position: absolute;
  bottom: 2rem;
  right: -2rem;
  background: white;
  padding: 1.5rem 2rem;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.floating-badge i {
  font-size: 1.5rem;
  color: var(--primary);
}

.floating-badge span {
  font-weight: 800;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

/* Parallax Background Text */
.parallax-bg-text {
  position: absolute;
  bottom: -4rem;
  left: 0;
  font-size: 20vw;
  font-weight: 900;
  line-height: 1;
  color: rgba(15, 23, 42, 0.02);
  z-index: 1;
  pointer-events: none;
  letter-spacing: -0.05em;
  white-space: nowrap;
}

/* Responsive */
@media (max-width: 1200px) {
  .vision-grid {
    grid-template-columns: 1fr;
    gap: 8rem;
  }
  
  .vision-content {
    order: 2;
  }
  
  .vision-visuals {
    order: 1;
  }
  
  .image-stack {
    height: 500px;
  }
  
  .floating-img-2 {
    left: 0;
  }
}

@media (max-width: 768px) {
  .vision-fancy {
    padding: 8rem 0;
  }
  
  .stats-glass-row {
    flex-direction: column;
  }
  
  .action-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }
  
  .image-stack {
    height: 400px;
  }
  
  .main-img {
    width: 100%;
    right: 0;
  }
  
  .floating-img-1 {
    width: 60%;
    bottom: -20px;
  }
  
  .floating-badge {
    right: 0;
    bottom: -60px;
  }
}
</style>
