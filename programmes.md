---
layout: default
title: "Programmes"
lang: fr
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
            <h3>Ce que vous apprendrez :</h3>
            <ul>
              <li>Positions de base et échappements</li>
              <li>Soumissions fondamentales</li>
              <li>Techniques d'auto-défense</li>
              <li>Philosophie et étiquette du BJJ</li>
              <li>Échauffement et conditionnement appropriés</li>
            </ul>
          </div>
          
          <div class="program-details">
            <div class="detail-item">
              <strong>Durée :</strong> Programme structuré de 12 semaines
            </div>
            <div class="detail-item">
              <strong>Horaire :</strong> Lundi/Mercredi 19h00, Samedi 10h00
            </div>
            <div class="detail-item">
              <strong>Prérequis :</strong> Aucune expérience nécessaire
            </div>
          </div>
          
          <a href="{{ '/fr/contact/' | relative_url }}#trial" class="btn btn-primary">Commencez Votre Parcours</a>
        </div>
        <div class="program-image">
          <img src="{{ '/assets/images/fundamentals-class.jpg' | relative_url }}" alt="Cours Fondamentaux">
        </div>
      </div>
    </div>

    <!-- Advanced Program -->
    <div class="program-detail" id="advanced">
      <div class="program-content reverse">
        <div class="program-text">
          <h2>{{ t.programs.advanced.title }}</h2>
          <p class="program-description">{{ t.programs.advanced.description }}</p>
          
          <div class="program-features">
            <h3>Focus d'entraînement :</h3>
            <ul>
              <li>Systèmes de garde avancés</li>
              <li>Préparation à la compétition</li>
              <li>Chaînes de soumission complexes</li>
              <li>Stratégies positionnelles de haut niveau</li>
              <li>Sparring et drilling en direct</li>
            </ul>
          </div>
          
          <div class="program-details">
            <div class="detail-item">
              <strong>Prérequis :</strong> Ceinture bleue ou expérience équivalente
            </div>
            <div class="detail-item">
              <strong>Horaire :</strong> Mardi/Jeudi 19h30, Dimanche 11h00
            </div>
            <div class="detail-item">
              <strong>Focus :</strong> Compétition et techniques avancées
            </div>
          </div>
          
          <a href="{{ '/fr/contact/' | relative_url }}" class="btn btn-primary">Rejoindre l'Entraînement Avancé</a>
        </div>
        <div class="program-image">
          <img src="{{ '/assets/images/advanced-class.jpg' | relative_url }}" alt="Cours Avancé">
        </div>
      </div>
    </div>

    <!-- No-Gi Program -->
    <div class="program-detail" id="nogi">
      <div class="program-content">
        <div class="program-text">
          <h2>{{ t.programs.nogi.title }}</h2>
          <p class="program-description">{{ t.programs.nogi.description }}</p>
          
          <div class="program-features">
            <h3>Focus Sans Gi :</h3>
            <ul>
              <li>Projections basées sur la lutte</li>
              <li>Systèmes de clés de jambes</li>
              <li>Grappling de soumission rapide</li>
              <li>Techniques applicables au MMA</li>
              <li>Conditionnement et cardio</li>
            </ul>
          </div>
          
          <div class="program-details">
            <div class="detail-item">
              <strong>Tenue :</strong> Rashguard, shorts de grappling (pas de gi requis)
            </div>
            <div class="detail-item">
              <strong>Horaire :</strong> Lundi/Vendredi 20h00, Samedi 14h00
            </div>
            <div class="detail-item">
              <strong>Style :</strong> Grappling de soumission, lutte
            </div>
          </div>
          
          <a href="{{ '/fr/contact/' | relative_url }}" class="btn btn-primary">Essayer le No-Gi</a>
        </div>
        <div class="program-image">
          <img src="{{ '/assets/images/nogi-class.jpg' | relative_url }}" alt="Cours No-Gi">
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
              <li>Améliore la coordination et la condition physique</li>
              <li>Enseigne la discipline et le respect</li>
              <li>Techniques anti-intimidation</li>
              <li>Jeux amusants adaptés à l'âge</li>
            </ul>
          </div>
          
          <div class="program-details">
            <div class="detail-item">
              <strong>Âges :</strong> 5-13 ans
            </div>
            <div class="detail-item">
              <strong>Horaire :</strong> Mardi/Jeudi 17h00, Samedi 9h00
            </div>
            <div class="detail-item">
              <strong>Taille de classe :</strong> Limitée à 12 étudiants pour une attention personnalisée
            </div>
          </div>
          
          <a href="{{ '/fr/contact/' | relative_url }}" class="btn btn-primary">Inscrire Votre Enfant</a>
        </div>
        <div class="program-image">
          <img src="{{ '/assets/images/kids-class.jpg' | relative_url }}" alt="Cours Enfants">
        </div>
      </div>
    </div>

    <!-- Women's Program -->
    <div class="program-detail" id="womens">
      <div class="program-content">
        <div class="program-text">
          <h2>{{ t.programs.womens.title }}</h2>
          <p class="program-description">{{ t.programs.womens.description }}</p>
          
          <div class="program-features">
            <h3>Bénéfices Cours Femmes :</h3>
            <ul>
              <li>Environnement de soutien, non intimidant</li>
              <li>Focus sur l'auto-défense</li>
              <li>Espace d'entraînement body-positive</li>
              <li>Direction d'instructrices féminines</li>
              <li>Horaires flexibles pour vies occupées</li>
            </ul>
          </div>
          
          <div class="program-details">
            <div class="detail-item">
              <strong>Niveau :</strong> Tous niveaux bienvenus
            </div>
            <div class="detail-item">
              <strong>Horaire :</strong> Mercredi 18h00, Samedi 11h00
            </div>
            <div class="detail-item">
              <strong>Environnement :</strong> Cours femmes seulement avec instructrices féminines
            </div>
          </div>
          
          <a href="{{ '/fr/contact/' | relative_url }}" class="btn btn-primary">Rejoindre les Cours Femmes</a>
        </div>
        <div class="program-image">
          <img src="{{ '/assets/images/womens-class.jpg' | relative_url }}" alt="Cours Femmes">
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
              <li>Préparation à la compétition</li>
              <li>Entraînement croisé avec grapplers visiteurs</li>
              <li>Atmosphère d'entraînement détendue</li>
            </ul>
          </div>
          
          <div class="program-details">
            <div class="detail-item">
              <strong>Prérequis :</strong> Membre actif avec approbation de l'instructeur
            </div>
            <div class="detail-item">
              <strong>Horaire :</strong> Dimanche 13h00-15h00
            </div>
            <div class="detail-item">
              <strong>Coût :</strong> Inclus avec l'adhésion
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