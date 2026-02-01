<script setup>
defineProps({
  facility: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="hologram-card">
    <div class="icon-orb">
      <i :class="['fas', facility.icon]"></i>
    </div>
    <div class="card-content">
      <div class="spec-tag">{{ facility.spec }}</div>
      <h3>{{ facility.title }}</h3>
      <p>{{ facility.desc }}</p>
    </div>
  </div>
</template>

<style scoped>
.hologram-card {
  cursor: pointer;
  position: relative;
  padding: 2rem 1.5rem;
  border-radius: 1rem;
  background: var(--surface);
  border: 1px solid var(--border);
  transition:
    transform 0.3s ease-out,
    box-shadow 0.3s ease-out,
    border-color 0.3s ease-out;
  height: 100%;
  display: flex;
  flex-direction: column;
  will-change: transform, box-shadow;
}

.hologram-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary);
}

.icon-orb {
  width: 60px;
  height: 60px;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  color: var(--primary);
  background: linear-gradient(135deg, #f8fafc, #f1f5f9);
  margin-bottom: 1.5rem;
  transition:
    transform 0.3s ease-out,
    box-shadow 0.3s ease-out;
  border: 1px solid var(--border);
  position: relative;
  z-index: 1;
  overflow: hidden;
}

/* Pseudo-element for hover gradient */
.icon-orb::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  z-index: -1;
}

/* Icon stays on top */
.icon-orb i {
  position: relative;
  z-index: 2;
  transition: color 0.3s ease-in-out;
}

.hologram-card:hover .icon-orb {
  color: white;
  transform: scale(1.1);
  box-shadow: 0 10px 20px -5px rgba(99, 102, 241, 0.4);
  border-color: transparent;
}

.hologram-card:hover .icon-orb::before {
  opacity: 1;
}

.spec-tag {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
  padding: 0.25rem 0.5rem;
  background: #f1f5f9;
  background: linear-gradient(135deg, #f1f5f9, #e2e8f0);
  border-radius: 4px;
}

.card-content h3 {
  color: var(--text-main);
  font-size: 1.25rem;
  font-weight: 800;
  margin-bottom: 0.75rem;
}

.card-content p {
  color: var(--text-muted);
  line-height: 1.6;
  font-size: 0.95rem;
}
</style>
