<script setup>
defineProps({
  badge: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: false
  },
  align: {
    type: String,
    default: 'left' // left, center
  },
  theme: {
    type: String,
    default: 'light' // light (black titles), dark (white titles)
  }
})
</script>

<template>
  <div :class="['section-header', `align-${align}`, `theme-${theme}`]">
    <div v-if="badge" class="section-badge">{{ badge }}</div>
    <h2 class="section-title" v-html="title"></h2>
    <p v-if="subtitle" class="section-subtitle">{{ subtitle }}</p>
  </div>
</template>

<style scoped>
.section-header {
  margin-bottom: 3.5rem;
  max-width: 700px;
}

.align-center {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.section-badge {
  display: inline-block;
  padding: 0.5rem 1.25rem;
  background: rgba(99, 102, 241, 0.1);
  color: var(--primary);
  border-radius: 2rem;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1.5rem;
}

.section-title {
  font-size: clamp(2.25rem, 6vw, 3.5rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 1.25rem;
  letter-spacing: -0.03em;
}

.theme-light .section-title {
  color: var(--text-main);
}

.theme-dark .section-title {
  color: white;
}

.section-subtitle {
  font-size: 1.125rem;
  line-height: 1.6;
  max-width: 600px;
}

.theme-light .section-subtitle {
  color: var(--text-muted);
}

.theme-dark .section-subtitle {
  color: #94A3B8;
}

.align-center .section-subtitle {
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 768px) {
  .section-header {
    margin-bottom: 2.5rem;
  }
}
</style>
