<script setup>
import SectionHeader from "../Widget/SectionHeader.vue";

const values = [
  {
    icon: "fa-gem",
    title: "Uncompromising Quality",
    desc: "Every detail meticulously crafted to exceed the highest standards of excellence.",
  },
  {
    icon: "fa-lightbulb",
    title: "Innovation First",
    desc: "Pioneering cutting-edge solutions that redefine the event industry.",
  },
  {
    icon: "fa-handshake",
    title: "Client Partnership",
    desc: "Building lasting relationships through trust, transparency, and dedication.",
  },
];
</script>

<template>
  <section class="values-section">
    <div class="container">
      <SectionHeader
        align="center"
        badge="Our Values"
        title="The Pillars of Perfection"
        description="Guided by precision, driven by passion, and defined by excellence."
      />

      <div class="values-grid">
        <div v-for="value in values" :key="value.title" class="value-card">
          <div class="value-icon">
            <i :class="['fas', value.icon]"></i>
          </div>
          <h3>{{ value.title }}</h3>
          <p>{{ value.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.values-section {
  padding: 4rem 0;
  background: white;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;
}

.value-card {
  padding: 2.5rem 2rem;
  background: #f8fafc;
  border: 1px solid var(--border);
  border-radius: 1rem;
  text-align: center;
  transition: all 0.3s ease;
}

.value-card:hover {
  transform: translateY(-8px);
  border-color: var(--primary);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
  background: white;
}

.value-icon {
  width: 64px;
  height: 64px;
  background: white;
  border: 1px solid var(--border);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  color: var(--primary);
  margin: 0 auto 1.5rem;
  transition: all 0.3s ease;
}

.value-card:hover .value-icon {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
  transform: scale(1.1) rotate(5deg);
}

.value-card h3 {
  font-size: 1.25rem;
  font-weight: 950;
  color: var(--text-main);
  margin-bottom: 1rem;
}

.value-card p {
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.7;
}

@media (max-width: 1024px) {
  .values-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .values-section {
    padding: 3rem 0;
  }
}
</style>
