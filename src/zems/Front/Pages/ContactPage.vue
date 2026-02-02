<script setup>
import { onMounted } from "vue";
import BaseButton from "../Components/Widget/BaseButton.vue";
import AppCTA from "../Components/Section/AppCTA.vue";

onMounted(() => {
  window.scrollTo(0, 0);
});

const contactDepts = [
  {
    name: "Events Concierge",
    icon: "fa-concierge-bell",
    desc: "Bespoke planning and VIP arrangements.",
    email: "concierge@thevenue.com",
    phone: "+1 800 100 01",
  },
  {
    name: "Sales & Booking",
    icon: "fa-calendar-check",
    desc: "Availability, pricing, and contracts.",
    email: "sales@thevenue.com",
    phone: "+1 800 100 02",
  },
  {
    name: "Technical Support",
    icon: "fa-tools",
    desc: "AV, Connectivity, and setup.",
    email: "tech@thevenue.com",
    phone: "+1 800 100 03",
  },
];
</script>

<template>
  <div class="contact-page">
    <!-- 1. Booking Hub -->
    <section class="booking-hub container">
      <div class="hub-grid">
        <!-- Left: The Desk -->
        <div class="hub-sidebar">
          <div class="desk-card">
            <h3 class="desk-title">The Desk</h3>
            <p class="desk-intro">Available 24/7 for premier organizers.</p>

            <div class="dept-list">
              <div
                v-for="dept in contactDepts"
                :key="dept.name"
                class="dept-node"
              >
                <div class="node-icon"><i :class="['fas', dept.icon]"></i></div>
                <div class="node-info">
                  <h4>{{ dept.name }}</h4>
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
                <span>Our HQ</span>
              </div>
              <p>458 Architecture Lane, NY 10012</p>
            </div>
          </div>
        </div>

        <!-- Right: Inquiry Form -->
        <div class="hub-main">
          <div class="inquiry-card">
            <div class="form-header">
              <h3>Start Inquiry</h3>
              <p>Provide a few details about your upcoming project.</p>
            </div>

            <form class="booking-form" @submit.prevent>
              <div class="form-grid">
                <div class="input-group">
                  <input type="text" placeholder="Full Name" required />
                </div>
                <div class="input-group">
                  <input type="email" placeholder="Email Address" required />
                </div>
                <div class="input-group">
                  <select>
                    <option>Select Event Type</option>
                    <option>Global Tech Summit</option>
                    <option>Luxury Wedding</option>
                    <option>Corporate Gala</option>
                    <option>Art Exhibition</option>
                  </select>
                </div>
                <div class="input-group">
                  <input type="date" />
                </div>
              </div>

              <div class="input-group">
                <textarea
                  rows="4"
                  placeholder="Tell us about your Vision..."
                ></textarea>
              </div>

              <BaseButton variant="primary" size="lg" class="submit-btn" to="#">
                <span>Send Message</span>
              </BaseButton>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. Map Section (Full Width) -->
    <section class="map-section">
      <div class="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.950339875932!2d-74.00840462417483!3d40.71822837139265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598a966a0123%3A0x1234567890abcdef!2zUDEyIFBpZXIgODE!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact-page {
  padding-top: 9rem;
  padding-bottom: 0;
  background: #f8fafc;
  min-height: 100vh;
}

/* 1. Booking Hub */
.hub-grid {
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 2rem;
  margin-bottom: 2.5rem;
}

/* Sidebar / Desk */
.desk-card {
  padding: 1.5rem;
  background: white;
  border-radius: 1rem;
  border: 1px solid var(--border);
  box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.03);
}

.desk-title {
  font-size: 1.75rem;
  font-weight: 950;
  margin-bottom: 0.5rem;
  color: var(--text-main);
  letter-spacing: -0.02em;
}
.desk-intro {
  font-size: 1rem;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}

.dept-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.dept-node {
  display: flex;
  gap: 1.25rem;
  align-items: center;
}

.node-icon {
  width: 44px;
  height: 44px;
  background: #f1f5f9;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.125rem;
  color: var(--primary);
  flex-shrink: 0;
}

.node-info h4 {
  font-size: 1.125rem;
  font-weight: 950;
  margin-bottom: 0.25rem;
  color: var(--text-main);
}
.node-links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
  font-size: 0.85rem;
  font-weight: 800;
}
.node-links a {
  color: var(--primary);
}
.node-links .dot {
  display: none;
}

@media (min-width: 768px) {
  .node-links {
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
  .node-links .dot {
    display: block;
    width: 4px;
    height: 4px;
    background: var(--border);
    border-radius: 50%;
  }
}

.hq-location {
  padding-top: 1.25rem;
  border-top: 1px solid var(--border);
}
.loc-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;
  font-weight: 950;
  margin-bottom: 0.75rem;
  color: var(--text-main);
}
.hq-location p {
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.6;
}

/* Main / Form */
.inquiry-card {
  padding: 1.75rem;
  background: white;
  border-radius: 1rem;
  border: 1px solid var(--border);
  box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.05);
}
.form-header {
  margin-bottom: 2rem;
}
.form-header h3 {
  font-size: 2.25rem;
  font-weight: 950;
  color: var(--text-main);
  letter-spacing: -0.03em;
}
.form-header p {
  font-size: 1.125rem;
  color: var(--text-muted);
}

.booking-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.input-group input,
.input-group select,
.input-group textarea {
  width: 100%;
  padding: 0.76rem 1rem;
  background: #f8fafc;
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  font-size: 1rem;
  color: var(--text-main);
  transition: all 0.2s ease;
}
.input-group input:focus {
  border-color: var(--primary);
  background: white;
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.05);
}

.submit-btn {
  width: 100%;
  padding: 1rem !important;
  border-radius: 0.5rem;
}

/* 2. Map Section */
.map-section {
  width: 100%;
  height: 500px;
}
.map-container {
  width: 100%;
  height: 100%;
}

@media (max-width: 1024px) {
  .hub-grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 640px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
  .inquiry-card {
    padding: 2rem;
  }
  .desk-card {
    padding: 2rem;
  }
}
</style>
