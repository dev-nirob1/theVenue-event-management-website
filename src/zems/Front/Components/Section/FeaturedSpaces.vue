<script setup>
import { ref } from "vue";
import SectionHeader from "../Widget/SectionHeader.vue";
import VenueCard from "../Widget/VenueCard.vue";

const featuredHalls = ref([
  {
    id: 1,
    title: "Grand Royal Hall",
    capacity: "1200 Guests",
    location: "North Wing",
    category: "Gala/Wedding",
    price: 2500,
    images: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop",
    ],
    slug: "grand-royal-hall",
  },
  {
    id: 2,
    title: "Sky Pavilion",
    capacity: "450 Guests",
    location: "Rooftop Terrace",
    category: "Cocktail",
    price: 1800,
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop",
    ],
    slug: "sky-pavilion-terrace",
  },
  {
    id: 3,
    title: "Industrial Studio",
    capacity: "800 Guests",
    location: "East Wing",
    category: "Exhibition",
    price: 1500,
    images: [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522158633578-d19005a2c739?q=80&w=2071&auto=format&fit=crop",
    ],
    slug: "the-industrial-studio",
  },
  {
    id: 4,
    title: "Tech Lab Suite",
    capacity: "200 Guests",
    location: "West Wing",
    category: "Workshop",
    price: 900,
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
    ],
    slug: "modern-innovation-lab",
  },
  {
    id: 5,
    title: "Executive Boardroom",
    capacity: "50 Guests",
    location: "VIP Tower",
    category: "Corporate",
    price: 1200,
    images: [
      "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop",
    ],
    slug: "executive-boardroom",
  },
  {
    id: 6,
    title: "Garden Atrium",
    capacity: "300 Guests",
    location: "Ground Floor",
    category: "Outdoor",
    price: 1450,
    images: [
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523413363574-23c7422d5fd6?q=80&w=2071&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
    ],
    slug: "glass-garden-atrium",
  },
]);
</script>

<template>
  <section class="featured-spaces">
    <div class="container">
      <div class="flex justify-between align-center mb-2">
        <SectionHeader
          badge="Featured Spaces"
          title="Architectural Venue Masterpieces"
        />

        <div>
          <router-link to="/rooms" class="explore-all-btn">
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
