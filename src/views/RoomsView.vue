<script setup>
import { ref } from 'vue'
import SectionHeader from '../components/SectionHeader.vue'
import RoomCard from '../components/RoomCard.vue'

const rooms = ref([
  {
    id: 1,
    title: 'The Grand Royal Hall',
    capacity: 1200,
    price: 2500,
    category: 'Premium',
    eventTypes: ['Weddings', 'Galas', 'Conferences'],
    images: [
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop'
    ]
  },
  {
    id: 2,
    title: 'Sky Pavilion Terrace',
    capacity: 450,
    price: 1800,
    category: 'Outdoor',
    eventTypes: ['Cocktails', 'Parties', 'Art Shows'],
    images: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop'
    ]
  },
  {
    id: 3,
    title: 'Modern Innovation Lab',
    capacity: 250,
    price: 900,
    category: 'Corporate',
    eventTypes: ['Workshops', 'Tech Talks', 'Training'],
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop'
    ]
  },
  {
    id: 4,
    title: 'The Industrial Studio',
    capacity: 800,
    price: 1500,
    category: 'Artistic',
    eventTypes: ['Exhibitions', 'Fashion Shows', 'Concerts'],
    images: [
      'https://images.unsplash.com/photo-1522158633578-d19005a2c739?q=80&w=2071&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1531058020387-3be344556ec6?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop'
    ]
  },
  {
    id: 5,
    title: 'Executive Boardroom',
    capacity: 35,
    price: 450,
    category: 'Business',
    eventTypes: ['Meetings', 'Seminars', 'Private Dining'],
    images: [
      'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1912&auto=format&fit=crop'
    ]
  },
  {
    id: 6,
    title: 'Glass Garden Atrium',
    capacity: 150,
    price: 1200,
    category: 'Boutique',
    eventTypes: ['Private Parties', 'Intimate Weddings'],
    images: [
      'https://images.unsplash.com/photo-1523413363574-23c7422d5fd6?q=80&w=2071&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1534442220457-414406203cf3?q=80&w=1853&auto=format&fit=crop'
    ]
  }
])
</script>

<template>
  <div class="rooms-page">
    <div class="header-section">
      <div class="container">
        <SectionHeader 
          badge="Exquisite Venues"
          title="Discover Our <br/> World-Class Spaces"
          subtitle="From grand ballrooms to intimate creative studios, find the perfect canvas for your next milestone event."
          theme="light"
        />
      </div>
    </div>

    <section class="rooms-grid-section container">
      <div class="rooms-grid">
        <RoomCard 
          v-for="room in rooms" 
          :key="room.id" 
          :room="room" 
        />
      </div>
    </section>

    <!-- Simple Inquiry CTA -->
    <section class="inquiry-cta container">
      <div class="cta-banner glass">
        <div class="cta-text">
          <h3>Need a custom configuration?</h3>
          <p>Our venue specialists can help you combine spaces or create a bespoke layout for massive events.</p>
        </div>
        <router-link to="/contact" class="btn-inquiry">
          Consult our Experts
        </router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
.rooms-page {
  padding-bottom: 8rem;
}

.header-section {
  padding: 6rem 0 4rem;
  background: linear-gradient(to bottom, #f1f5f9 0%, white 100%);
}

.rooms-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 2.5rem;
  margin-bottom: 6rem;
}

.inquiry-cta {
  margin-top: 2rem;
}

.cta-banner {
  padding: 4rem;
  border-radius: 2.5rem;
  background: var(--text-main);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.cta-text h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: white;
}

.cta-text p {
  color: #94A3B8;
  max-width: 500px;
}

.btn-inquiry {
  background: white;
  color: var(--text-main);
  padding: 1.25rem 2.5rem;
  border-radius: 3rem;
  font-weight: 800;
  white-space: nowrap;
  transition: all 0.3s ease;
}

.btn-inquiry:hover {
  background: var(--primary);
  color: white;
  transform: translateY(-5px);
}

@media (max-width: 1024px) {
  .cta-banner {
    flex-direction: column;
    text-align: center;
    padding: 3rem;
  }
}

@media (max-width: 640px) {
  .rooms-grid {
    grid-template-columns: 1fr;
  }
}
</style>
