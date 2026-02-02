<script setup>
import SectionHeader from "../Widget/SectionHeader.vue";

const milestones = [
  {
    year: "1998",
    title: "The Foundation",
    desc: "The Venue was established with a vision to create the world's most prestigious event space.",
    icon: "fa-flag-checkered",
  },
  {
    year: "2005",
    title: "Global Recognition",
    desc: "Awarded 'Best Convention Center' by the International Events Association.",
    icon: "fa-trophy",
  },
  {
    year: "2012",
    title: "Tech Revolution",
    desc: "Completed a $50M renovation integrating cutting-edge AV and connectivity systems.",
    icon: "fa-rocket",
  },
  {
    year: "2018",
    title: "Sustainability Leader",
    desc: "Achieved LEED Platinum certification for environmental excellence.",
    icon: "fa-leaf",
  },
  {
    year: "2023",
    title: "5000+ Events Milestone",
    desc: "Celebrated hosting over 5,000 world-class events and counting.",
    icon: "fa-star",
  },
];
</script>

<template>
  <section class="timeline-section">
    <div class="container">
      <SectionHeader
        align="center"
        badge="Our Journey"
        title="Milestones of Excellence"
        description="A legacy built on innovation, precision, and an unwavering commitment to perfection."
      />

      <div class="timeline">
        <div
          v-for="(milestone, index) in milestones"
          :key="milestone.year"
          class="milestone"
        >
          <div class="milestone-marker">
            <div class="marker-dot"></div>
            <div v-if="index < milestones.length - 1" class="marker-line"></div>
          </div>

          <div class="milestone-content">
            <div class="milestone-year">{{ milestone.year }}</div>
            <div class="milestone-card">
              <div class="card-icon">
                <i :class="['fas', milestone.icon]"></i>
              </div>
              <h3 class="card-title">{{ milestone.title }}</h3>
              <p class="card-desc">{{ milestone.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline-section {
  padding: 4rem 0;
  background: white;
}

.timeline {
  margin-top: 5rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.milestone {
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 2rem;
  position: relative;
}

/* Marker Column */
.milestone-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.marker-dot {
  width: 24px;
  height: 24px;
  background: white;
  border: 4px solid var(--primary);
  border-radius: 50%;
  position: relative;
  z-index: 2;
  box-shadow: 0 0 0 6px rgba(99, 102, 241, 0.1);
  flex-shrink: 0;
}

.marker-line {
  width: 3px;
  flex: 1;
  background: linear-gradient(
    to bottom,
    var(--primary) 0%,
    rgba(99, 102, 241, 0.3) 100%
  );
  margin-top: 0.5rem;
  min-height: 60px;
}

/* Content Column */
.milestone-content {
  padding-bottom: 3rem;
}

.milestone-year {
  font-size: 1rem;
  font-weight: 800;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
}

.milestone-card {
  background: #f8fafc;
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 2rem;
  transition: all 0.3s ease;
}

.milestone-card:hover {
  transform: translateX(8px);
  border-color: var(--primary);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  background: white;
}

.card-icon {
  width: 56px;
  height: 56px;
  background: white;
  border: 1px solid var(--border);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: var(--primary);
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.milestone-card:hover .card-icon {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
  transform: scale(1.1);
}

.card-title {
  font-size: 1.5rem;
  font-weight: 950;
  color: var(--text-main);
  margin-bottom: 0.75rem;
  letter-spacing: -0.01em;
}

.card-desc {
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.7;
}

@media (max-width: 768px) {
  .timeline-section {
    padding: 3rem 0;
  }

  .timeline {
    margin-top: 3rem;
  }

  .milestone {
    grid-template-columns: 60px 1fr;
    gap: 1.5rem;
  }

  .marker-dot {
    width: 20px;
    height: 20px;
    border-width: 3px;
  }

  .milestone-year {
    font-size: 0.875rem;
  }

  .milestone-card {
    padding: 1.5rem;
  }

  .card-icon {
    width: 48px;
    height: 48px;
    font-size: 1.25rem;
  }

  .card-title {
    font-size: 1.25rem;
  }

  .card-desc {
    font-size: 0.9375rem;
  }
}
</style>
