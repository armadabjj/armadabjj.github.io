---
layout: default
title: "Contact"
lang: fr
permalink: /contact/
description: "Contactez Armada BJJ. Réservez votre cours d'essai gratuit, posez des questions, ou visitez notre académie de Jiu-Jitsu Brésilien."
---

{% assign t = site.data.translations[page.lang] %}

<div class="page-header">
  <div class="wrapper">
    <h1>Contactez-Nous</h1>
    <p>Prêt à commencer votre parcours BJJ ? Contactez-nous aujourd'hui !</p>
  </div>
</div>

<section class="contact-section">
  <div class="wrapper">
    
    <div class="contact-content">
      
      <!-- Free Trial Section -->
      <div class="trial-section" id="trial">
        <div class="trial-card">
          <h2>{{ t.nav.try_free }}</h2>
          <p>Vivez l'instruction de Jiu-Jitsu Brésilien de classe mondiale sans engagement. Votre premier cours est complètement gratuit !</p>
          
          <div class="trial-benefits">
            <div class="benefit">
              <i class="fas fa-check-circle"></i>
              <span>Rencontrez nos instructeurs et notre communauté</span>
            </div>
            <div class="benefit">
              <i class="fas fa-check-circle"></i>
              <span>Apprenez les techniques de base du BJJ</span>
            </div>
            <div class="benefit">
              <i class="fas fa-check-circle"></i>
              <span>Voyez nos installations modernes</span>
            </div>
            <div class="benefit">
              <i class="fas fa-check-circle"></i>
              <span>Aucune obligation ou pression</span>
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
                  <option value="">Sélectionnez un Programme</option>
                  <option value="fundamentals">Fondamentaux</option>
                  <option value="advanced">Cours Avancés</option>
                  <option value="nogi">Grappling Sans Gi</option>
                  <option value="kids">Programme Enfants</option>
                  <option value="womens">Cours Femmes</option>
                </select>
              </div>
            </div>
            
            <div class="form-group">
              <select id="experience" name="experience" required>
                <option value="">Expérience BJJ Précédente</option>
                <option value="none">Aucune expérience</option>
                <option value="beginner">Débutant (0-6 mois)</option>
                <option value="intermediate">Intermédiaire (6 mois - 2 ans)</option>
                <option value="advanced">Avancé (2+ ans)</option>
              </select>
            </div>
            
            <div class="form-group">
              <textarea id="message" name="message" placeholder="Questions ou demandes spéciales ?" rows="3"></textarea>
            </div>
            
            <button type="submit" class="btn btn-primary btn-large">Réserver Cours d'Essai Gratuit</button>
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
            <h3>Visitez-Nous</h3>
            <p>123 Rue Principale<br>Votre Ville, VC 12345</p>
            <a href="https://maps.google.com/?q=123+Rue+Principale+Votre+Ville" target="_blank" class="btn btn-outline">Obtenir Directions</a>
          </div>
          
          <div class="contact-card">
            <div class="contact-icon">
              <i class="fas fa-phone"></i>
            </div>
            <h3>Appelez-Nous</h3>
            <p><a href="tel:+15551234567">(555) 123-4567</a></p>
            <p>Appelez-nous pour une assistance immédiate ou pour planifier une visite</p>
          </div>
          
          <div class="contact-card">
            <div class="contact-icon">
              <i class="fas fa-envelope"></i>
            </div>
            <h3>Écrivez-Nous</h3>
            <p><a href="mailto:contact@armadabjj.com">contact@armadabjj.com</a></p>
            <p>Nous répondons généralement dans les 24 heures</p>
          </div>
          
          <div class="contact-card">
            <div class="contact-icon">
              <i class="fas fa-clock"></i>
            </div>
            <h3>{{ t.footer.hours_title }}</h3>
            <div class="hours-list">
              <div class="hour-item">
                <span>Lundi - Vendredi</span>
                <span>6h00 - 22h00</span>
              </div>
              <div class="hour-item">
                <span>Samedi</span>
                <span>8h00 - 18h00</span>
              </div>
              <div class="hour-item">
                <span>Dimanche</span>
                <span>10h00 - 16h00</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      <!-- General Contact Form -->
      <div class="general-contact-section">
        <h2>Envoyez-Nous un Message</h2>
        <p>Avez-vous des questions sur nos programmes, tarification, ou quoi que ce soit d'autre ? Nous aimerions avoir de vos nouvelles !</p>
        
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
            <input type="text" id="subject" name="subject" placeholder="Sujet" required>
          </div>
          
          <div class="form-group">
            <textarea id="contactMessage" name="message" placeholder="{{ t.contact_form.message }}" rows="5" required></textarea>
          </div>
          
          <button type="submit" class="btn btn-primary">{{ t.contact_form.submit }}</button>
        </form>
      </div>
      
      <!-- Map Section -->
      <div class="map-section">
        <h2>Trouvez-Nous</h2>
        <div class="map-container">
          <div class="map-placeholder">
            <i class="fas fa-map-marked-alt"></i>
            <p>Carte interactive sera intégrée ici</p>
            <a href="https://maps.google.com/?q=123+Rue+Principale+Votre+Ville" target="_blank" class="btn btn-outline">Voir sur Google Maps</a>
          </div>
        </div>
        
        <div class="location-details">
          <h3>Détails de l'Emplacement</h3>
          <ul>
            <li><i class="fas fa-car"></i> Stationnement gratuit disponible</li>
            <li><i class="fas fa-bus"></i> Accessible par transport en commun</li>
            <li><i class="fas fa-wheelchair"></i> Entrée accessible en fauteuil roulant</li>
            <li><i class="fas fa-shower"></i> Vestiaires et douches</li>
          </ul>
        </div>
      </div>
      
    </div>
  </div>
</section>