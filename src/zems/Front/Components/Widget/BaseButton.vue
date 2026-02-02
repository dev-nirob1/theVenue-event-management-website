<script setup>
defineProps({
  variant: {
    type: String,
    default: "primary",
  },
  size: {
    type: String,
    default: "md",
  },
  to: {
    type: [String, Object],
    default: null,
  },
  href: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <router-link
    v-if="to"
    :to="to"
    :class="['btn', `btn-${variant}`, `btn-${size}`]"
  >
    <slot />
  </router-link>
  <a
    v-else-if="href"
    :href="href"
    :class="['btn', `btn-${variant}`, `btn-${size}`]"
  >
    <slot />
  </a>
  <button v-else :class="['btn', `btn-${variant}`, `btn-${size}`]">
    <slot />
  </button>
</template>

<style scoped>
.btn {
  border-radius: 1rem;
  transition: all var(--transition-fast);
}

.btn-sm {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}
.btn-md {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
}
.btn-lg {
  padding: 1rem 2rem;
  font-size: 1.125rem;
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  border: none;
}

.btn-primary:hover {
  background: linear-gradient(
    135deg,
    var(--primary-hover),
    var(--secondary-hover)
  );
  transform: translateY(-2px);
  box-shadow: 0 8px 20px -6px rgba(99, 102, 241, 0.5);
}

.btn-outline {
  background: transparent;
  border: 2px solid var(--primary);
  color: var(--primary);
}

.btn-outline:hover {
  background: var(--primary);
  color: white;
}
</style>
