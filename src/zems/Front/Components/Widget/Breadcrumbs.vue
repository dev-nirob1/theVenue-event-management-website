<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const breadcrumbs = computed(() => {
  const pathArray = route.path.split('/').filter(p => p)
  const crumbs = pathArray.map((path, index) => {
    const to = '/' + pathArray.slice(0, index + 1).join('/')
    
    // Format label: Replace hyphens with spaces, capitalize
    let label = path.replace(/-/g, ' ')
    
    // Mapping for specific paths if needed
    if (label.toLowerCase() === 'rooms') label = 'Venues'
    
    return {
      label: label.charAt(0).toUpperCase() + label.slice(1),
      to
    }
  })

  return [
    { label: 'Home', to: '/' },
    ...crumbs
  ]
})
</script>

<template>
  <nav class="breadcrumbs" v-if="route.path !== '/'">
    <div class="crumb-list">
      <div v-for="(crumb, index) in breadcrumbs" :key="crumb.to" class="crumb-item">
        <router-link 
          v-if="index < breadcrumbs.length - 1" 
          :to="crumb.to"
          class="crumb-link"
        >
          {{ crumb.label }}
        </router-link>
        <span v-else class="crumb-current">{{ crumb.label }}</span>
        
        <i v-if="index < breadcrumbs.length - 1" class="fas fa-chevron-right separator"></i>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.breadcrumbs {
  margin-bottom: 2rem;
  animation: fadeIn 0.8s ease forwards;
}

.crumb-list {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.crumb-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.crumb-link {
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--text-muted);
  letter-spacing: 0.1em;
  transition: color 0.3s ease;
  text-decoration: none;
}

.crumb-link:hover {
  color: var(--primary);
}

.crumb-current {
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--primary);
  letter-spacing: 0.1em;
}

.separator {
  font-size: 0.6rem;
  color: var(--border);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
