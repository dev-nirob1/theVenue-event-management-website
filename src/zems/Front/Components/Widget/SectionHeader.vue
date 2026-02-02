<script setup>
import BaseTitle from "../../../../components/element/BaseTitle.vue";

defineProps({
  badge: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  align: {
    type: String,
    default: "left", // left, center
  },
  theme: {
    type: String,
    default: "light", // light, dark
  },
});
</script>

<template>
  <div :class="['section-header', align, theme]">
    <div v-if="badge" class="header-badge">
      <span class="badge-dot"></span>
      {{ badge }}
    </div>
    <BaseTitle v-if="title" class="header-title" v-html="title"></BaseTitle>
    <p v-if="description" class="header-desc">{{ description }}</p>
  </div>
</template>

<style scoped>
.section-header {
  display: flex;
  flex-direction: column;
  max-width: 800px;
}

.section-header.center {
  align-items: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.section-header.left {
  align-items: flex-start;
  text-align: left;
}

/* Badge Styling */
.header-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background: rgba(var(--primary-rgb), 0.1);
  color: var(--primary);
  border-radius: 2rem;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border: 1px solid rgba(var(--primary-rgb), 0.2);
}

.badge-dot {
  width: 6px;
  height: 6px;
  background: var(--primary);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--primary);
}

/* Title Styling */
.header-title {
  margin-bottom: 1.5rem;
  line-height: 1.1;
}

.section-header.light .header-title {
  color: var(--text-main);
}

.section-header.dark .header-title {
  color: white;
}

/* Description Styling */
.header-desc {
  font-size: 1.125rem;
  line-height: 1.6;
  color: var(--text-muted);
}

.section-header.dark .header-desc {
  color: rgba(255, 255, 255, 0.6);
}

@media (max-width: 768px) {
  .header-title {
    font-size: 2.5rem !important;
  }
}
</style>
