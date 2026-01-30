<script setup>
import SectionHeader from './SectionHeader.vue'
const facilities = [
  {
    icon: 'fa-utensils',
    title: 'Gourmet Catering',
    desc: 'Award-winning culinary teams providing world-class dining experiences from gala dinners to quick business lunches.',
    spec: 'Michelin Star Quality'
  },
  {
    icon: 'fa-microchip',
    title: 'Smart Tech AV',
    desc: 'Integrated 4K LED walls, high-fidelity sound systems, and automated lighting controlled via dedicated onsite tech teams.',
    spec: '4K / 120Hz Streaming'
  },
  {
    icon: 'fa-shield-alt',
    title: 'Elite Security',
    desc: 'Bespoke security protocols including VIP protection, 24/7 surveillance, and professional crowd management services.',
    spec: 'Biometric Access'
  },
  {
    icon: 'fa-network-wired',
    title: 'Gigabit Connectivity',
    desc: 'Ultra-fast dedicated fiber-optic internet with seamless Wi-Fi 6 coverage throughout the entire convention facility.',
    spec: '10 Gbps Dedicated'
  },
  {
    icon: 'fa-truck-loading',
    title: 'Logistics Hub',
    desc: 'Deep loading docks and freight elevators that allow for efficient setup of heavy equipment and massive exhibitions.',
    spec: '50-Ton Capacity'
  },
  {
    icon: 'fa-tv',
    title: 'Broadcast Studio',
    desc: 'In-house high-end studio for hybrid event broadcasting and professional content creation.',
    spec: 'Studio 4K Ready'
  }
]
</script>

<template>
  <section class="holographic-hub">
    <div class="container container-content">
      <SectionHeader 
        badge="Infrastructure 4.0"
        title="The Holographic Hub"
        subtitle="Next-generation facility ecosystems exceeding international standards."
        theme="dark"
      />

      <div class="facilities-grid">
        <div v-for="facility in facilities" :key="facility.title" class="hologram-card glass">
          <div class="card-glow"></div>
          <div class="icon-orb">
            <i :class="['fas', facility.icon]"></i>
          </div>
          <div class="card-content">
            <div class="spec-tag">{{ facility.spec }}</div>
            <h3>{{ facility.title }}</h3>
            <p>{{ facility.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.holographic-hub {
  padding: 10rem 0;
  background: #0F172A; /* Slate 900 */
  position: relative;
  overflow: hidden;
}

/* Background Gradients */
.holographic-hub::before {
  content: '';
  position: absolute;
  top: -10%;
  right: -5%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
  z-index: 0;
}

.holographic-hub::after {
  content: '';
  position: absolute;
  bottom: -10%;
  left: -5%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(244, 63, 94, 0.1) 0%, transparent 70%);
  z-index: 0;
}

.container-content {
  position: relative;
  z-index: 1;
}

.facilities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.hologram-card {
  position: relative;
  padding: 3rem;
  border-radius: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  overflow: hidden;
}

.hologram-card:hover {
  transform: translateY(-15px) scale(1.02);
  border-color: rgba(99, 102, 241, 0.5);
  background: rgba(255, 255, 255, 0.05);
}

.card-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(99, 102, 241, 0.15) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.5s ease;
}

.hologram-card:hover .card-glow {
  opacity: 1;
}

.icon-orb {
  width: 70px;
  height: 70px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #818CF8;
  margin-bottom: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.5s ease;
  position: relative;
  overflow: hidden;
}

.hologram-card:hover .icon-orb {
  background: linear-gradient(135deg, #6366F1, #F43F5E);
  color: white;
  transform: rotate(10deg) scale(1.1);
  box-shadow: 0 0 30px rgba(99, 102, 241, 0.4);
}

.spec-tag {
  font-size: 0.65rem;
  font-weight: 800;
  color: #10B981;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
}

.card-content h3 {
  color: white;
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.card-content p {
  color: #64748B; /* Slate 500 */
  line-height: 1.7;
}

@media (max-width: 768px) {
  .holographic-hub {
    padding: 6rem 1.5rem;
  }
  
  .hologram-card {
    padding: 2.5rem;
  }
}
</style>
