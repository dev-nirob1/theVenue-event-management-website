<script setup>
import SectionHeader from "../Widget/SectionHeader.vue";

const pillars = [
  {
    icon: "fa-pencil-ruler",
    title: "Architectural Vision",
    desc: "Designed by world-class visionaries, our space blends structural innovation with timeless elegance.",
  },
  {
    icon: "fa-hand-sparkles",
    title: "Elite Hospitality",
    desc: "Every detail is curated by expert event managers dedicated to flawless guest experiences.",
  },
  {
    icon: "fa-microchip",
    title: "Future Tech",
    desc: "Equipped with Tier-1 data connectivity and immersive audiovisual systems for global summits.",
  },
];
</script>

<template>
  <section class="pillars-section">
    <div class="container">
      <SectionHeader
        align="center"
        badge="Our Values"
        title="The Pillars of Perfection"
        description="Guided by precision, driven by passion, and defined by the excellence of our execution."
      />

      <div class="pillars-grid">
        <div v-for="pillar in pillars" :key="pillar.title" class="pillar-card">
          <div class="pillar-icon">
            <i :class="['fas', pillar.icon]"></i>
          </div>
          <h3>{{ pillar.title }}</h3>
          <p>{{ pillar.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pillars-section {
  padding: 4rem 0;
  background: white;
}

.pillars-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;
}

.pillar-card {
  padding: 2.5rem 2rem;
  background: #f8fafc;
  border-radius: 1rem;
  border: 1px solid var(--border);
  text-align: center;
  transition: all 0.3s ease;
}

.pillar-card:hover {
  transform: translateY(-5px);
  border-color: var(--primary);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
}

.pillar-icon {
  width: 60px;
  height: 60px;
  background: white;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: var(--primary);
  margin: 0 auto 2rem;
  transition: all 0.3s ease;
  border: 1px solid var(--border);
}

.pillar-card:hover .pillar-icon {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}

.pillar-card h3 {
  font-size: 1.25rem;
  font-weight: 950;
  margin-bottom: 1rem;
  color: var(--text-main);
}

.pillar-card p {
  color: var(--text-muted);
  line-height: 1.7;
  font-size: 1rem;
}

@media (max-width: 1024px) {
  .pillars-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .pillars-section {
    padding: 3rem 0;
  }
}
</style>
