---
layout: default
title: "Contact Us"
lang: en
permalink: /en/contact/
description: "Get in touch with Armada BJJ. Book your free trial class, ask questions, or visit our Brazilian Jiu-Jitsu academy."
---

{% assign t = site.data.translations[page.lang] %}

<div class="page-header">
  <div class="wrapper">
    <h1>Contact Us</h1>
    <p>Ready to start your BJJ journey? Get in touch with us today!</p>
  </div>
</div>

<section class="contact-section">
  <div class="wrapper">
    
    <div class="contact-content">
      
      <!-- Free Trial Section -->
      <div class="trial-section" id="trial">
        <div class="trial-card">
          <h2>{{ t.nav.try_free }}</h2>
          <p>Experience world-class Brazilian Jiu-Jitsu instruction with no commitment. Your first class is completely free!</p>
          
          <div class="trial-benefits">
            <div class="benefit">
              <i class="fas fa-check-circle"></i>
              <span>Meet our instructors and community</span>
            </div>
            <div class="benefit">
              <i class="fas fa-check-circle"></i>
              <span>Learn basic BJJ techniques</span>
            </div>
            <div class="benefit">
              <i class="fas fa-check-circle"></i>
              <span>See our modern facilities</span>
            </div>
            <div class="benefit">
              <i class="fas fa-check-circle"></i>
              <span>No obligation or pressure</span>
            </div>
          </div>
          
          <form class="trial-form" id="trialForm">
            <div class="form-row">
              <div class="form-group">
                <input type="text" id="firstName" name="firstName" placeholder="{{ t.contact_form.name }}" required>
              </div>
              <div class="form-group">
                <input type="email" id="email" name="email" placeholder="{{ t.contact_form.email }}" required>
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <input type="tel" id="phone" name="phone" placeholder="{{ t.contact_form.phone }}">
              </div>
              <div class="form-group">
                <select id="program" name="program" required>
                  <option value="">Select Program Interest</option>
                  <option value="fundamentals">Fundamentals</option>
                  <option value="advanced">Advanced Classes</option>
                  <option value="nogi">No-Gi Grappling</option>
                  <option value="kids">Kids Program</option>
                  <option value="womens">Women's Classes</option>
                </select>
              </div>
            </div>
            
            <div class="form-group">
              <select id="experience" name="experience" required>
                <option value="">Previous BJJ Experience</option>
                <option value="none">No experience</option>
                <option value="beginner">Beginner (0-6 months)</option>
                <option value="intermediate">Intermediate (6 months - 2 years)</option>
                <option value="advanced">Advanced (2+ years)</option>
              </select>
            </div>
            
            <div class="form-group">
              <textarea id="message" name="message" placeholder="Any questions or special requests?" rows="3"></textarea>
            </div>
            
            <button type="submit" class="btn btn-primary btn-large">Book Free Trial Class</button>
          </form>
        </div>
      </div>
      
      <!-- Contact Information -->
      <div class="contact-info-section">
        <div class="contact-grid">
          
          <div class="contact-card">
            <div class="contact-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <h3>Visit Us</h3>
            <p>123 Main Street<br>Your City, YC 12345</p>
            <a href="https://maps.google.com/?q=123+Main+Street+Your+City" target="_blank" class="btn btn-outline">Get Directions</a>
          </div>
          
          <div class="contact-card">
            <div class="contact-icon">
              <i class="fas fa-phone"></i>
            </div>
            <h3>Call Us</h3>
            <p><a href="tel:+15551234567">(555) 123-4567</a></p>
            <p>Call us for immediate assistance or to schedule a visit</p>
          </div>
          
          <div class="contact-card">
            <div class="contact-icon">
              <i class="fas fa-envelope"></i>
            </div>
            <h3>Email Us</h3>
            <p><a href="mailto:contact@armadabjj.com">contact@armadabjj.com</a></p>
            <p>We typically respond within 24 hours</p>
          </div>
          
          <div class="contact-card">
            <div class="contact-icon">
              <i class="fas fa-clock"></i>
            </div>
            <h3>{{ t.footer.hours_title }}</h3>
            <div class="hours-list">
              <div class="hour-item">
                <span>Monday - Friday</span>
                <span>6:00 AM - 10:00 PM</span>
              </div>
              <div class="hour-item">
                <span>Saturday</span>
                <span>8:00 AM - 6:00 PM</span>
              </div>
              <div class="hour-item">
                <span>Sunday</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      <!-- General Contact Form -->
      <div class="general-contact-section">
        <h2>Send Us a Message</h2>
        <p>Have questions about our programs, pricing, or anything else? We'd love to hear from you!</p>
        
        <form class="contact-form" id="contactForm">
          <div class="form-row">
            <div class="form-group">
              <input type="text" id="contactName" name="name" placeholder="{{ t.contact_form.name }}" required>
            </div>
            <div class="form-group">
              <input type="email" id="contactEmail" name="email" placeholder="{{ t.contact_form.email }}" required>
            </div>
          </div>
          
          <div class="form-group">
            <input type="text" id="subject" name="subject" placeholder="Subject" required>
          </div>
          
          <div class="form-group">
            <textarea id="contactMessage" name="message" placeholder="{{ t.contact_form.message }}" rows="5" required></textarea>
          </div>
          
          <button type="submit" class="btn btn-primary">{{ t.contact_form.submit }}</button>
        </form>
      </div>
      
      <!-- Map Section -->
      <div class="map-section">
        <h2>Find Us</h2>
        <div class="map-container">
          <div class="map-placeholder">
            <i class="fas fa-map-marked-alt"></i>
            <p>Interactive map will be embedded here</p>
            <a href="https://maps.google.com/?q=123+Main+Street+Your+City" target="_blank" class="btn btn-outline">View on Google Maps</a>
          </div>
        </div>
        
        <div class="location-details">
          <h3>Location Details</h3>
          <ul>
            <li><i class="fas fa-car"></i> Free parking available</li>
            <li><i class="fas fa-bus"></i> Public transit accessible</li>
            <li><i class="fas fa-wheelchair"></i> Wheelchair accessible entrance</li>
            <li><i class="fas fa-shower"></i> Changing rooms and showers</li>
          </ul>
        </div>
      </div>
      
    </div>
  </div>
</section>

<style>
.page-header {
  background: var(--section-bg);
  padding: 120px 0 var(--spacing-xl);
  text-align: center;
}

.page-header h1 {
  font-size: 3rem;
  margin-bottom: var(--spacing-sm);
}

.contact-section {
  padding: var(--spacing-xl) 0;
}

.trial-section {
  margin-bottom: var(--spacing-xl);
}

.trial-card {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%);
  color: white;
  padding: var(--spacing-xl);
  border-radius: var(--border-radius);
  text-align: center;
}

.trial-card h2 {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-sm);
}

.trial-card > p {
  font-size: 1.1rem;
  margin-bottom: var(--spacing-lg);
  opacity: 0.9;
}

.trial-benefits {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
}

.benefit {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  text-align: left;
}

.benefit i {
  color: var(--secondary-color);
  font-size: 1.2rem;
}

.trial-form {
  background: white;
  padding: var(--spacing-lg);
  border-radius: var(--border-radius);
  text-align: left;
  box-shadow: var(--box-shadow);
}

.contact-form {
  background: var(--section-bg);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-sm);
}

.form-group {
  margin-bottom: var(--spacing-sm);
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: var(--spacing-sm);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  font-family: var(--font-family);
  font-size: 1rem;
  transition: var(--transition);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--secondary-color);
  box-shadow: 0 0 0 2px rgba(255, 107, 53, 0.2);
}

.contact-info-section {
  margin-bottom: var(--spacing-xl);
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-lg);
}

.contact-card {
  background: white;
  padding: var(--spacing-lg);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  text-align: center;
}

.contact-icon {
  width: 60px;
  height: 60px;
  background: var(--secondary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-sm);
  font-size: 1.5rem;
}

.contact-card h3 {
  margin-bottom: var(--spacing-sm);
  color: var(--primary-color);
}

.contact-card p {
  margin-bottom: var(--spacing-sm);
  color: var(--text-light);
}

.contact-card a {
  color: var(--text-color);
  text-decoration: none;
}

.contact-card a:hover {
  color: var(--secondary-color);
}

.hours-list {
  text-align: left;
}

.hour-item {
  display: flex;
  justify-content: space-between;
  padding: var(--spacing-xs) 0;
  border-bottom: 1px solid var(--border-color);
}

.hour-item:last-child {
  border-bottom: none;
}

.general-contact-section {
  margin-bottom: var(--spacing-xl);
  text-align: center;
}

.general-contact-section h2 {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-sm);
  color: var(--primary-color);
}

.general-contact-section p {
  color: var(--text-light);
  margin-bottom: var(--spacing-lg);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.map-section {
  text-align: center;
}

.map-section h2 {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-lg);
  color: var(--primary-color);
}

.map-container {
  margin-bottom: var(--spacing-lg);
}

.map-placeholder {
  background: var(--section-bg);
  padding: var(--spacing-xl);
  border-radius: var(--border-radius);
  text-align: center;
  border: 2px dashed var(--border-color);
}

.map-placeholder i {
  font-size: 3rem;
  color: var(--text-light);
  margin-bottom: var(--spacing-sm);
}

.location-details {
  background: white;
  padding: var(--spacing-lg);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
}

.location-details h3 {
  margin-bottom: var(--spacing-md);
  color: var(--primary-color);
}

.location-details ul {
  list-style: none;
  padding: 0;
  text-align: left;
  max-width: 400px;
  margin: 0 auto;
}

.location-details li {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-xs) 0;
  border-bottom: 1px solid var(--border-color);
}

.location-details li:last-child {
  border-bottom: none;
}

.location-details i {
  color: var(--secondary-color);
  width: 20px;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  
  .trial-card h2,
  .general-contact-section h2,
  .map-section h2 {
    font-size: 1.8rem;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
  }
  
  .trial-benefits {
    grid-template-columns: 1fr;
  }
  
  .trial-card,
  .trial-form,
  .contact-form {
    padding: var(--spacing-md);
  }
}
</style>

<script>
// Form handling
document.getElementById('trialForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send data to your backend
    // For now, just show a success message
    alert('{{ t.contact_form.success }}');
    
    // Reset form
    this.reset();
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send data to your backend
    // For now, just show a success message
    alert('{{ t.contact_form.success }}');
    
    // Reset form
    this.reset();
});
</script>