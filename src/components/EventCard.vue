<script setup>
defineProps({
  event: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="event-card">
    <div class="card-image">
      <img :src="event.image || 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop'" :alt="event.title">
      <div class="card-badge">{{ event.category }}</div>
    </div>
    <div class="card-content">
      <div class="card-date">{{ event.date }}</div>
      <h3 class="card-title">{{ event.title }}</h3>
      <p class="card-location"><span>📍</span> {{ event.location }}</p>
      <div class="card-footer">
        <span class="card-price">{{ event.price === 0 ? 'Free' : `$${event.price}` }}</span>
        <router-link :to="`/events/${event.id}`" class="btn btn-primary btn-sm">Details</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.event-card {
  background: var(--surface);
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
  border: 1px solid var(--border);
}

.event-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.card-image {
  position: relative;
  height: 200px;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: var(--secondary);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 2rem;
  font-size: 0.75rem;
  font-weight: 600;
}

.card-content {
  padding: 1.5rem;
}

.card-date {
  color: var(--primary);
  font-weight: 600;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
}

.card-title {
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  color: var(--text-main);
}

.card-location {
  color: var(--text-muted);
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
}

.card-price {
  font-weight: 700;
  color: var(--accent);
  font-size: 1.125rem;
}
</style>
