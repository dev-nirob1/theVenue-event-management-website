<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const breadcrumbs = computed(() => {
  const pathArray = route.path.split("/").filter((p) => p);
  const crumbs = pathArray.map((path, index) => {
    const to = "/" + pathArray.slice(0, index + 1).join("/");

    // Format label: Replace hyphens with spaces, capitalize
    let label = path.replace(/-/g, " ");

    // Mapping for specific paths
    if (label.toLowerCase() === "rooms") label = "Venues";

    return {
      label: label.charAt(0).toUpperCase() + label.slice(1),
      to,
    };
  });

  return [{ label: "The Venue", to: "/" }, ...crumbs];
});
</script>

<template>
  <nav class="architect-breadcrumbs" v-if="route.path !== '/'">
    <div class="breadcrumb-dock glass">
      <div
        v-for="(crumb, index) in breadcrumbs"
        :key="crumb.to"
        class="breadcrumb-item"
      >
        <router-link
          v-if="index < breadcrumbs.length - 1"
          :to="crumb.to"
          class="breadcrumb-link"
        >
          <span class="index">0{{ index + 1 }}</span>
          <span class="label">{{ crumb.label }}</span>
        </router-link>

        <div v-else class="breadcrumb-current">
          <span class="index">0{{ index + 1 }}</span>
          <span class="label">{{ crumb.label }}</span>
        </div>

        <div v-if="index < breadcrumbs.length - 1" class="separator">
          <div class="slash"></div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.architect-breadcrumbs {
  display: flex;
  animation: slideInDock 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.breadcrumb-dock {
  display: flex;
  align-items: center;
  padding: 0.75rem 2rem;
  border-radius: 1rem;
  background: rgba(201, 201, 201, 0.6);
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow:
    0 10px 30px -10px rgba(15, 23, 42, 0.05),
    0 4px 6px -1px rgba(15, 23, 42, 0.02);
}

.breadcrumb-item {
  display: flex;
  align-items: center;
}

.breadcrumb-link,
.breadcrumb-current {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  transition: all 0.3s ease;
}

.index {
  font-size: 0.75rem;
  font-weight: 900;
  color: var(--primary);
}

.breadcrumb-link:hover {
  color: var(--text-main);
  transform: translateY(-1px);
}

.breadcrumb-current {
  color: var(--text-main);
  position: relative;
}

.breadcrumb-current .label::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--primary);
  border-radius: 2px;
}

.separator {
  margin: 0 1.5rem;
  height: 20px;
  display: flex;
  align-items: center;
}

.slash {
  width: 1px;
  height: 100%;
  background: rgba(25, 47, 99, 0.1);
  transform: rotate(25deg);
}

@keyframes slideInDock {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 768px) {
  .breadcrumb-dock {
    padding: 0.6rem 1.5rem;
    overflow-x: auto;
    max-width: calc(100vw - 4rem);
  }
  .separator {
    margin: 0 1rem;
  }
  .breadcrumb-dock::-webkit-scrollbar {
    display: none;
  }
}
</style>
