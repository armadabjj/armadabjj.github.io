---
layout: default
title: "Horaire"
lang: fr
description: "Horaire des cours de Jiu-Jitsu Brésilien chez Armada BJJ. Trouvez le cours parfait pour votre niveau et votre emploi du temps."
---

{% assign t = site.data.translations[page.lang] %}

<div class="page-header">
  <div class="wrapper">
    <h1>{{ t.schedule || "Horaire" }}</h1>
    <p>Trouvez le cours parfait pour votre niveau et votre emploi du temps</p>
  </div>
</div>

<section class="schedule-section">
  <div class="wrapper">
    
    <div class="schedule-intro">
      <h2>Cours pour Tous les Niveaux</h2>
      <p>Notre horaire flexible offre des cours pour débutants, intermédiaires et avancés tout au long de la semaine. Tous nos cours sont enseignés par des instructeurs qualifiés et certifiés.</p>
    </div>
    
    <div class="schedule-grid">
      
      <!-- Monday -->
      <div class="day-schedule">
        <h3>Lundi</h3>
        <div class="class-list">
          <div class="class-item">
            <div class="class-time">6:00 - 7:00</div>
            <div class="class-info">
              <div class="class-name">Fondamentaux</div>
              <div class="class-level">Débutant</div>
            </div>
          </div>
          <div class="class-item">
            <div class="class-time">19:00 - 20:30</div>
            <div class="class-info">
              <div class="class-name">BJJ Tous Niveaux</div>
              <div class="class-level">Tous niveaux</div>
            </div>
          </div>
          <div class="class-item">
            <div class="class-time">20:30 - 21:30</div>
            <div class="class-info">
              <div class="class-name">Mat Libre</div>
              <div class="class-level">Tous niveaux</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Tuesday -->
      <div class="day-schedule">
        <h3>Mardi</h3>
        <div class="class-list">
          <div class="class-item">
            <div class="class-time">6:00 - 7:00</div>
            <div class="class-info">
              <div class="class-name">No-Gi BJJ</div>
              <div class="class-level">Intermédiaire</div>
            </div>
          </div>
          <div class="class-item">
            <div class="class-time">18:00 - 19:00</div>
            <div class="class-info">
              <div class="class-name">Enfants (5-9 ans)</div>
              <div class="class-level">Débutant</div>
            </div>
          </div>
          <div class="class-item">
            <div class="class-time">19:00 - 20:30</div>
            <div class="class-info">
              <div class="class-name">BJJ Techniques</div>
              <div class="class-level">Tous niveaux</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Wednesday -->
      <div class="day-schedule">
        <h3>Mercredi</h3>
        <div class="class-list">
          <div class="class-item">
            <div class="class-time">6:00 - 7:00</div>
            <div class="class-info">
              <div class="class-name">Fondamentaux</div>
              <div class="class-level">Débutant</div>
            </div>
          </div>
          <div class="class-item">
            <div class="class-time">18:30 - 19:30</div>
            <div class="class-info">
              <div class="class-name">Femmes Seulement</div>
              <div class="class-level">Tous niveaux</div>
            </div>
          </div>
          <div class="class-item">
            <div class="class-time">19:30 - 21:00</div>
            <div class="class-info">
              <div class="class-name">BJJ Avancé</div>
              <div class="class-level">Avancé</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Thursday -->
      <div class="day-schedule">
        <h3>Jeudi</h3>
        <div class="class-list">
          <div class="class-item">
            <div class="class-time">6:00 - 7:00</div>
            <div class="class-info">
              <div class="class-name">No-Gi BJJ</div>
              <div class="class-level">Tous niveaux</div>
            </div>
          </div>
          <div class="class-item">
            <div class="class-time">18:00 - 19:00</div>
            <div class="class-info">
              <div class="class-name">Enfants (10-13 ans)</div>
              <div class="class-level">Intermédiaire</div>
            </div>
          </div>
          <div class="class-item">
            <div class="class-time">19:00 - 20:30</div>
            <div class="class-info">
              <div class="class-name">BJJ Compétition</div>
              <div class="class-level">Intermédiaire/Avancé</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Friday -->
      <div class="day-schedule">
        <h3>Vendredi</h3>
        <div class="class-list">
          <div class="class-item">
            <div class="class-time">6:00 - 7:00</div>
            <div class="class-info">
              <div class="class-name">Fondamentaux</div>
              <div class="class-level">Débutant</div>
            </div>
          </div>
          <div class="class-item">
            <div class="class-time">19:00 - 20:30</div>
            <div class="class-info">
              <div class="class-name">BJJ Tous Niveaux</div>
              <div class="class-level">Tous niveaux</div>
            </div>
          </div>
          <div class="class-item">
            <div class="class-time">20:30 - 22:00</div>
            <div class="class-info">
              <div class="class-name">Mat Libre</div>
              <div class="class-level">Tous niveaux</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Saturday -->
      <div class="day-schedule">
        <h3>Samedi</h3>
        <div class="class-list">
          <div class="class-item">
            <div class="class-time">9:00 - 10:30</div>
            <div class="class-info">
              <div class="class-name">BJJ Tous Niveaux</div>
              <div class="class-level">Tous niveaux</div>
            </div>
          </div>
          <div class="class-item">
            <div class="class-time">10:30 - 12:00</div>
            <div class="class-info">
              <div class="class-name">Mat Libre</div>
              <div class="class-level">Tous niveaux</div>
            </div>
          </div>
          <div class="class-item">
            <div class="class-time">13:00 - 14:00</div>
            <div class="class-info">
              <div class="class-name">Enfants (Tous âges)</div>
              <div class="class-level">Tous niveaux</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Sunday -->
      <div class="day-schedule">
        <h3>Dimanche</h3>
        <div class="class-list">
          <div class="class-item rest-day">
            <div class="class-info">
              <div class="class-name">Jour de Repos</div>
              <div class="class-level">Le gym est fermé</div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
    <div class="schedule-info">
      <div class="info-grid">
        <div class="info-card">
          <h3>Nouveaux Étudiants</h3>
          <p>Les débutants sont les bienvenus à tous les cours "Fondamentaux" et "Tous niveaux". Arrivez 15 minutes à l'avance pour votre première classe.</p>
        </div>
        
        <div class="info-card">
          <h3>Équipement</h3>
          <p>Gi (kimono) requis pour les cours traditionnels. T-shirt et shorts pour No-Gi. Équipement de location disponible pour les nouveaux étudiants.</p>
        </div>
        
        <div class="info-card">
          <h3>Réservation</h3>
          <p>Aucune réservation requise pour les membres. Les cours à l'unité doivent être réservés à l'avance. Contactez-nous pour plus d'infos.</p>
        </div>
      </div>
    </div>
    
  </div>
</section>

<section class="schedule-cta">
  <div class="wrapper">
    <div class="cta-content">
      <h2>Prêt à Rejoindre un Cours?</h2>
      <p>Réservez votre cours d'essai gratuit aujourd'hui</p>
      <div class="cta-buttons">
        <a href="{{ '/contact/' | relative_url }}#trial" class="btn btn-primary btn-large">Cours Gratuit</a>
        <a href="{{ '/contact/' | relative_url }}" class="btn btn-secondary btn-large">Plus d'Infos</a>
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

.schedule-section {
  padding: var(--spacing-xl) 0;
}

.schedule-intro {
  text-align: center;
  max-width: 800px;
  margin: 0 auto var(--spacing-xl);
}

.schedule-intro h2 {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-md);
  color: var(--primary-color);
}

.schedule-intro p {
  font-size: 1.1rem;
  color: var(--text-light);
}

.schedule-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
}

.day-schedule {
  background: white;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  overflow: hidden;
}

.day-schedule h3 {
  background: var(--primary-color);
  color: white;
  text-align: center;
  padding: var(--spacing-md);
  margin: 0;
  font-size: 1.2rem;
}

.class-list {
  padding: var(--spacing-sm);
}

.class-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-sm);
  border-bottom: 1px solid var(--border-color);
  transition: var(--transition);
}

.class-item:hover {
  background: var(--section-bg);
}

.class-item:last-child {
  border-bottom: none;
}

.class-item.rest-day {
  justify-content: center;
  opacity: 0.6;
}

.class-time {
  font-weight: 600;
  color: var(--primary-color);
  min-width: 80px;
  font-size: 0.9rem;
}

.class-info {
  flex: 1;
}

.class-name {
  font-weight: 600;
  margin-bottom: 2px;
}

.class-level {
  font-size: 0.9rem;
  color: var(--text-light);
}

.schedule-info {
  margin-bottom: var(--spacing-xl);
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-md);
}

.info-card {
  background: var(--section-bg);
  padding: var(--spacing-md);
  border-radius: var(--border-radius);
  text-align: center;
}

.info-card h3 {
  color: var(--primary-color);
  margin-bottom: var(--spacing-sm);
}

.info-card p {
  color: var(--text-light);
  margin-bottom: 0;
}

.schedule-cta {
  background: var(--primary-color);
  color: white;
  text-align: center;
  padding: var(--spacing-xl) 0;
}

.schedule-cta h2 {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-sm);
}

.schedule-cta p {
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
  .page-header h1 {
    font-size: 2rem;
  }
  
  .schedule-intro h2,
  .schedule-cta h2 {
    font-size: 1.8rem;
  }
  
  .schedule-grid {
    grid-template-columns: 1fr;
  }
  
  .class-item {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-xs);
  }
  
  .class-time {
    min-width: auto;
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