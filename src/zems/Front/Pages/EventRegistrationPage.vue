<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { events } from "../../../data/events";
import BaseButton from "../Components/Widget/BaseButton.vue";

const route = useRoute();
const router = useRouter();
const slug = computed(() => route.params.slug);
const event = computed(() => events.find((e) => e.slug === slug.value));

const isProcessing = ref(false);
const isSuccess = ref(false);
const formData = ref({
  fullName: "",
  email: "",
  jobTitle: "",
  company: "",
});

onMounted(() => {
  window.scrollTo(0, 0);
  if (!event.value) {
    router.push("/events");
  }
});

const handleSubmit = async () => {
  isProcessing.value = true;
  // Mock API call
  await new Promise((resolve) => setTimeout(resolve, 2000));
  isProcessing.value = false;
  isSuccess.value = true;
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const downloadPass = () => {
  alert("Downloading your Architectural Pass...");
};
</script>

<template>
  <div class="registration-page" v-if="event">
    <div class="container">
      <div v-if="!isSuccess" class="reg-layout">
        <!-- Left: Event Recap -->
        <div class="event-brief glass">
          <div class="brief-media">
            <img :src="event.image" :alt="event.title" />
            <div class="overlay"></div>
          </div>
          <div class="brief-content">
            <div class="reg-badge">Registration Open</div>
            <h1 class="brief-title">{{ event.title }}</h1>
            <div class="brief-meta">
              <div class="meta-item">
                <i class="far fa-calendar-alt"></i>
                <span>{{ event.displayDate }}</span>
              </div>
              <div class="meta-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>{{ event.location }}</span>
              </div>
            </div>
            <div class="divider"></div>
            <p class="brief-desc">
              Join industry leaders for an unforgettable experience at The
              Venue. Your digital pass grants you full access to all sessions
              and networking events.
            </p>
          </div>
        </div>

        <!-- Right: Registration Form -->
        <div class="reg-form-container">
          <div class="form-card glass" :class="{ loading: isProcessing }">
            <div class="card-header">
              <h2>Secure Your Entry</h2>
              <p>
                Enter your professional details to generate your digital entry
                pass.
              </p>
            </div>

            <form @submit.prevent="handleSubmit" class="reg-form">
              <div class="input-grid">
                <div class="field-group">
                  <label>Full name</label>
                  <input
                    v-model="formData.fullName"
                    type="text"
                    placeholder="Alex Morgan"
                    required
                  />
                </div>
                <div class="field-group">
                  <label>Professional Email</label>
                  <input
                    v-model="formData.email"
                    type="email"
                    placeholder="alex@industry.com"
                    required
                  />
                </div>
                <div class="field-group">
                  <label>Job Title</label>
                  <input
                    v-model="formData.jobTitle"
                    type="text"
                    placeholder="Creative Director"
                    required
                  />
                </div>
                <div class="field-group">
                  <label>Organization</label>
                  <input
                    v-model="formData.company"
                    type="text"
                    placeholder="Design Co."
                    required
                  />
                </div>
              </div>

              <div class="consent-check">
                <input type="checkbox" id="consent" required />
                <label for="consent"
                  >I agree to the terms of attendance and architectural safety
                  protocols.</label
                >
              </div>

              <BaseButton
                variant="primary"
                size="lg"
                :disabled="isProcessing"
                class="submit-btn"
              >
                <span v-if="!isProcessing">Generate My Pass</span>
                <span v-else>Processing Request...</span>
                <i v-if="!isProcessing" class="fas fa-ticket-alt"></i>
                <i v-else class="fas fa-circle-notch fa-spin"></i>
              </BaseButton>
            </form>

            <div v-if="isProcessing" class="loading-overlay">
              <div class="loader"></div>
              <p>Architecting Your Pass...</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Success State: The Digital Pass -->
      <div v-else class="success-wrap">
        <div class="success-header">
          <div class="check-icon"><i class="fas fa-check"></i></div>
          <h1>Registration Confirmed</h1>
          <p>Your digital entry pass has been generated successfully.</p>
        </div>

        <div class="digital-pass-box">
          <div class="pass-main glass">
            <div class="pass-header">
              <div class="brand">
                THE VENUE <span class="pass-type">OFFICIAL PASS</span>
              </div>
              <div class="pass-id">
                #{{ Math.random().toString(36).substr(2, 9).toUpperCase() }}
              </div>
            </div>

            <div class="pass-content">
              <div class="pass-info">
                <div class="event-name">{{ event.title }}</div>
                <div class="attendee-name">{{ formData.fullName }}</div>
                <div class="attendee-title">
                  {{ formData.jobTitle }} • {{ formData.company }}
                </div>

                <div class="pass-meta">
                  <div class="p-node">
                    <span class="p-label">DATE</span>
                    <span class="p-val">{{ event.displayDate }}</span>
                  </div>
                  <div class="p-node">
                    <span class="p-label">LOCATION</span>
                    <span class="p-val">{{ event.location }}</span>
                  </div>
                </div>
              </div>

              <div class="pass-qr">
                <div class="qr-mock">
                  <div v-for="i in 16" :key="i" class="qr-square"></div>
                </div>
                <div class="qr-label">SCAN AT ENTRY</div>
              </div>
            </div>

            <div class="pass-footer">
              <div class="security-strip"></div>
              <p>This pass is mandatory for entry. Non-transferable.</p>
            </div>
          </div>
        </div>

        <div class="success-actions">
          <BaseButton variant="primary" @click="downloadPass">
            <i class="fas fa-download"></i> Download PDF
          </BaseButton>
          <router-link to="/events">
            <button class="return-btn">Return to Events</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.registration-page {
  min-height: 100vh;
  background: #f8fafc;
  padding-top: 8rem;
  padding-bottom: 4rem;
}

.reg-layout {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  align-items: start;
}

/* Left: Brief */
.event-brief {
  border-radius: 1rem;
  overflow: hidden;
  background: white;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-lg);
}

.brief-media {
  height: 250px;
  position: relative;
}

.brief-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.brief-media .overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(15, 23, 42, 0.6), transparent);
}

.brief-content {
  padding: 3rem;
}

.reg-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
  border-radius: 2rem;
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}

.brief-title {
  font-size: 2.25rem;
  font-weight: 900;
  color: var(--text-main);
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.brief-meta {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 600;
  color: var(--text-muted);
}

.meta-item i {
  color: var(--primary);
}

.divider {
  height: 1px;
  background: var(--border);
  margin: 2rem 0;
}

.brief-desc {
  color: var(--text-muted);
  line-height: 1.7;
}

/* Right: Form */
.form-card {
  padding: 4rem;
  background: white;
  border-radius: 1rem;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-lg);
  position: relative;
}

.card-header {
  margin-bottom: 3.5rem;
}

.card-header h2 {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
}

.card-header p {
  color: var(--text-muted);
}

.reg-form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.input-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.field-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.field-group label {
  font-size: 0.75rem;
  font-weight: 900;
  text-transform: uppercase;
  color: var(--text-main);
}

.field-group input {
  padding: 1rem 1.25rem;
  background: #f8fafc;
  border: 1px solid var(--border);
  border-radius: 1rem;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.field-group input:focus {
  outline: none;
  border-color: var(--primary);
  background: white;
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
}

.consent-check {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.5;
}

.consent-check input {
  margin-top: 0.25rem;
  width: 18px;
  height: 18px;
  accent-color: var(--primary);
}

.submit-btn {
  width: 100%;
}

/* Loading Overlay */
.loading-overlay {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  border-radius: 1rem;
}

.loader {
  width: 50px;
  height: 50px;
  border: 4px solid var(--border);
  border-top-color: var(--primary);
  border-radius: 50%;
  animation: spin 1s infinite linear;
  margin-bottom: 1.5rem;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Success State */
.success-wrap {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.check-icon {
  width: 80px;
  height: 80px;
  background: #10b981;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  margin: 0 auto 2rem;
  box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
}

.success-header h1 {
  font-size: 3rem;
  font-weight: 950;
  margin-bottom: 1rem;
}

.success-header p {
  font-size: 1.125rem;
  color: var(--text-muted);
  margin-bottom: 5rem;
}

/* Digital Pass */
.digital-pass-box {
  margin-bottom: 4rem;
  perspective: 1000px;
}

.pass-main {
  background: white;
  border-radius: 1rem;
  border: 1px solid var(--border);
  box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  text-align: left;
  animation: passReveal 1s cubic-bezier(0.165, 0.84, 0.44, 1);
}

@keyframes passReveal {
  from {
    opacity: 0;
    transform: translateY(50px) rotateX(-10deg);
  }
  to {
    opacity: 1;
    transform: translateY(0) rotateX(0);
  }
}

.pass-header {
  padding: 1.5rem 2.5rem;
  background: #0f172a;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand {
  font-weight: 900;
  letter-spacing: 0.1em;
  font-size: 0.9rem;
}

.pass-type {
  background: var(--primary);
  padding: 0.25rem 0.6rem;
  border-radius: 0.3rem;
  font-size: 0.65rem;
  margin-left: 0.75rem;
}

.pass-id {
  font-family: monospace;
  font-size: 0.9rem;
  opacity: 0.6;
}

.pass-content {
  padding: 3rem 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.event-name {
  font-size: 2.5rem;
  font-weight: 950;
  line-height: 1;
  margin-bottom: 2.5rem;
  color: var(--text-main);
  max-width: 400px;
}

.attendee-name {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 0.25rem;
}

.attendee-title {
  color: var(--text-muted);
  font-weight: 600;
  margin-bottom: 2.5rem;
}

.pass-meta {
  display: flex;
  gap: 3rem;
}

.p-label {
  display: block;
  font-size: 0.65rem;
  font-weight: 900;
  color: var(--text-muted);
  text-transform: uppercase;
  margin-bottom: 0.4rem;
}

.p-val {
  font-weight: 800;
  color: var(--text-main);
}

/* QR Mock */
.pass-qr {
  text-align: center;
}

.qr-mock {
  width: 120px;
  height: 120px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  padding: 10px;
  border: 1px solid var(--border);
  border-radius: 1rem;
  margin-bottom: 1rem;
}

.qr-square {
  background: #0f172a;
  border-radius: 2px;
}

.qr-square:nth-child(even) {
  opacity: 0.1;
}
.qr-square:nth-child(3n) {
  opacity: 0.8;
}

.qr-label {
  font-size: 0.65rem;
  font-weight: 900;
  color: var(--text-muted);
}

.pass-footer {
  position: relative;
  padding: 2.5rem;
  background: #f8fafc;
  text-align: center;
}

.security-strip {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: repeating-linear-gradient(
    45deg,
    #e2e8f0,
    #e2e8f0 10px,
    white 10px,
    white 20px
  );
}

.pass-footer p {
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  color: #94a3b8;
  letter-spacing: 0.1em;
}

.success-actions {
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
}

.return-btn {
  background: transparent;
  border: none;
  font-weight: 800;
  color: var(--text-muted);
  cursor: pointer;
  transition: color 0.3s ease;
}

.return-btn:hover {
  color: var(--primary);
}

@media (max-width: 1024px) {
  .reg-layout {
    grid-template-columns: 1fr;
  }
  .pass-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .input-grid {
    grid-template-columns: 1fr;
  }
  .event-name {
    font-size: 1.75rem;
  }
  .pass-meta {
    flex-direction: column;
    gap: 1.5rem;
  }
  .success-actions {
    flex-direction: column;
  }
  .form-card {
    padding: 2.5rem;
  }
}
</style>
