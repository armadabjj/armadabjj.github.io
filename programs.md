---
layout: default
title: "Programmes"
lang: fr
permalink: /programs/
description: "Découvrez nos programmes complets de Jiu-Jitsu Brésilien conçus pour tous les niveaux et âges."
---

{% assign t = site.data.translations[page.lang] %}

<div class="page-header">
  <div class="wrapper">
    <h1>{{ t.programs.title }}</h1>
    <p>Programmes d'entraînement complets conçus pour chaque niveau et objectif</p>
  </div>
</div>

<section class="programs-section">
  <div class="wrapper">
    
    <!-- Fundamentals Program -->
    <div class="program-detail" id="fundamentals">
      <div class="program-content">
        <div class="program-text">
          <h2>{{ t.programs.beginners.title }}</h2>
          <p class="program-description">{{ t.programs.beginners.description }}</p>
          
          <div class="program-features">
            <h3>Ce que vous apprendrez:</h3>
            <ul>
              <li>Positions de base et échappements</li>
              <li>Soumissions fondamentales</li>
              <li>Enchainements</li>
              <li>Échauffement et conditionnement appropriés</li>
              <li>Sparring et drilling en direct</li>
            </ul>
          </div>
          
          <div class="program-details">
            <div class="detail-item">
              <strong>Tenue :</strong> Gi (Kimono)
            </div>
            <div class="detail-item">
              <strong>Horaire :</strong> Mercredi 18h15
            </div>
            <div class="detail-item">
              <strong>Prérequis :</strong> Ouvert à tous
            </div>
          </div>
          
          <a href="{{ '/fr/contact/' | relative_url }}#trial" class="btn btn-primary">Commencez Votre Parcours</a>
        </div>
        <div class="program-image">
          <img src="{{ '/assets/images/fundamentals-class.jpg' | relative_url }}" alt="Cours Fondamentaux">
        </div>
      </div>
    </div>

    <!-- BJJ Gi -->
    <div class="program-detail" id="BJJ Gi">
      <div class="program-content reverse">
        <div class="program-text">
          <h2>{{ t.programs.BJJ Gi.title }}</h2>
          <p class="program-description">{{ t.programs.BJJ Gi.description }}</p>
          
          <div class="program-features">
            <h3>Focus d'entraînement avec Gi:</h3>
            <ul>
              <li>Systèmes de garde</li>
              <li>Chaînes de soumission et de passage de gardes</li>
              <li>Stratégies positionnelles de haut niveau</li>
              <li>Sparring et drilling en direct</li>
            </ul>
          </div>
          
          <div class="program-details">
            <div class="detail-item">
              <strong>Tenue :</strong> Gi (Kimono)
            </div>
            <div class="detail-item">
              <strong>Horaire :</strong> Lundi 18:15, Jeudi 19:15
            </div>
            <div class="detail-item">
              <strong>Prérequis :</strong> Ouvert à tous
            </div>
          </div>
          
          <a href="{{ '/fr/contact/' | relative_url }}" class="btn btn-primary">Rejoindre l'Entraînement BJJ Gi</a>
        </div>
        <div class="program-image">
          <img src="{{ '/assets/images/advanced-class.jpg' | relative_url }}" alt="Cours Avancé">
        </div>
      </div>
    </div>

    <!-- No-Gi Program -->
    <div class="program-detail" id="No-Gi">
      <div class="program-content">
        <div class="program-text">
          <h2>{{ t.programs.nogi.title }}</h2>
          <p class="program-description">{{ t.programs.No-Gi.description }}</p>
          
          <div class="program-features">
            <h3>Focus entraînement sans Gi (No-Gi):</h3>
            <ul>
              <li>Projections basées sur la lutte</li>
              <li>Systèmes de clés de jambes</li>
              <li>Grappling de soumission rapide</li>
              <li>Conditionnement et cardio</li>
            </ul>
          </div>
          
          <div class="program-details">
            <div class="detail-item">
              <strong>Tenue :</strong> Rashguard, shorts de grappling (pas de gi requis)
            </div>
            <div class="detail-item">
              <strong>Horaire :</strong> Lundi 19:30, Jeudi 18:00
            </div>
            <div class="detail-item">
              <strong>Prérequis :</strong> Ouvert à tous
            </div>
          </div>
          
          <a href="{{ '/fr/contact/' | relative_url }}" class="btn btn-primary">Essayer le No-Gi</a>
        </div>
        <div class="program-image">
          <img src="{{ '/assets/images/nogi-class.jpg' | relative_url }}" alt="Cours No-Gi">
        </div>
      </div>
    </div>

    <!-- Competition Program -->
    <div class="program-detail" id="Competition">
      <div class="program-content">
        <div class="program-text">
          <h2>{{ t.programs.Competition.title }}</h2>
          <p class="program-description">{{ t.programs.Competition.description }}</p>
          
          <div class="program-features">
            <h3>Focus: préparation à la compétition</h3>
            <ul>
              <li>Règles de compétition</li>
              <li>Systèmes de pointages</li>
              <li>Stratégies</li>
              <li>Conditionnement et cardio</li>
            </ul>
          </div>
          
          <div class="program-details">
            <div class="detail-item">
              <strong>Tenue :</strong> Gi et/ou No-Gi (cours mixte)
            </div>
            <div class="detail-item">
              <strong>Horaire :</strong> Mercredi 19:30
            </div>
            <div class="detail-item">
              <strong>Prérequis :</strong> Pour compétiteurs (visiteurs et non compétiteurs: à la discrétion des entraîneurs)
            </div>
          </div>
          
          <a href="{{ '/fr/contact/' | relative_url }}" class="btn btn-primary">Joindre au cours de compétition</a>
        </div>
        <div class="program-image">
          <img src="{{ '/assets/images/competition-class.jpg' | relative_url }}" alt="Cours compétition">
        </div>
      </div>
    </div>

    <!-- Kids Program -->
    <div class="program-detail" id="kids">
      <div class="program-content reverse">
        <div class="program-text">
          <h2>{{ t.programs.kids.title }}</h2>
          <p class="program-description">{{ t.programs.kids.description }}</p>
          
          <div class="program-features">
            <h3>Bénéfices pour Enfants :</h3>
            <ul>
              <li>Développe la confiance et l'estime de soi</li>
              <li>Améliore la coordination, la motricité et la condition physique</li>
              <li>Enseigne la discipline et le respect</li>
              <li>Techniques BJJ</li>
              <li>Jeux amusants adaptés à l'âge</li>
            </ul>
          </div>
          
          <div class="program-details">
            <div class="detail-item">
              <strong>Âges :</strong> 6-12 ans
            </div>
            <div class="detail-item">
              <strong>Horaire :</strong> Lundi/Mercredi 17:30, Samedi 9h00
            </div>
            <div class="detail-item">
              <strong>Taille de classe :</strong> Limitée à 15 étudiants pour une attention personnalisée
            </div>
          </div>
          
          <a href="{{ '/fr/contact/' | relative_url }}" class="btn btn-primary">Inscrire Votre Enfant</a>
        </div>
        <div class="program-image">
          <img src="{{ '/assets/images/kids-class.jpg' | relative_url }}" alt="Cours Enfants">
        </div>
      </div>
    </div>

    <!-- Open Mat -->
    <div class="program-detail" id="open-mat">
      <div class="program-content reverse">
        <div class="program-text">
          <h2>{{ t.programs.open_mat.title }}</h2>
          <p class="program-description">{{ t.programs.open_mat.description }}</p>
          
          <div class="program-features">
            <h3>Activités Tatami Libre :</h3>
            <ul>
              <li>Sessions de sparring libre</li>
              <li>Drilling de techniques</li>
               <li>Révisions de techniques</li>
              <li>Préparation à la compétition</li>
              <li>Atmosphère d'entraînement détendue</li>
            </ul>
          </div>
          
          <div class="program-details">
            <div class="detail-item">
              <strong>Tenue :</strong> Tenue associée au cours
            </div>
            <div class="detail-item">
              <strong>Horaire :</strong> Samedi 10:00 Gi et 11:00 No-Gi
            </div>
            <div class="detail-item">
              <strong>Enseignement :</strong> À la discrétion des instructeurs (généralement libre sans enseignement)
            </div>
          </div>
          
          <a href="{{ '/fr/tarification/' | relative_url }}" class="btn btn-primary">Voir Options d'Adhésion</a>
        </div>
        <div class="program-image">
          <img src="{{ '/assets/images/open-mat.jpg' | relative_url }}" alt="Tatami Libre">
        </div>
      </div>
    </div>

  </div>
</section>

<section class="program-cta">
  <div class="wrapper">
    <div class="cta-content">
      <h2>Pas Sûr Quel Programme Vous Convient ?</h2>
      <p>Contactez-nous pour une consultation gratuite et un cours d'essai. Nous vous aiderons à trouver le programme parfait pour vos objectifs et votre niveau d'expérience.</p>
      <div class="cta-buttons">
        <a href="{{ '/fr/contact/' | relative_url }}#trial" class="btn btn-primary btn-large">Réserver Essai Gratuit</a>
        <a href="{{ '/fr/contact/' | relative_url }}" class="btn btn-secondary btn-large">Poser des Questions</a>
      </div>
    </div>
  </div>
</section>