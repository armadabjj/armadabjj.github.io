---
layout: default
title: "Instructeurs"
lang: fr
description: "Rencontrez nos instructeurs de classe mondiale de Jiu-Jitsu Brésilien chez Armada BJJ. Expérimentés, certifiés et passionnés d'enseignement."
---

{% assign t = site.data.translations[page.lang] %}

<div class="page-header">
  <div class="wrapper">
    <h1>{{ t.instructors }}</h1>
    <p>Rencontrez notre équipe passionnée et expérimentée d'instructeurs de Jiu-Jitsu Brésilien</p>
  </div>
</div>

<section class="instructors-section">
  <div class="wrapper">
    
    <div class="section-intro">
      <h2>Instruction de Classe Mondiale</h2>
      <p>Nos instructeurs ne sont pas seulement des praticiens compétents—ce sont des enseignants dévoués qui sont passionnés de partager l'art du Jiu-Jitsu Brésilien. Chacun apporte une expertise unique et un engagement à aider les étudiants à atteindre leurs objectifs.</p>
    </div>
    
    <div class="instructors-grid">
      {% for instructor in site.instructors %}
        <div class="instructor-card">
          <div class="instructor-image">
            <img src="{{ instructor.image | relative_url }}" alt="{{ instructor.name }}">
            <div class="rank-overlay">{{ instructor.rank }}</div>
          </div>
          
          <div class="instructor-details">
            <h3>{{ instructor.name }}</h3>
            <p class="rank">{{ instructor.rank }}</p>
            <p class="experience">{{ instructor.experience }} d'expérience</p>
            
            <div class="specialties">
              {% for specialty in instructor.specialties limit:3 %}
                <span class="specialty-tag">{{ specialty }}</span>
              {% endfor %}
            </div>
            
            <div class="instructor-bio-preview">
              {% if page.lang == 'fr' and instructor.bio_fr %}
                {{ instructor.bio_fr | strip_html | truncate: 120 }}
              {% else %}
                {{ instructor.bio_en | strip_html | truncate: 120 }}
              {% endif %}
            </div>
            
            <div class="instructor-actions">
              <a href="{{ instructor.url | relative_url }}" class="btn btn-outline">En Savoir Plus</a>
              
              {% if instructor.social %}
                <div class="social-links">
                  {% if instructor.social.instagram %}
                    <a href="https://instagram.com/{{ instructor.social.instagram }}" target="_blank" rel="noopener">
                      <i class="fab fa-instagram"></i>
                    </a>
                  {% endif %}
                  {% if instructor.social.facebook %}
                    <a href="https://facebook.com/{{ instructor.social.facebook }}" target="_blank" rel="noopener">
                      <i class="fab fa-facebook"></i>
                    </a>
                  {% endif %}
                </div>
              {% endif %}
            </div>
          </div>
        </div>
      {% endfor %}
    </div>
    
  </div>
</section>

<section class="instructor-philosophy">
  <div class="wrapper">
    <div class="philosophy-content">
      <h2>Notre Philosophie d'Enseignement</h2>
      <div class="philosophy-grid">
        <div class="philosophy-item">
          <div class="philosophy-icon">
            <i class="fas fa-user-graduate"></i>
          </div>
          <h3>Centré sur l'Étudiant</h3>
          <p>Chaque étudiant est unique. Nous adaptons notre enseignement aux styles d'apprentissage et objectifs individuels.</p>
        </div>
        
        <div class="philosophy-item">
          <div class="philosophy-icon">
            <i class="fas fa-shield-alt"></i>
          </div>
          <h3>Sécurité d'Abord</h3>
          <p>Nous priorisons la technique appropriée et la prévention des blessures dans chaque cours.</p>
        </div>
        
        <div class="philosophy-item">
          <div class="philosophy-icon">
            <i class="fas fa-heart"></i>
          </div>
          <h3>Respect et Discipline</h3>
          <p>Nous favorisons un environnement de respect mutuel, d'humilité et d'apprentissage continu.</p>
        </div>
        
        <div class="philosophy-item">
          <div class="philosophy-icon">
            <i class="fas fa-trophy"></i>
          </div>
          <h3>Excellence</h3>
          <p>Nous visons l'excellence technique tout en maintenant la joie d'apprendre.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="instructor-cta">
  <div class="wrapper">
    <div class="cta-content">
      <h2>Entraînez-vous avec les Meilleurs</h2>
      <p>Vivez l'instruction de Jiu-Jitsu Brésilien de classe mondiale dans un environnement de soutien et familial.</p>
      <div class="cta-buttons">
        <a href="{{ '/fr/contact/' | relative_url }}#trial" class="btn btn-primary btn-large">Réservez Votre Essai Gratuit</a>
        <a href="{{ '/fr/programmes/' | relative_url }}" class="btn btn-secondary btn-large">Voir les Programmes</a>
      </div>
    </div>
  </div>
</section>