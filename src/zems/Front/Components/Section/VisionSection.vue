<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import BaseParagraph from "../../../../components/element/BaseParagraph.vue";
import BaseTitle from "../../../../components/element/BaseTitle.vue";
import BaseButton from "../Widget/BaseButton.vue";
import SectionHeader from "../Widget/SectionHeader.vue";
import VideoPopup from "../Widget/VideoPopup.vue";

// Video popup state
const showVideoPopup = ref(false);

const openVideoPopup = () => {
  showVideoPopup.value = true;
};

const closeVideoPopup = () => {
  showVideoPopup.value = false;
};
</script>

<template>
  <section class="vision-section container">
    <div class="medium-2 gap-2">
      <!-- Content Side (Left) -->
      <div class="vision-content">
        <SectionHeader
          badge="Our Philosophy"
          title="Where Vision Meets Architectural Mastery"
        />

        <BaseParagraph class="vision-description">
          An architectural symphony of glass and steel, designed to serve as the
          ultimate stage for global summits and luxury ceremonies.
        </BaseParagraph>

        <div class="medium-2 my-2 gap-1">
          <div class="stat-item">
            <BaseTitle>150+</BaseTitle>
            <BaseParagraph>Major Events</BaseParagraph>
          </div>
          <div class="stat-item">
            <BaseTitle>20M+</BaseTitle>
            <BaseParagraph>Investment</BaseParagraph>
          </div>
        </div>

        <div class="flex gap-1">
          <BaseButton variant="primary" class="btn-fancy">
            <RouterLink to="/about">Learn More</RouterLink>
          </BaseButton>
          <button class="play-btn" @click="openVideoPopup">
            <span class="icon"><i class="fas fa-play"></i></span>
            <span class="text">Watch Cinema</span>
          </button>
        </div>
      </div>

      <!-- Visual Side (Right) -->
      <div class="vision-visuals">
        <div class="image-stack">
          <div class="img-wrapper main-img">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
              alt="Architecture"
              @error="
                (e) =>
                  (e.target.src =
                    'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop')
              "
            />
          </div>
          <div class="img-wrapper floating-img">
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop"
              alt="Detail"
              @error="
                (e) =>
                  (e.target.src =
                    'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop')
              "
            />
          </div>
        </div>

        <div class="floating-badge glass">
          <i class="fas fa-award"></i>
          <span>Award Winning Venue</span>
        </div>
      </div>
    </div>

    <!-- Video Popup -->
    <VideoPopup
      v-if="showVideoPopup"
      videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
      @close="closeVideoPopup"
    />
  </section>
</template>

<style scoped>
.vision-section {
  padding: 3.75rem 0 4.75rem 0;
  position: relative;
}

.vision-description {
  font-size: 1.25rem;
  margin-top: 0;
  color: var(--text-secondary);
}

.stat-item {
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  padding: 0.75rem;
  text-align: center;
}
.stat-item .title {
  font-size: 2.5rem;
}
.stat-item p {
  margin: 0.5rem 0;
}

.btn-fancy {
  border-radius: 4rem;
  padding: 1.25rem 2.5rem;
  font-weight: 800;
}

.play-btn {
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  font-weight: 800;
  color: var(--text-main);
}

.play-btn .icon {
  width: 50px;
  height: 50px;
  border: 1px solid var(--border);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.play-btn:hover .icon {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
  transform: scale(1.1);
}

/* Visuals */
.vision-visuals {
  position: relative;
}

.image-stack {
  position: relative;
  height: 500px;
}

.img-wrapper {
  position: absolute;
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: var(--shadow-lg);
}

.main-img {
  width: 90%;
  height: 90%;
  top: 0;
  right: 0;
  z-index: 1;
}

.main-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.floating-img {
  width: 50%;
  height: 45%;
  bottom: -30px;
  left: 0;
  z-index: 2;
  border: 5px solid white;
  animation: float 6s infinite ease-in-out;
}

.floating-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.floating-badge {
  position: absolute;
  bottom: 2rem;
  right: -1rem;
  padding: 1rem 1.5rem;
  border-radius: 1.25rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: var(--shadow-md);
  z-index: 10;
}

.floating-badge i {
  color: var(--primary);
  font-size: 1.25rem;
}

.floating-badge span {
  font-weight: 800;
  font-size: 0.8rem;
  text-transform: uppercase;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

@media (max-width: 768px) {
  .main-img {
    width: 100%;
    height: 100%;
  }
  .stats-row {
    flex-direction: column;
    gap: 2rem;
  }
  .floating-badge {
    bottom: -4rem;
    right: 1rem;
  }
}
</style>
