<script setup>
import BaseButton from '../BaseButton.vue'
</script>

<template>
  <footer class="main-footer">
    <div class="container footer-grid">
      <!-- Brand Section -->
      <div class="footer-brand">
        <router-link to="/" class="logo">
          <span class="logo-icon">V</span>
          <span class="logo-text">The<span class="accent">Venue</span></span>
        </router-link>
        <p class="brand-desc">
          London's premier destination for world-class conventions, exhibitions, and gala events. Where architectural grandeur meets state-of-the-art technology.
        </p>
        <div class="social-links">
          <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Twitter"><i class="fab fa-x-twitter"></i></a>
        </div>
      </div>

      <!-- Quick Links -->
      <div class="footer-nav">
        <h4>Our Halls</h4>
        <ul>
          <li><router-link to="/events">Grand Ballroom</router-link></li>
          <li><router-link to="/events">Sky Pavilion</router-link></li>
          <li><router-link to="/events">Industrial Studio</router-link></li>
          <li><router-link to="/events">Meeting Suites</router-link></li>
        </ul>
      </div>

      <div class="footer-nav">
        <h4>Convention Center</h4>
        <ul>
          <li><router-link to="/about">Our Vision</router-link></li>
          <li><router-link to="/events">Upcoming Shows</router-link></li>
          <li><router-link to="/contact">Booking Inquiries</router-link></li>
          <li><router-link to="/privacy">Privacy Policy</router-link></li>
        </ul>
      </div>

      <!-- Contact Info -->
      <div class="footer-contact">
        <h4>Find Us</h4>
        <p><i class="fas fa-map-marker-alt"></i> 124 Event Pl, Royal Docks, London E16 1XL, UK</p>
        <p><i class="fas fa-phone"></i> +44 20 7946 0000</p>
        <p><i class="fas fa-envelope"></i> bookings@thevenue.com</p>
        <div class="opening-hours">
          <p><i class="far fa-clock"></i> Mon - Sun: 08:00 - 22:00</p>
        </div>
      </div>
    </div>

    <div class="footer-bottom container">
      <p>&copy; 2026 The Venue Convention Center. All rights reserved.</p>
      <div class="bottom-links">
        <a href="#">Terms of Service</a>
        <a href="#">Sitemap</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.main-footer {
  background: #0F172A;
  color: white;
  padding: 8rem 0 2rem;
  margin-top: 4rem;
  position: relative;
  overflow: hidden;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 4rem;
  margin-bottom: 6rem;
}

/* Brand Section */
.footer-brand .logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: white;
}

.brand-desc {
  color: #94A3B8;
  line-height: 1.7;
  margin-bottom: 2.5rem;
  max-width: 400px;
}

.social-links {
  display: flex;
  gap: 1.25rem;
}

.social-links a {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.social-links a:hover {
  background: var(--primary);
  border-color: var(--primary);
  transform: translateY(-5px);
  box-shadow: 0 10px 20px -5px rgba(99, 102, 241, 0.5);
}

/* Nav Sections */
h4 {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  margin-bottom: 2rem;
  position: relative;
  padding-bottom: 0.75rem;
}

h4::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 2px;
  background: linear-gradient(to right, var(--primary), var(--secondary));
}

ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

ul a {
  color: #94A3B8;
  transition: all 0.3s ease;
  display: inline-block;
}

ul a:hover {
  color: white;
  transform: translateX(5px);
}

/* Contact Section */
.footer-contact p {
  color: #94A3B8;
  margin-bottom: 1.25rem;
  display: flex;
  gap: 1rem;
  line-height: 1.5;
}

.footer-contact i {
  color: var(--primary);
  margin-top: 3px;
}

.opening-hours {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

/* Bottom Bar */
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #64748B;
  font-size: 0.95rem;
}

.bottom-links {
  display: flex;
  gap: 2rem;
}

.bottom-links a {
  color: #64748B;
  transition: color 0.3s;
}

.bottom-links a:hover {
  color: white;
}

@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
}

@media (max-width: 640px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .footer-brand, .footer-nav, .footer-contact {
    text-align: center;
  }

  h4::after {
    left: 50%;
    transform: translateX(-50%);
  }

  .social-links {
    justify-content: center;
  }

  .footer-contact p {
    justify-content: center;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
}
</style>
