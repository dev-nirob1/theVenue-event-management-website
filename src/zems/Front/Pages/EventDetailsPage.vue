<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { events } from '../data/events'
import { rooms } from '../data/rooms'
import BaseButton from '../Components/Widget/BaseButton.vue'
import SectionHeader from '../Components/Widget/SectionHeader.vue'
import Breadcrumbs from '../Components/Widget/Breadcrumbs.vue'

const route = useRoute()
const slug = computed(() => route.params.slug)
const event = computed(() => events.find(e => e.slug === slug.value))
const relatedVenue = computed(() => rooms.find(r => r.slug === event.value?.venueSlug))

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <div v-if="event" class="event-details-page page-padding">
    <!-- Hero Section -->
    <!-- <section class="event-hero">
      <div class="hero-bg">
        <img :src="event.image" :alt="event.title" class="hero-img">
        <div class="hero-overlay"></div>
      </div>
      
      <div class="container hero-content">
        <Breadcrumbs />
        <div class="event-badge">{{ event.category }} Event</div>
        <h1 class="event-title">{{ event.title }}</h1>
        <div class="event-short-meta">
          <span><i class="far fa-calendar-alt"></i> {{ event.displayDate }}</span>
          <span><i class="fas fa-map-marker-alt"></i> {{ event.location }}</span>
        </div>
      </div>
    </section> -->

    <!-- Main Content -->
    <!-- <section class="event-info-section container">
      <div class="info-grid"> -->
        <!-- Main Description -->
        <!-- <div class="info-main">
          <SectionHeader 
            badge="About the Event"
            title="The Vision & Experience"
            theme="light"
          />
          <p class="description-text">{{ event.description }}</p>
          
          <div class="organizer-box glass">
            <div class="org-icon"><i class="fas fa-id-badge"></i></div>
            <div class="org-text">
              <span class="label">Hosted By</span>
              <h4 class="org-name">{{ event.organizer }}</h4>
            </div>
          </div>
        </div> -->

        <!-- Sidebar Actions -->
        <!-- <div class="info-sidebar">
          <div class="booking-card glass">
            <div class="booking-header">
              <div class="status-indicator" :class="event.ticketStatus.toLowerCase().replace(' ', '-')">
                {{ event.ticketStatus }}
              </div>
              <div class="price-tag" v-if="event.price > 0">
                <span class="label">From</span>
                <span class="amount">${{ event.price }}</span>
              </div>
              <div class="price-tag" v-else>
                <span class="amount">Complimentary</span>
              </div>
            </div>

            <router-link :to="`/events/${event.slug}/register`" class="full-width-btn" v-if="event.type === 'upcoming'">
              <BaseButton variant="primary">Secure Your Spot</BaseButton>
            </router-link>
            <BaseButton variant="secondary" class="full-width-btn" v-else disabled>
              Event Concluded
            </BaseButton>
            
            <p class="cta-note">Secure payment gateway integrated via Stripe.</p>
          </div> -->

          <!-- Feature List -->
          <!-- <div class="features-card glass">
            <h4 class="card-title">Event Highlights</h4>
            <ul class="feature-list">
              <li><i class="fas fa-check-circle"></i> Networking session included</li>
              <li><i class="fas fa-check-circle"></i> Digital certificate of attendance</li>
              <li><i class="fas fa-check-circle"></i> Access to keynote recordings</li>
            </ul>
          </div>
        </div>
      </div> -->
    <!-- </section> -->

    <!-- Venue Spotlight -->
    <!-- <section v-if="relatedVenue" class="venue-spotlight container">
      <div class="spotlight-card glass">
        <div class="spotlight-img">
          <img :src="relatedVenue.images[0]" :alt="relatedVenue.title">
        </div>
        <div class="spotlight-content">
          <SectionHeader 
            badge="The Stage"
            :title="`Hosted at <br/> ${relatedVenue.title}`"
            theme="light"
          />
          <p>{{ relatedVenue.description.substring(0, 150) }}...</p>
          <router-link :to="`/rooms/${relatedVenue.slug}`" class="venue-link">
            Explore this Venue <i class="fas fa-long-arrow-alt-right"></i>
          </router-link>
        </div>
      </div>
    </section> -->
  </div>

  <!-- <div v-else class="not-found container">
    <h2>Event Not Found</h2>
    <router-link to="/events">Back to Events</router-link>
  </div> -->
</template>

<style scoped>
.event-details-page {
  padding-bottom: 8rem;
}

/* Hero */
.event-hero {
  height: 70vh;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding-bottom: 6rem;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.4) 100%);
}

.hero-content {
  position: relative;
  z-index: 2;
  color: white;
}

.event-badge {
  display: inline-block;
  padding: 0.5rem 1.25rem;
  background: var(--primary);
  border-radius: 2rem;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1.5rem;
}

.event-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 950;
  line-height: 1;
  margin-bottom: 1.5rem;
  letter-spacing: -0.04em;
}

.event-short-meta {
  display: flex;
  gap: 2rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: #94A3B8;
}

.event-short-meta i { color: var(--primary); }

/* Content Section */
.event-info-section {
  padding: 6rem 0;
}

.info-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 6rem;
}

.description-text {
  font-size: 1.25rem;
  line-height: 1.8;
  color: var(--text-muted);
  margin-bottom: 3rem;
}

.organizer-box {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
  background: #f8fafc;
  border-radius: 2rem;
  border: 1px solid var(--border);
}

.org-icon {
  width: 60px;
  height: 60px;
  background: white;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: var(--primary);
  border: 1px solid var(--border);
}

.org-text .label {
  display: block;
  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: 800;
  color: #94A3B8;
  letter-spacing: 0.1em;
}

.org-name {
  font-size: 1.25rem;
  font-weight: 900;
  color: var(--text-main);
}

/* Sidebar */
.info-sidebar {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.booking-card {
  padding: 3rem;
  background: white;
  border-radius: 2.5rem;
  border: 1px solid var(--border);
  box-shadow: 0 40px 100px -20px rgba(0,0,0,0.08);
}

.booking-header {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.status-indicator {
  display: inline-block;
  padding: 0.4rem 1rem;
  border-radius: 2rem;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  width: fit-content;
}

.status-indicator.available { background: #10B981; color: white; }
.status-indicator.waitlist { background: #F59E0B; color: white; }
.status-indicator.completed { background: #64748B; color: white; }

.price-tag .label {
  display: block;
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 0.25rem;
}

.price-tag .amount {
  font-size: 2.5rem;
  font-weight: 950;
  color: var(--text-main);
}

.full-width-btn {
  width: 100%;
}

.cta-note {
  font-size: 0.75rem;
  color: #94A3B8;
  text-align: center;
  margin-top: 1.5rem;
}

.features-card {
  padding: 2.5rem;
  background: #f8fafc;
  border-radius: 2rem;
  border: 1px solid var(--border);
}

.features-card .card-title {
  font-size: 1.125rem;
  font-weight: 900;
  margin-bottom: 1.5rem;
}

.feature-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.feature-list li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 600;
  color: var(--text-muted);
}

.feature-list i { color: var(--primary); }

/* Venue Spotlight */
.venue-spotlight {
  padding: 4rem 0;
}

.spotlight-card {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  background: white;
  border-radius: 3rem;
  overflow: hidden;
  border: 1px solid var(--border);
  box-shadow: 0 20px 50px rgba(0,0,0,0.05);
}

.spotlight-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.spotlight-content {
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.spotlight-content p {
  color: var(--text-muted);
  margin-bottom: 2rem;
  line-height: 1.7;
}

.venue-link {
  color: var(--primary);
  font-weight: 900;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.venue-link:hover i { transform: translateX(5px); }
.venue-link i { transition: transform 0.3s ease; }

@media (max-width: 1024px) {
  .info-grid { grid-template-columns: 1fr; }
  .spotlight-card { grid-template-columns: 1fr; }
  .spotlight-img { height: 300px; }
}
.page-padding {
  padding-top: 6rem;
}
</style>
