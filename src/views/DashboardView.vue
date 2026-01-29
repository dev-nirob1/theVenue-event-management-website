<script setup>
import { ref } from 'vue'
import BaseButton from '../components/BaseButton.vue'

const user = ref({
  name: 'John Doe',
  email: 'john@example.com',
  memberSince: 'January 2026'
})

const stats = ref([
  { label: 'Upcoming Events', value: 3 },
  { label: 'Events Hosted', value: 0 },
  { label: 'Tickets Saved', value: 12 }
])

const mytickets = ref([
  {
    id: 1,
    title: 'Horizon Music Festival 2026',
    date: 'Aug 15, 2026',
    location: 'Central Park, NY',
    status: 'Confirmed',
    barcode: 'EVENT-HF-2026-X821'
  },
  {
    id: 5,
    title: 'Startup Pitch Night',
    date: 'Nov 12, 2026',
    location: 'Austin, TX',
    status: 'Pending Payment',
    barcode: 'EVENT-SP-2026-B102'
  }
])
</script>

<template>
  <div class="dashboard-page container">
    <header class="dashboard-header">
      <div class="user-profile">
        <div class="user-avatar">{{ user.name.charAt(0) }}</div>
        <div class="user-info">
          <h1>Welcome, {{ user.name }}</h1>
          <p>Member since {{ user.memberSince }}</p>
        </div>
      </div>
      <BaseButton variant="outline">Edit Profile</BaseButton>
    </header>

    <div class="stats-grid">
      <div v-for="stat in stats" :key="stat.label" class="stat-card glass">
        <span class="stat-value">{{ stat.value }}</span>
        <span class="stat-label">{{ stat.label }}</span>
      </div>
    </div>

    <section class="tickets-section">
      <h2 class="section-title">My Tickets</h2>
      <div class="tickets-list">
        <div v-for="ticket in mytickets" :key="ticket.id" class="ticket-card glass">
          <div class="ticket-info">
            <h3>{{ ticket.title }}</h3>
            <p class="ticket-meta">📅 {{ ticket.date }} | 📍 {{ ticket.location }}</p>
            <div :class="['ticket-status', ticket.status.toLowerCase().replace(' ', '-')]">
              {{ ticket.status }}
            </div>
          </div>
          <div class="ticket-code">
            <span class="barcode-label">Ticket ID</span>
            <code class="barcode">{{ ticket.barcode }}</code>
          </div>
          <div class="ticket-actions">
            <BaseButton size="sm" variant="outline">Download PDF</BaseButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.dashboard-page {
  padding: 4rem 1.5rem;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.user-avatar {
  width: 80px;
  height: 80px;
  background: var(--primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 800;
}

.user-info h1 {
  font-size: 2.5rem;
  margin-bottom: 0.25rem;
}

.user-info p {
  color: var(--text-muted);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 4rem;
}

.stat-card {
  padding: 2rem;
  text-align: center;
  border-radius: 1rem;
  border: 1px solid var(--border);
}

.stat-value {
  display: block;
  font-size: 3rem;
  font-weight: 800;
  color: var(--primary);
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  font-size: 0.875rem;
  letter-spacing: 0.05em;
}

.section-title {
  font-size: 1.75rem;
  margin-bottom: 2rem;
}

.tickets-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.ticket-card {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 2rem;
  border-radius: 1.5rem;
  border: 1px solid var(--border);
  align-items: center;
}

@media (min-width: 768px) {
  .ticket-card {
    grid-template-columns: 1fr auto auto;
  }
}

.ticket-info h3 {
  margin-bottom: 0.5rem;
}

.ticket-meta {
  color: var(--text-muted);
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.ticket-status {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 2rem;
  font-size: 0.75rem;
  font-weight: 700;
}

.ticket-status.confirmed {
  background: #DCFCE7;
  color: #166534;
}

.ticket-status.pending-payment {
  background: #FEF9C3;
  color: #854D0E;
}

.ticket-code {
  background: #F1F5F9;
  padding: 1rem;
  border-radius: 0.75rem;
  text-align: center;
}

.barcode-label {
  display: block;
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-bottom: 0.25rem;
}

.barcode {
  font-family: 'Courier New', Courier, monospace;
  font-weight: 700;
  color: var(--text-main);
}
</style>
