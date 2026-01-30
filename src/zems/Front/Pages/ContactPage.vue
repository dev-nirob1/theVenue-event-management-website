<script setup>
import { onMounted } from 'vue'
import SectionHeader from '../Components/Widget/SectionHeader.vue'
import BaseButton from '../Components/Widget/BaseButton.vue'
import Breadcrumbs from '../Components/Widget/Breadcrumbs.vue'

onMounted(() => {
  window.scrollTo(0, 0)
})

const contactDepts = [
  {
    name: 'Events Concierge',
    icon: 'fa-concierge-bell',
    desc: 'For bespoke planning and VIP arrangements.',
    email: 'concierge@thevenue.com',
    phone: '+1 800 VENUE 01'
  },
  {
    name: 'Sales & Booking',
    icon: 'fa-calendar-check',
    desc: 'Availability, pricing, and contract inquiries.',
    email: 'sales@thevenue.com',
    phone: '+1 800 VENUE 02'
  },
  {
    name: 'Technical Support',
    icon: 'fa-tools',
    desc: 'AV, Connectivity, and setup assistance.',
    email: 'tech@thevenue.com',
    phone: '+1 800 VENUE 03'
  }
]
</script>

<template>
  <div class="contact-page page-padding">
    <!-- 1. Header Section -->
    <!-- <section class="contact-header">
      <div class="container header-content">
        <Breadcrumbs />
        <SectionHeader 
          badge="Contact Us"
          title="Connect with Our <br/> <span class='text-accent'>Master Curators</span>"
          subtitle="Whether you're planning a global summit or a private gala, our team is ready to bring your vision to life."
          theme="light"
        />
      </div>
    </section> -->

    <!-- 2. Booking Hub -->
    <!-- <section class="booking-hub container">
      <div class="hub-grid"> -->
        <!-- Left: The Desk -->
        <!-- <div class="hub-sidebar">
          <div class="desk-card glass">
            <h3 class="desk-title">The Concierge Desk</h3>
            <p class="desk-intro">Available 24/7 for our premier clients and event organizers.</p>
            
            <div class="dept-list">
              <div v-for="dept in contactDepts" :key="dept.name" class="dept-node">
                <div class="node-icon"><i :class="['fas', dept.icon]"></i></div>
                <div class="node-info">
                  <h4>{{ dept.name }}</h4>
                  <p>{{ dept.desc }}</p>
                  <div class="node-links">
                    <a :href="`mailto:${dept.email}`">{{ dept.email }}</a>
                    <span class="dot"></span>
                    <span>{{ dept.phone }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="hq-location">
              <div class="loc-header">
                <i class="fas fa-map-marker-alt"></i>
                <span>Our Headquarters</span>
              </div>
              <p>458 Architecture Lane, <br/>Innovation District, NY 10012</p>
            </div>
          </div>
        </div> -->

        <!-- Right: Inquiry Form -->
        <!-- <div class="hub-main">
          <div class="inquiry-card glass">
            <div class="form-header">
              <h3>Start Your Inquiry</h3>
              <p>Please provide a few details about your upcoming project.</p>
            </div>

            <form class="booking-form" @submit.prevent>
              <div class="form-grid">
                <div class="input-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="Johnathan Doe" required>
                </div>
                <div class="input-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@company.com" required>
                </div>
                <div class="input-group">
                  <label>Event Type</label>
                  <select>
                    <option>Global Tech Summit</option>
                    <option>Luxury Wedding</option>
                    <option>Corporate Gala</option>
                    <option>Art Exhibition</option>
                    <option>Other</option>
                  </select>
                </div>
                <div class="input-group">
                  <label>Planned Date</label>
                  <input type="date">
                </div>
              </div>

              <div class="input-group">
                <label>Expected Guest Count</label>
                <input type="range" min="50" max="2000" step="50" class="range-slider">
                <div class="range-labels">
                  <span>50</span>
                  <span>1000</span>
                  <span>2000+</span>
                </div>
              </div>

              <div class="input-group">
                <label>Vision Description</label>
                <textarea rows="5" placeholder="Tell us about the atmosphere, requirements, and goals for your event..."></textarea>
              </div>

              <BaseButton variant="primary" size="lg" class="submit-btn">
                <span>Send Inquiry</span>
                <i class="fas fa-paper-plane"></i>
              </BaseButton>
            </form>
          </div>
        </div>
      </div>
    </section> -->

    <!-- 3. Map Section placeholder -->
    <!-- <section class="map-section container">
      <div class="map-container glass">
        <div class="map-placeholder">
          <i class="fas fa-compass"></i>
          <p>Interactive Map Integration <br/> <span>Coming Soon</span></p>
        </div>
      </div>
    </section> -->
  </div>
</template>

<style scoped>
.contact-page {
  padding-bottom: 10rem;
}

/* 1. Header */
.contact-header {
  padding: 6rem 0 4rem;
}

.text-accent {
  background: linear-gradient(to right, #6366F1, #F43F5E);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* 2. Booking Hub */
.booking-hub {
  margin-top: 2rem;
}

.hub-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  align-items: flex-start;
}

/* Sidebar / Desk */
.desk-card {
  padding: 3.5rem;
  background: #0F172A;
  border-radius: 3rem;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.desk-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 1rem;
}

.desk-intro {
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 4rem;
  line-height: 1.6;
}

.dept-list {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-bottom: 5rem;
}

.dept-node {
  display: flex;
  gap: 1.5rem;
}

.node-icon {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  color: var(--primary);
  flex-shrink: 0;
}

.node-info h4 {
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
  color: white;
}

.node-info p {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 1rem;
}

.node-links {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--primary);
}

.node-links .dot {
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
}

.hq-location {
  padding-top: 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.loc-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;
  font-weight: 800;
  margin-bottom: 1rem;
}

.loc-header i { color: var(--secondary); }

.hq-location p {
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.8;
}

/* Main / Form */
.inquiry-card {
  padding: 4rem;
  background: white;
  border-radius: 3rem;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-lg);
}

.form-header {
  margin-bottom: 3.5rem;
}

.form-header h3 {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.75rem;
}

.form-header p {
  color: var(--text-muted);
}

.booking-form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.input-group label {
  font-size: 0.75rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-main);
}

.input-group input, 
.input-group select, 
.input-group textarea {
  padding: 1rem 1.25rem;
  background: #f8fafc;
  border: 1px solid var(--border);
  border-radius: 1rem;
  font-family: inherit;
  font-size: 1rem;
  color: var(--text-main);
  transition: all 0.3s ease;
}

.input-group input:focus, 
.input-group select:focus, 
.input-group textarea:focus {
  outline: none;
  border-color: var(--primary);
  background: white;
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
}

.range-slider {
  width: 100%;
  accent-color: var(--primary);
}

.range-labels {
  display: flex;
  justify-content: space-between;
  font-size: 0.7rem;
  font-weight: 800;
  color: var(--text-muted);
}

.submit-btn {
  margin-top: 1rem;
  width: 100%;
}

/* 3. Map Section */
.map-section {
  margin-top: 6rem;
}

.map-container {
  height: 400px;
  border-radius: 3rem;
  background: #f1f5f9;
  overflow: hidden;
  border: 1px solid var(--border);
}

.map-placeholder {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--text-muted);
}

.map-placeholder i {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: var(--border);
}

.map-placeholder h3 {
  font-size: 1.25rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
}

.map-placeholder span {
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  background: #e2e8f0;
  padding: 0.25rem 0.75rem;
  border-radius: 2rem;
}

@media (max-width: 1024px) {
  .hub-grid {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
}

@media (max-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
  .inquiry-card {
    padding: 2.5rem;
  }
  .desk-card {
    padding: 2.5rem;
  }
  .node-links {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  .node-links .dot { display: none; }
}
</style>
