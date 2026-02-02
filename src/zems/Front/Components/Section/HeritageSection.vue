<script setup>
import SectionHeader from "../Widget/SectionHeader.vue";

const stats = [
  { num: "25+", lab: "Years of Service" },
  { num: "5k+", lab: "Events Hosted" },
];
</script>

<template>
  <section class="heritage-section">
    <div class="container">
      <div class="heritage-grid">
        <div class="heritage-text">
          <SectionHeader
            badge="Our Story"
            title="A Landmark of <br/> Unrivaled Ambition"
            theme="light"
          />
          <p class="main-para">
            "The Venue" was conceived not just as a convention center, but as a
            cathedral of industry. Born from the vision of avant-garde
            architects, it spans over 50,000 sq ft of engineered excellence.
          </p>
          <p class="sub-para">
            From the soaring ceilings of the Grand Royal Hall to the cinematic
            city views of the Sky Pavilion, every inch of this space has been
            optimized for inspiration, collaboration, and celebration.
          </p>

          <div class="heritage-stats">
            <div v-for="stat in stats" :key="stat.lab" class="h-stat">
              <span class="num">{{ stat.num }}</span>
              <span class="lab">{{ stat.lab }}</span>
            </div>
          </div>
        </div>

        <div class="heritage-visual">
          <div class="visual-stack">
            <div class="img-box top">
              <img
                src="https://images.unsplash.com/photo-1517457373958-b7bdd458ad20?q=80&w=2070&auto=format&fit=crop"
                alt="Heritage 1"
              />
            </div>
            <div class="img-box bottom">
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop"
                alt="Heritage 2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.heritage-section {
  padding: 4rem 0;
  background: #f8fafc;
}

.heritage-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.main-para {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-main);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.sub-para {
  font-size: 1.125rem;
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 3rem;
}

.heritage-stats {
  display: flex;
  gap: 3rem;
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
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
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

@media (max-width: 1024px) {
  .heritage-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .visual-stack {
    height: 400px;
  }
}

@media (max-width: 768px) {
  .heritage-stats {
    flex-direction: column;
    gap: 2rem;
  }
  .heritage-section {
    padding: 3rem 0;
  }
}
</style>
