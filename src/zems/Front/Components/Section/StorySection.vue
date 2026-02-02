<script setup>
import SectionHeader from "../Widget/SectionHeader.vue";

const stats = [
  { number: "25+", label: "Years of Excellence" },
  { number: "5,000+", label: "Events Hosted" },
  { number: "50,000", label: "Square Feet" },
  { number: "100%", label: "Client Satisfaction" },
];
</script>

<template>
  <section class="story-section">
    <div class="container">
      <div class="story-grid">
        <div class="story-images">
          <div class="img-primary">
            <img
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop"
              alt="Venue Interior"
            />
          </div>
          <div class="img-secondary">
            <img
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop"
              alt="Event Space"
            />
          </div>
        </div>

        <div class="story-content">
          <SectionHeader
            badge="Our Story"
            title="A Landmark of <br/> Unrivaled Ambition"
            theme="light"
          />
          <p class="story-text">
            Born from the vision of avant-garde architects, The Venue stands as
            a cathedral of industry—a 50,000 sq ft masterpiece where structural
            innovation meets timeless elegance.
          </p>
          <p class="story-text">
            From the soaring ceilings of the Grand Royal Hall to the cinematic
            city views of the Sky Pavilion, every inch has been optimized for
            inspiration, collaboration, and celebration.
          </p>

          <div class="stats-grid">
            <div v-for="stat in stats" :key="stat.label" class="stat-item">
              <div class="stat-number">{{ stat.number }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.story-section {
  padding: 4rem 0;
  background: #f8fafc;
}

.story-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
}

.story-images {
  position: relative;
  height: 600px;
}

.img-primary {
  position: absolute;
  width: 75%;
  height: 75%;
  top: 0;
  left: 0;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  z-index: 1;
}

.img-secondary {
  position: absolute;
  width: 65%;
  height: 65%;
  bottom: 0;
  right: 0;
  border-radius: 1rem;
  overflow: hidden;
  border: 6px solid white;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  z-index: 2;
}

.img-primary img,
.img-secondary img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.story-text {
  font-size: 1.125rem;
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
}

.stat-item {
  text-align: left;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 950;
  color: var(--primary);
  line-height: 1;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
}

.stat-label {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

@media (max-width: 1024px) {
  .story-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .story-images {
    height: 500px;
  }
}

@media (max-width: 768px) {
  .story-section {
    padding: 3rem 0;
  }

  .story-images {
    height: 400px;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
