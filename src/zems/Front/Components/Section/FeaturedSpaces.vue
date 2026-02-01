<script setup>
import { ref } from "vue";
import SectionHeader from "../Widget/SectionHeader.vue";
import VenueCard from "../Widget/VenueCard.vue";

const featuredHalls = ref([
  {
    id: 1,
    title: "Grand Royal Hall",
    date: "Cap: 1200 Guests",
    location: "North Wing",
    category: "Gala/Wedding",
    price: 2500,
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop",
    size: "large",
  },
  {
    id: 2,
    title: "Sky Pavilion",
    date: "Cap: 450 Guests",
    location: "Rooftop Terrace",
    category: "Cocktail",
    price: 1800,
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
    size: "medium",
  },
  {
    id: 3,
    title: "Industrial Studio",
    date: "Cap: 800 Guests",
    location: "East Wing",
    category: "Exhibition",
    price: 1500,
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
    size: "small",
  },
  {
    id: 4,
    title: "Tech Lab Suite",
    date: "Cap: 200 Guests",
    location: "West Wing",
    category: "Workshop",
    price: 900,
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    size: "small",
  },
  {
    id: 5,
    title: "Executive Boardroom",
    date: "Cap: 50 Guests",
    location: "VIP Tower",
    category: "Corporate",
    price: 1200,
    image:
      "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?q=80&w=2070&auto=format&fit=crop",
    size: "medium",
  },
  {
    id: 6,
    title: "Garden Atrium",
    date: "Cap: 300 Guests",
    location: "Ground Floor",
    category: "Outdoor",
    price: 1450,
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop",
    size: "small",
  },
]);
</script>

<template>
  <section class="featured-spaces">
    <div class="container">
      <div class="flex justify-between align-center mb-2">
        <SectionHeader
          subTitle="Featured Spaces"
          title="Architectural Venue Masterpieces"
        />

        <div>
          <router-link to="/events" class="explore-all-btn">
            <span>Explore All Halls</span>
            <i class="fas fa-long-arrow-alt-right"></i>
          </router-link>
        </div>
      </div>

      <div class="medium-2 large-3 gap-2">
        <div v-for="(hall, index) in featuredHalls" :key="hall.id">
          <VenueCard :venue="hall" variant="medium" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.featured-spaces {
  padding: 4.5rem 0 3.75rem 0;
  position: relative;
  background: rgb(from var(--primary) r g b / 5%);
}

.explore-all-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: var(--text-main);
  font-size: 1.125rem;
  transition: all 0.3s ease;
}

.explore-all-btn i {
  color: var(--primary);
  font-size: 1rem;
  transition: transform 0.3s ease;
}

.explore-all-btn:hover {
  color: var(--primary);
}

.explore-all-btn:hover i {
  transform: translateX(10px);
}
</style>
