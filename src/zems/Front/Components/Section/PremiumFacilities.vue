<script setup>
import SectionHeader from "../Widget/SectionHeader.vue";
import FacilityCard from "../Widget/FacilityCard.vue";

const facilities = [
  {
    icon: "fa-utensils",
    title: "Gourmet Catering",
    desc: "Award-winning culinary teams providing world-class dining experiences from gala dinners to quick business lunches.",
    spec: "Michelin Star Quality",
  },
  {
    icon: "fa-microchip",
    title: "Smart Tech AV",
    desc: "Integrated 4K LED walls, high-fidelity sound systems, and automated lighting controlled via dedicated onsite tech teams.",
    spec: "4K / 120Hz Streaming",
  },
  {
    icon: "fa-shield-alt",
    title: "Elite Security",
    desc: "Bespoke security protocols including VIP protection, 24/7 surveillance, and professional crowd management services.",
    spec: "Biometric Access",
  },
  {
    icon: "fa-network-wired",
    title: "Gigabit Connectivity",
    desc: "Ultra-fast dedicated fiber-optic internet with seamless Wi-Fi 6 coverage throughout the entire convention facility.",
    spec: "10 Gbps Dedicated",
  },
  {
    icon: "fa-truck-loading",
    title: "Logistics Hub",
    desc: "Deep loading docks and freight elevators that allow for efficient setup of heavy equipment and massive exhibitions.",
    spec: "50-Ton Capacity",
  },
  {
    icon: "fa-tv",
    title: "Broadcast Studio",
    desc: "In-house high-end studio for hybrid event broadcasting and professional content creation.",
    spec: "Studio 4K Ready",
  },
];
</script>

<template>
  <section class="holographic-hub">
    <div class="container relative">
      <SectionHeader
        class="mb-2"
        subTitle="Infrastructure 4.0"
        title="The Holographic Hub"
      />

      <div class="medium-2 large-3 gap-2">
        <div v-for="facility in facilities" :key="facility.title">
          <FacilityCard :facility="facility" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.holographic-hub {
  padding: 4.5rem 0;
  position: relative;
  overflow: hidden;
}
</style>
