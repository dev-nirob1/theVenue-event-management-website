<script setup>
import BaseImage from "../../../../components/element/BaseImage.vue";

defineProps({
  client: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="testimonial-card">
    <div class="card-inner">
      <!-- Quote Icon -->
      <div class="quote-icon">
        <i class="fas fa-quote-right"></i>
      </div>

      <!-- Content -->
      <p class="feedback">"{{ client.feedback }}"</p>

      <!-- Client Info -->
      <div class="client-info">
        <div class="avatar-wrapper">
          <BaseImage :image="client.avatar" :alt="client.name" class="avatar" />
        </div>
        <div class="details">
          <h4 class="name">{{ client.name }}</h4>
          <span class="role">{{ client.role }}</span>
        </div>
      </div>

      <!-- Rating -->
      <div class="rating">
        <i v-for="i in 5" :key="i" class="fas fa-star"></i>
      </div>
    </div>
  </div>
</template>

<style scoped>
.testimonial-card {
  padding: 2.5rem;
  border-radius: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin: 1rem;
  background: var(--background);
}

.testimonial-card:hover {
  transform: translateY(-5px);
  border-color: var(--primary);
  box-shadow: var(--shadow-lg);
}

.quote-icon {
  position: absolute;
  top: 2rem;
  right: 2.5rem;
  font-size: 2.5rem;
  color: var(--primary);
  opacity: 0.1;
}

.feedback {
  font-size: 1.25rem;
  line-height: 1.6;
  color: var(--text-main);
  font-weight: 500;
  margin-bottom: 2.5rem;
  flex-grow: 1;
}

.client-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.avatar-wrapper {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.details .name {
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--text-main);
  margin: 0;
}

.details .role {
  font-size: 0.85rem;
  color: var(--text-muted);
  font-weight: 600;
}

.rating {
  display: flex;
  gap: 0.25rem;
  color: #f59e0b; /* Amber 500 */
  font-size: 0.75rem;
}

@media (max-width: 768px) {
  .testimonial-card {
    padding: 2rem;
  }
  .feedback {
    font-size: 1.1rem;
  }
}
</style>
