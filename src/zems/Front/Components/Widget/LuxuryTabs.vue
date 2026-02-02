<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  tabs: {
    type: Array,
    required: true,
    // Expects: [{ label: 'Upcoming', count: 5, value: 'upcoming' }]
  },
});

const emit = defineEmits(["update:modelValue"]);

const activeIndex = computed(() => {
  return props.tabs.findIndex((tab) => tab.value === props.modelValue);
});

const selectTab = (value) => {
  emit("update:modelValue", value);
};
</script>

<template>
  <div class="tabs-lockup">
    <div class="luxury-dock glass">
      <!-- Sliding Indicator -->
      <div
        class="active-slide"
        :style="{
          width: `calc((100% - (var(--dock-padding) * 2) - ${tabs.length - 1} * var(--tab-gap)) / ${tabs.length})`,
          transform: `translateX(calc(${activeIndex * 100}% + ${activeIndex} * var(--tab-gap)))`,
        }"
      ></div>

      <button
        v-for="tab in tabs"
        :key="tab.value"
        @click="selectTab(tab.value)"
        :class="['dock-link', { active: modelValue === tab.value }]"
      >
        <span class="link-label">{{ tab.label }}</span>
        <span v-if="tab.count !== undefined" class="link-count">{{
          tab.count
        }}</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.tabs-lockup {
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 100;
  margin-bottom: 2.5rem;
  width: 100%;
}

.luxury-dock {
  --dock-padding: 0.5rem;
  --tab-gap: 0.5rem;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(25px) saturate(180%);
  padding: var(--dock-padding);
  border-radius: 100px;
  display: flex;
  gap: var(--tab-gap);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow:
    0 30px 60px -12px rgba(15, 23, 42, 0.12),
    0 18px 36px -18px rgba(15, 23, 42, 0.1);
  position: relative;
  min-width: 420px;
  max-width: 100%;
}

.dock-link {
  flex: 1;
  padding: 1.15rem 2.5rem;
  border: none;
  background: transparent;
  cursor: pointer;
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  white-space: nowrap;
}

.link-label {
  font-weight: 900;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--text-muted);
  transition: all 0.4s ease;
}

.dock-link.active .link-label {
  color: white;
}

.link-count {
  font-size: 0.7rem;
  font-weight: 800;
  color: var(--text-muted);
  background: rgba(15, 23, 42, 0.05);
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
  transition: all 0.4s ease;
}

.dock-link.active .link-count {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

/* Sliding Background */
.active-slide {
  position: absolute;
  top: var(--dock-padding);
  bottom: var(--dock-padding);
  left: var(--dock-padding);
  background: var(--primary);
  color: #fffefe !important;
  border-radius: 100px;
  box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.08);
  transition: all 0.7s cubic-bezier(0.19, 1, 0.22, 1);
  z-index: 1;
}

@media (max-width: 768px) {
  .tabs-lockup {
    margin-bottom: 2.5rem;
  }
  .luxury-dock {
    --dock-padding: 0.4rem;
    --tab-gap: 0.25rem;
    min-width: auto;
    width: 100%;
    border-radius: 2.5rem;
  }

  .dock-link {
    padding: 1rem 1.25rem;
    gap: 0.5rem;
  }

  .link-label {
    font-size: 0.8rem;
    letter-spacing: 0.1em;
  }

  .link-count {
    font-size: 0.65rem;
    padding: 0.15rem 0.4rem;
  }

  .active-slide {
    top: 0.4rem;
    bottom: 0.4rem;
  }
}

@media (max-width: 480px) {
  .luxury-dock {
    border-radius: 2rem;
  }

  .dock-link {
    padding: 0.85rem 1rem;
  }

  .link-label {
    font-size: 0.75rem;
  }

  .link-count {
    display: none;
  }
}
</style>
