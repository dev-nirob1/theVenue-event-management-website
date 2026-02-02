<script setup>
import { ref } from "vue";

const props = defineProps({
  videoUrl: {
    type: String,
    default: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
});

const emit = defineEmits(["close"]);

const closePopup = () => {
  emit("close");
};
</script>

<template>
  <transition name="popup-fade">
    <div class="video-popup-overlay" @click="closePopup">
      <div class="video-popup-container" @click.stop>
        <button class="close-btn" @click="closePopup">
          <i class="fas fa-times"></i>
        </button>
        <div class="video-wrapper">
          <iframe
            :src="videoUrl"
            frameborder="0"
            allow="
              accelerometer;
              autoplay;
              clipboard-write;
              encrypted-media;
              gyroscope;
              picture-in-picture;
            "
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.video-popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 2rem;
}

.video-popup-container {
  position: relative;
  width: 100%;
  max-width: 900px;
  background: #000;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: white;
  border: none;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  color: var(--text-main);
  font-size: 1.25rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.close-btn:hover {
  background: var(--primary);
  color: white;
  transform: rotate(90deg) scale(1.1);
}

.video-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Animations */
.popup-fade-enter-active,
.popup-fade-leave-active {
  transition: opacity 0.3s ease;
}

.popup-fade-enter-from,
.popup-fade-leave-to {
  opacity: 0;
}

.popup-fade-enter-active .video-popup-container,
.popup-fade-leave-active .video-popup-container {
  transition: transform 0.3s ease;
}

.popup-fade-enter-from .video-popup-container,
.popup-fade-leave-to .video-popup-container {
  transform: scale(0.9);
}

@media (max-width: 768px) {
  .video-popup-overlay {
    padding: 1rem;
  }

  .video-popup-container {
    max-width: 100%;
  }

  .close-btn {
    width: 40px;
    height: 40px;
    font-size: 1.125rem;
  }
}
</style>
