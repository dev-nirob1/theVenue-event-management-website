<script setup>
import SectionHeader from "../Widget/SectionHeader.vue";
import BaseButton from "../Widget/BaseButton.vue";
</script>

<template>
  <section class="curator-section">
    <div class="container">
      <SectionHeader
        align="center"
        badge="Curation"
        title="Bespoke Event Experiences"
        description="Select your event archetype to begin a journey of meticulous planning and flawless execution."
      />

      <div class="curator-grid">
        <div class="curator-card">
          <div class="card-icon"><i class="fas fa-briefcase"></i></div>
          <h3>Corporate Excellence</h3>
          <p>
            From executive retreats to industry conferences, we provide the
            precision and technology required for modern business success.
          </p>
          <BaseButton
            variant="outline"
            size="md"
            to="/contact"
            class="full-width"
            >Inquire Corporate</BaseButton
          >
        </div>

        <div class="curator-card featured">
          <div class="card-icon"><i class="fas fa-gem"></i></div>
          <h3>Grand Celebrations</h3>
          <p>
            Weddings and galas that transcend the ordinary. Every detail
            orchestrated to create memories that resonate for a lifetime.
          </p>
          <BaseButton
            variant="primary"
            size="md"
            to="/contact"
            class="full-width"
            >Plan Celebration</BaseButton
          >
        </div>

        <div class="curator-card">
          <div class="card-icon"><i class="fas fa-palette"></i></div>
          <h3>Artistic Showcases</h3>
          <p>
            Exhibitions and launches that demand a creative touch. We provide
            the canvas for your most ambitious artistic visions.
          </p>
          <BaseButton
            variant="outline"
            size="md"
            to="/contact"
            class="full-width"
            >Begin Project</BaseButton
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.curator-section {
  padding: 4rem 0;
  background: #f8fafc;
}

.curator-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.curator-card {
  background: white;
  padding: 3rem 2rem;
  border-radius: 1rem;
  border: 1px solid var(--border);
  text-align: center;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.curator-card.featured {
  background: white;
  border-color: var(--primary);
  border-width: 2px;
  transform: translateY(-1rem);
  box-shadow: 0 30px 60px -15px rgba(99, 102, 241, 0.15);
}

.curator-card.featured h3 {
  color: var(--text-main);
}

.curator-card.featured p {
  color: var(--text-muted);
}

.curator-card:hover {
  transform: translateY(-0.5rem);
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.1);
  border-color: var(--primary);
}

.curator-card.featured:hover {
  transform: translateY(-1.5rem);
  box-shadow: 0 40px 80px -20px rgba(15, 23, 42, 0.4);
}

.card-icon {
  width: 60px;
  height: 60px;
  background: rgba(99, 102, 241, 0.1);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
}

.curator-card.featured .card-icon {
  background: var(--primary);
  color: white;
}

.curator-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.curator-card p {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  flex-grow: 1;
}

.full-width {
  width: 100%;
}
</style>
