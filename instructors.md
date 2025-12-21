---
layout: default
title: "Instructeurs"
lang: fr
permalink: /instructors/
description: "Rencontrez nos instructeurs de Jiu-Jitsu Brésilien chez Armada BJJ. Expérimentés, certifiés et passionnés d'enseignement."
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
      <h2>Instruction de qualité avec des instructeurs passionnés et dévoués!</h2>
      <p>Nos instructeurs ne sont pas seulement des praticiens compétents—ce sont des enseignants qui sont passionnés de partager l'art du Jiu-Jitsu Brésilien. Chacun apporte une expertise unique et un engagement à aider les étudiants à atteindre leurs objectifs.</p>
    </div>
    
    <div class="instructors-grid">
      {% assign sorted_instructors = site.instructors | sort_natural: "order" %}
      {% for instructor in sorted_instructors %}
        <div class="instructor-card">
          <div class="instructor-image">
            {% if instructor.image_width or instructor.image_height %}
            <img src="{{ instructor.image | relative_url }}" alt="{{ instructor.name }}" style="{% if instructor.image_width %}width: {{ instructor.image_width }};{% endif %}{% if instructor.image_height %}height: {{ instructor.image_height }};{% endif %}">
            {% else %}
            <img src="{{ instructor.image | relative_url }}" alt="{{ instructor.name }}">
            {% endif %}
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
          <p>Chaque étudiant est unique. Nous adaptons notre enseignement aux styles d'apprentissage et objectifs individuels. La polyvalence de l'équipe d'instructeurs permet à l'académie d'offrir plusieurs styles, pour rejoindre chaque élève.</p>
        </div>
        
        <div class="philosophy-item">
          <div class="philosophy-icon">
            <i class="fas fa-shield-alt"></i>
          </div>
          <h3>Sécurité d'Abord</h3>
          <p>Nous priorisons l'encadrement des élèves, la technique appropriée et la prévention des blessures dans chaque cours.</p>
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

<!--
<section class="instructor-cta">
  <div class="wrapper">
    <div class="cta-content">
      <h2>Entraînez-vous avec nous!</h2>
      <p>Vivez l'instruction de Jiu-Jitsu Brésilien Armada dans un environnement de soutien et familial.</p>
      <div class="cta-buttons">
        <a href="{{ '/fr/contact/' | relative_url }}#trial" class="btn btn-primary btn-large">Réservez Votre Essai Gratuit</a>
        <a href="{{ '/programs/' | relative_url }}" class="btn btn-secondary btn-large">Voir les Programmes</a>
      </div>
    </div>
  </div>
</section>
-->

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

.instructors-section {
  padding: var(--spacing-xl) 0;
}

.section-intro {
  text-align: center;
  max-width: 800px;
  margin: 0 auto var(--spacing-xl);
}

.section-intro h2 {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-md);
  color: var(--primary-color);
}

.section-intro p {
  font-size: 1.1rem;
  color: var(--text-light);
}

.instructors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-lg);
}

.instructor-card {
  background: white;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  overflow: hidden;
  transition: var(--transition);
}

.instructor-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.instructor-image {
  position: relative;
  height: 300px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.instructor-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition);
}

.instructor-image img[style] {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.instructor-card:hover .instructor-image img {
  transform: scale(1.05);
}

.rank-overlay {
  position: absolute;
  top: var(--spacing-sm);
  right: var(--spacing-sm);
  background: var(--secondary-color);
  color: white;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius);
  font-weight: 600;
  font-size: 0.9rem;
}

.instructor-details {
  padding: var(--spacing-md);
}

.instructor-details h3 {
  font-size: 1.5rem;
  margin-bottom: var(--spacing-xs);
  color: var(--primary-color);
}

.instructor-details .rank {
  color: var(--secondary-color);
  font-weight: 600;
  margin-bottom: var(--spacing-xs);
}

.instructor-details .experience {
  color: var(--text-light);
  font-size: 0.9rem;
  margin-bottom: var(--spacing-md);
}

.specialties {
  margin-bottom: var(--spacing-md);
}

.specialty-tag {
  display: inline-block;
  background: var(--section-bg);
  color: var(--text-color);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius);
  font-size: 0.8rem;
  margin-right: var(--spacing-xs);
  margin-bottom: var(--spacing-xs);
  border: 1px solid var(--border-color);
}

.instructor-bio-preview {
  color: var(--text-light);
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
}

.instructor-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.instructor-actions .social-links {
  display: flex;
  gap: var(--spacing-sm);
}

.instructor-actions .social-links a {
  color: var(--text-light);
  font-size: 1.2rem;
  transition: var(--transition);
}

.instructor-actions .social-links a:hover {
  color: var(--secondary-color);
}

.instructor-philosophy {
  background: var(--section-bg);
  padding: var(--spacing-xl) 0;
}

.philosophy-content {
  text-align: center;
}

.philosophy-content h2 {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-lg);
  color: var(--primary-color);
}

.philosophy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-lg);
}

.philosophy-item {
  background: white;
  padding: var(--spacing-md);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
}

.philosophy-icon {
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

.philosophy-item h3 {
  margin-bottom: var(--spacing-sm);
  color: var(--primary-color);
}

.instructor-cta {
  background: var(--primary-color);
  color: white;
  text-align: center;
  padding: var(--spacing-xl) 0;
}

.instructor-cta h2 {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-sm);
}

.instructor-cta p {
  font-size: 1.1rem;
  margin-bottom: var(--spacing-md);
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  gap: var(--spacing-sm);
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .instructors-grid {
    grid-template-columns: 1fr;
  }
  
  .page-header h1 {
    font-size: 2rem;
  }
  
  .section-intro h2,
  .philosophy-content h2,
  .instructor-cta h2 {
    font-size: 1.8rem;
  }
  
  .instructor-actions {
    flex-direction: column;
    gap: var(--spacing-sm);
    align-items: stretch;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 100%;
    max-width: 300px;
  }
}
</style>