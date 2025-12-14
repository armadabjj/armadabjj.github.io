---
layout: default
title: "Programs"
lang: en
permalink: /en/programs/
description: "Discover our comprehensive Brazilian Jiu-Jitsu programs designed for all skill levels and ages."
---

{% assign t = site.data.translations[page.lang] %}

<div class="page-header">
  <div class="wrapper">
    <h1>{{ t.programs.title }}</h1>
    <p>Comprehensive training programs designed for every skill level and goal</p>
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
            <h3>What You'll Learn:</h3>
            <ul>
              <li>Basic positions and escapes</li>
              <li>Fundamental submissions</li>
              <li>Connecting and sequencing</li>
              <li>Warmup and conditionning</li>
              <li>Sparring and drilling</li>
            </ul>
          </div>
          
          <div class="program-details">
            <div class="detail-item">
              <strong>Attire:</strong> Gi (Kimono)
            </div>
            <div class="detail-item">
              <strong>Schedule:</strong> Wednesday 18:15
            </div>
            <div class="detail-item">
              <strong>Requirements:</strong> No experience necessary
            </div>
          </div>
          
          <a href="{{ '/contact/' | relative_url }}#trial" class="btn btn-primary">Start Your Journey</a>
        </div>
        <div class="program-image">
          <img src="{{ '/assets/images/fundamentals-class.jpg' | relative_url }}" alt="Fundamentals Class">
        </div>
      </div>
    </div>

    <!-- BJJ Gi -->
    <div class="program-detail" id="BJJ Gi">
      <div class="program-content reverse">
        <div class="program-text">
          <h2>{{ t.programs.Gi.title }}</h2>
          <p class="program-description">{{ t.programs.Gi.description }}</p>
          
          <div class="program-features">
            <h3>Training Focus:</h3>
            <ul>
              <li>Advanced guard systems</li>
              <li>Guard Passing and chaining submissions</li>
              <li>High-level positional strategies</li>
              <li>Sparring and live drilling</li>
            </ul>
          </div>
          
          <div class="program-details">
            <div class="detail-item">
              <strong>Attire:</strong> Gi (Kimono)
            </div>
            <div class="detail-item">
              <strong>Schedule:</strong> Monday 18:15 and Thursday 19:15
            </div>
            <div class="detail-item">
              <strong>Requirements:</strong> No experience necessary
            </div>
          </div>
          
          <a href="{{ '/contact/' | relative_url }}" class="btn btn-primary">Join Gi</a>
        </div>
        <div class="program-image">
          <img src="{{ '/assets/images/advanced-class.jpg' | relative_url }}" alt="Advanced Class">
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
            <h3>No-Gi Focus:</h3>
            <ul>
              <li>Wrestling-based takedowns</li>
              <li>Leg lock systems</li>
              <li>Fast-paced submission grappling</li>
              <li>Conditioning and cardio</li>
            </ul>
          </div>
          
          <div class="program-details">
            <div class="detail-item">
              <strong>Attire:</strong> Rash guard, grappling shorts (no gi required)
            </div>
            <div class="detail-item">
              <strong>Schedule:</strong> Monday 19:30 and Thursday 18:00
            </div>
            <div class="detail-item">
              <strong>Requirements:</strong> No experience necessary
            </div>
          </div>
          
          <a href="{{ '/contact/' | relative_url }}" class="btn btn-primary">Try No-Gi</a>
        </div>
        <div class="program-image">
          <img src="{{ '/assets/images/nogi-class.jpg' | relative_url }}" alt="No-Gi Class">
        </div>
      </div>
    </div>

    <!-- Competition class -->
    <div class="program-detail" id="Competition">
      <div class="program-content">
        <div class="program-text">
          <h2>{{ t.programs.competition.title }}</h2>
          <p class="program-description">{{ t.programs.competition.description }}</p>
          
          <div class="program-features">
            <h3>Preperation for Competition Focus:</h3>
            <ul>
              <li>Competition rules</li>
              <li>Point system</li>
              <li>Winning strategies</li>
              <li>Conditionning and situationnal training</li>
            </ul>
          </div>
          
          <div class="program-details">
            <div class="detail-item">
              <strong>Attire:</strong> Gi and/or No-Gi (mixt class)
            </div>
            <div class="detail-item">
              <strong>Schedule:</strong> Wednesday 19:30
            </div>
            <div class="detail-item">
              <strong>Requirement:</strong> Competitors (visitors and non competitors: at the discretion of the instructors)
            </div>
          </div>
          
          <a href="{{ '/contact/' | relative_url }}" class="btn btn-primary">Join Competition Class</a>
        </div>
        <div class="program-image">
          <img src="{{ '/assets/images/Competition Class.jpg' | relative_url }}" alt="Competition Class">
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
            <h3>Kids Benefits:</h3>
            <ul>
              <li>Builds confidence and self-esteem</li>
              <li>Improves coordination, agility and fitness</li>
              <li>Teaches discipline and respect</li>
              <li>BJJ Techniques</li>
              <li>Fun, age-appropriate games</li>
            </ul>
          </div>
          
          <div class="program-details">
            <div class="detail-item">
              <strong>Ages:</strong> 6-12 years old
            </div>
            <div class="detail-item">
              <strong>Schedule:</strong> Monday and Wendnesday 17:30, Saturday 9:00 AM
            </div>
            <div class="detail-item">
              <strong>Class Size:</strong> Limited to 15 students for personalized attention
            </div>
          </div>
          
          <a href="{{ '/contact/' | relative_url }}" class="btn btn-primary">Enroll Your Child</a>
        </div>
        <div class="program-image">
          <img src="{{ '/assets/images/kids-class.jpg' | relative_url }}" alt="Kids Class">
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
            <h3>Open Mat Activities:</h3>
            <ul>
              <li>Free sparring sessions</li>
              <li>Technique drilling</li>
              <li>Techniques revision</li>
              <li>Competition preparation</li>
              <li>Relaxed training atmosphere</li>
            </ul>
          </div>
          
          <div class="program-details">
            <div class="detail-item">
              <strong>Attire:</strong> Attire associated to the class
            </div>
            <div class="detail-item">
              <strong>Schedule:</strong> Saturday 10:00 Gi and 11:00 No-Gi
            </div>
            <div class="detail-item">
              <strong>Teachings:</strong> To the discretion of the instructors (usually free training without instructor teaching)
            </div>
          </div>
          
          <a href="{{ '/pricing/' | relative_url }}" class="btn btn-primary">View Membership Options</a>
        </div>
        <div class="program-image">
          <img src="{{ '/assets/images/open-mat.jpg' | relative_url }}" alt="Open Mat">
        </div>
      </div>
    </div>

  </div>
</section>

<section class="program-cta">
  <div class="wrapper">
    <div class="cta-content">
      <h2>Not Sure Which Program is Right for You?</h2>
      <p>Contact us for a free consultation and trial class. We'll help you find the perfect program to match your goals and experience level.</p>
      <div class="cta-buttons">
        <a href="{{ '/contact/' | relative_url }}#trial" class="btn btn-primary btn-large">Book Free Trial</a>
        <a href="{{ '/contact/' | relative_url }}" class="btn btn-secondary btn-large">Ask Questions</a>
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

.programs-section {
  padding: var(--spacing-xl) 0;
}

.program-detail {
  margin-bottom: var(--spacing-xl);
  padding-bottom: var(--spacing-xl);
  border-bottom: 1px solid var(--border-color);
}

.program-detail:last-child {
  border-bottom: none;
}

.program-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  align-items: center;
}

.program-content.reverse {
  direction: rtl;
}

.program-content.reverse > * {
  direction: ltr;
}

.program-description {
  font-size: 1.1rem;
  color: var(--text-light);
  margin-bottom: var(--spacing-md);
}

.program-features h3 {
  color: var(--primary-color);
  margin-bottom: var(--spacing-sm);
}

.program-features ul {
  list-style: none;
  padding: 0;
}

.program-features li {
  padding: var(--spacing-xs) 0;
  border-bottom: 1px solid var(--border-color);
  position: relative;
  padding-left: 1.5rem;
}

.program-features li:before {
  content: "✓";
  color: var(--secondary-color);
  font-weight: bold;
  position: absolute;
  left: 0;
}

.program-details {
  margin: var(--spacing-md) 0;
  padding: var(--spacing-md);
  background: var(--section-bg);
  border-radius: var(--border-radius);
}

.detail-item {
  margin-bottom: var(--spacing-xs);
}

.detail-item:last-child {
  margin-bottom: 0;
}

.program-image img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
}

.program-cta {
  background: var(--primary-color);
  color: white;
  text-align: center;
  padding: var(--spacing-xl) 0;
}

.program-cta h2 {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-sm);
}

.program-cta p {
  font-size: 1.1rem;
  margin-bottom: var(--spacing-md);
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 768px) {
  .program-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }
  
  .program-content.reverse {
    direction: ltr;
  }
  
  .page-header h1 {
    font-size: 2rem;
  }
  
  .program-cta h2 {
    font-size: 1.8rem;
  }
}
</style>