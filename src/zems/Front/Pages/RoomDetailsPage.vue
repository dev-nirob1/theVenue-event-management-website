<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { rooms } from '../data/rooms'
import BaseButton from '../Components/Widget/BaseButton.vue'
import SectionHeader from '../Components/Widget/SectionHeader.vue'
import Breadcrumbs from '../Components/Widget/Breadcrumbs.vue'

const route = useRoute()
const slug = computed(() => route.params.slug)
const room = computed(() => rooms.find(r => r.slug === slug.value))

const activeImage = ref(room.value?.images?.[0] || '')

onMounted(() => {
  if (room.value && !activeImage.value) {
    activeImage.value = room.value.images[0]
  }
  window.scrollTo(0, 0)
})

const setActiveImage = (img) => {
  activeImage.value = img
}
</script>

<template>
  <div v-if="room" class="room-details-revised page-padding">
    <!-- 1. Room Gallery Section -->
    <section class="gallery-section">
      <div class="container gallery-container">
        <Breadcrumbs />
        <div class="main-stage">
          <transition name="fade-scale" mode="out-in">
            <img 
              v-if="activeImage"
              :key="activeImage" 
              :src="activeImage" 
              :alt="room.title" 
              class="stage-img"
              @error="(e) => (e.target.src = 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop')"
            >
          </transition>
          <div class="stage-overlay">
            <div class="room-meta">
              <span class="category-badge">{{ room.category }} Venue</span>
              <h1 class="main-title">{{ room.title }}</h1>
            </div>
          </div>
        </div>
        
        <div class="thumbnail-grid">
          <div 
            v-for="(img, idx) in room.images" 
            :key="idx" 
            :class="['thumb-box', { active: activeImage === img }]"
            @click="setActiveImage(img)"
          >
            <img :src="img" alt="Venue view">
            <div class="thumb-overlay"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. Room Information Section -->
    <section class="info-section container">
      <div class="info-grid">
        <!-- Left: Basic Info & Description -->
        <div class="info-main">
          <SectionHeader 
            badge="The Space"
            title="Architectural Details & <br/> Atmosphere"
            theme="light"
          />
          <p class="description-text">{{ room.description }}</p>
          
          <div class="spec-highlights">
            <div class="spec-node">
              <i class="fas fa-users-cog"></i>
              <div class="node-content">
                <span class="label">Total Capacity</span>
                <span class="value">{{ room.capacity }} Guests</span>
              </div>
            </div>
            <div class="spec-node">
              <i class="fas fa-layer-group"></i>
              <div class="node-content">
                <span class="label">Space Type</span>
                <span class="value">{{ room.category }} Collection</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Layouts & Facilities -->
        <div class="info-sidebar">
          <!-- Layout Types -->
          <div class="info-card glass">
            <h3 class="card-title"><i class="fas fa-th-large"></i> Seating Layouts</h3>
            <div class="layouts-list">
              <div v-for="layout in room.layouts" :key="layout.name" class="layout-item">
                <span class="name">{{ layout.name }}</span>
                <span class="cap">{{ layout.capacity }} Ppl</span>
              </div>
            </div>
          </div>

          <!-- Facilities -->
          <div class="info-card glass">
            <h3 class="card-title"><i class="fas fa-concierge-bell"></i> Amenities</h3>
            <div class="facilities-grid-sm">
              <div v-for="facility in room.facilities" :key="facility.text" class="facility-pill">
                <i :class="['fas', facility.icon]"></i>
                {{ facility.text }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Supported Events -->
      <div class="supported-events-row">
        <h3 class="row-label">Perfect for:</h3>
        <div class="event-tags">
          <span v-for="event in room.eventTypes" :key="event" class="event-tag">
            {{ event }}
          </span>
        </div>
      </div>
    </section>

    <!-- 3. Events Hosted In This Room -->
    <section class="hosted-events-section">
      <div class="container">
        <SectionHeader 
          align="center"
          badge="Gallery"
          title="Events Hosted In This Room"
          subtitle="A showcase of extraordinary moments captured within our walls."
        />
        
        <div class="hosted-grid">
          <div v-for="event in room.hostedEvents" :key="event.title" class="hosted-card">
            <div class="card-img">
              <img :src="event.image" :alt="event.title">
              <div class="date-tag">{{ event.date }}</div>
            </div>
            <div class="card-body">
              <h4>{{ event.title }}</h4>
              <button class="view-story">View Story <i class="fas fa-arrow-right"></i></button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Book This Room CTA -->
    <section class="booking-cta-section container">
      <div class="cta-banner-premium">
        <div class="cta-glow"></div>
        <div class="cta-content">
          <div class="cta-text">
            <h2>Experience {{ room.title }}</h2>
            <p>Our event curators are ready to help you plan your next masterpiece.</p>
          </div>
          <div class="cta-actions">
            <BaseButton variant="primary" size="lg" class="btn-cta">Check Availability</BaseButton>
            <button class="btn-secondary-outline">Schedule Virtual Tour</button>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div v-else class="not-found container">
    <h2>Venue Not Found</h2>
    <router-link to="/rooms">Back to Venues</router-link>
  </div>
</template>

<style scoped>
.room-details-revised {
  padding-bottom: 8rem;
}

/* 1. Gallery Section */
.gallery-section {
  padding: 8rem 0 4rem;
  background: #f8fafc;
}

.gallery-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.main-stage {
  position: relative;
  height: 600px;
  border-radius: 3rem;
  overflow: hidden;
  box-shadow: 0 40px 100px -20px rgba(0,0,0,0.15);
}

.stage-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.stage-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(15, 23, 42, 0.8) 0%, transparent 60%);
  display: flex;
  align-items: flex-end;
  padding: 4rem;
}

.category-badge {
  display: inline-block;
  padding: 0.6rem 1.25rem;
  background: var(--primary);
  color: white;
  border-radius: 2rem;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1.5rem;
}

.main-title {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  color: white;
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.04em;
}

.thumbnail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 1.5rem;
}

.thumb-box {
  height: 100px;
  border-radius: 1.5rem;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  border: 3px solid transparent;
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.thumb-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(0.5);
  transition: all 0.5s ease;
}

.thumb-box:hover img,
.thumb-box.active img {
  filter: grayscale(0);
  transform: scale(1.1);
}

.thumb-box.active {
  border-color: var(--primary);
  transform: translateY(-5px);
}

/* 2. Info Section */
.info-section {
  padding: 6rem 0;
}

.info-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 5rem;
  align-items: flex-start;
  margin-bottom: 4rem;
}

.description-text {
  font-size: 1.25rem;
  line-height: 1.8;
  color: var(--text-muted);
  margin-bottom: 3rem;
}

.spec-highlights {
  display: flex;
  gap: 4rem;
}

.spec-node {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.spec-node i {
  font-size: 2rem;
  color: var(--primary);
  opacity: 0.8;
}

.spec-node .label {
  display: block;
  font-size: 0.75rem;
  color: var(--text-muted);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.spec-node .value {
  font-size: 1.5rem;
  font-weight: 900;
  color: var(--text-main);
}

.info-sidebar {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-card {
  padding: 2.5rem;
  border-radius: 2.5rem;
  border: 1px solid var(--border);
  background: white;
}

.card-title {
  font-size: 1.125rem;
  font-weight: 900;
  color: var(--text-main);
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.card-title i { color: var(--primary); }

.layouts-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.layout-item {
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background: var(--background);
  border-radius: 1rem;
  font-weight: 700;
}

.layout-item .name { color: var(--text-muted); }
.layout-item .cap { color: var(--text-main); }

.facilities-grid-sm {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.facility-pill {
  padding: 0.6rem 1.25rem;
  background: var(--background);
  border-radius: 3rem;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border: 1px solid var(--border);
}

.supported-events-row {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-top: 4rem;
  border-top: 1px solid var(--border);
}

.row-label {
  font-size: 1.125rem;
  font-weight: 900;
  color: var(--text-main);
  white-space: nowrap;
}

.event-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.event-tag {
  padding: 0.5rem 1.5rem;
  background: rgba(99, 102, 241, 0.05);
  color: var(--primary);
  border-radius: 4rem;
  font-weight: 800;
  font-size: 0.85rem;
  border: 1px solid rgba(99, 102, 241, 0.1);
}

/* 3. Hosted Events */
.hosted-events-section {
  padding: 10rem 0;
  background: #0F172A;
  color: white;
}

.hosted-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 3rem;
}

.hosted-card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 2.5rem;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.1);
  transition: all 0.4s ease;
}

.hosted-card:hover {
  transform: translateY(-10px);
  border-color: var(--primary);
  background: rgba(255,255,255,0.05);
}

.card-img {
  height: 300px;
  position: relative;
}

.card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.date-tag {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  padding: 0.5rem 1rem;
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(8px);
  border-radius: 0.75rem;
  font-weight: 700;
  font-size: 0.8rem;
}

.card-body {
  padding: 2.5rem;
}

.card-body h4 {
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 2rem;
  color: white;
}

.view-story {
  background: transparent;
  border: none;
  color: var(--primary);
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  transition: gap 0.3s ease;
}

.view-story:hover { gap: 1.25rem; }

/* 4. CTA Section */
.booking-cta-section {
  margin-top: -5rem;
}

.cta-banner-premium {
  padding: 5rem;
  background: white;
  border-radius: 3.5rem;
  box-shadow: 0 50px 100px -30px rgba(0,0,0,0.15);
  position: relative;
  overflow: hidden;
}

.cta-glow {
  position: absolute;
  top: -80%;
  right: -20%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
}

.cta-content {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
}

.cta-text h2 {
  font-size: 3rem;
  font-weight: 900;
  color: var(--text-main);
  margin-bottom: 1rem;
}

.cta-text p {
  font-size: 1.125rem;
  color: var(--text-muted);
  max-width: 500px;
}

.cta-actions {
  display: flex;
  gap: 2rem;
}

.btn-secondary-outline {
  padding: 1.25rem 2.5rem;
  border-radius: 4rem;
  border: 2px solid var(--border);
  background: transparent;
  font-weight: 800;
  color: var(--text-main);
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary-outline:hover {
  background: var(--background);
  border-color: var(--text-main);
}

/* Animations */
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.5s ease;
}

.fade-scale-enter-from {
  opacity: 0;
  transform: scale(1.05);
}

.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

@media (max-width: 1024px) {
  .info-grid { grid-template-columns: 1fr; gap: 4rem; }
  .cta-content { flex-direction: column; text-align: center; }
  .spec-highlights { flex-direction: column; gap: 2rem; }
}

@media (max-width: 640px) {
  .main-stage { height: 400px; }
  .stage-overlay { padding: 2rem; }
  .cta-banner-premium { padding: 3rem 2rem; }
  .cta-actions { flex-direction: column; width: 100%; }
}
.page-padding {
  padding-top: 6rem;
}
</style>
