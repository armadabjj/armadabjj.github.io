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
              <li>Self-defense techniques</li>
              <li>BJJ philosophy and etiquette</li>
              <li>Proper warm-up and conditioning</li>
            </ul>
          </div>
          
          <div class="program-details">
            <div class="detail-item">
              <strong>Duration:</strong> 12-week structured program
            </div>
            <div class="detail-item">
              <strong>Schedule:</strong> Monday/Wednesday 7:00 PM, Saturday 10:00 AM
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

    <!-- Advanced Program -->
    <div class="program-detail" id="advanced">
      <div class="program-content reverse">
        <div class="program-text">
          <h2>{{ t.programs.advanced.title }}</h2>
          <p class="program-description">{{ t.programs.advanced.description }}</p>
          
          <div class="program-features">
            <h3>Training Focus:</h3>
            <ul>
              <li>Advanced guard systems</li>
              <li>Competition preparation</li>
              <li>Complex submission chains</li>
              <li>High-level positional strategies</li>
              <li>Sparring and live drilling</li>
            </ul>
          </div>
          
          <div class="program-details">
            <div class="detail-item">
              <strong>Prerequisites:</strong> Blue belt or equivalent experience
            </div>
            <div class="detail-item">
              <strong>Schedule:</strong> Tuesday/Thursday 7:30 PM, Sunday 11:00 AM
            </div>
            <div class="detail-item">
              <strong>Focus:</strong> Competition and advanced techniques
            </div>
          </div>
          
          <a href="{{ '/contact/' | relative_url }}" class="btn btn-primary">Join Advanced Training</a>
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
              <li>MMA-applicable techniques</li>
              <li>Conditioning and cardio</li>
            </ul>
          </div>
          
          <div class="program-details">
            <div class="detail-item">
              <strong>Attire:</strong> Rash guard, grappling shorts (no gi required)
            </div>
            <div class="detail-item">
              <strong>Schedule:</strong> Monday/Friday 8:00 PM, Saturday 2:00 PM
            </div>
            <div class="detail-item">
              <strong>Style:</strong> Submission grappling, wrestling
            </div>
          </div>
          
          <a href="{{ '/contact/' | relative_url }}" class="btn btn-primary">Try No-Gi</a>
        </div>
        <div class="program-image">
          <img src="{{ '/assets/images/nogi-class.jpg' | relative_url }}" alt="No-Gi Class">
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
              <li>Improves coordination and fitness</li>
              <li>Teaches discipline and respect</li>
              <li>Anti-bullying techniques</li>
              <li>Fun, age-appropriate games</li>
            </ul>
          </div>
          
          <div class="program-details">
            <div class="detail-item">
              <strong>Ages:</strong> 5-13 years old
            </div>
            <div class="detail-item">
              <strong>Schedule:</strong> Tuesday/Thursday 5:00 PM, Saturday 9:00 AM
            </div>
            <div class="detail-item">
              <strong>Class Size:</strong> Limited to 12 students for personalized attention
            </div>
          </div>
          
          <a href="{{ '/contact/' | relative_url }}" class="btn btn-primary">Enroll Your Child</a>
        </div>
        <div class="program-image">
          <img src="{{ '/assets/images/kids-class.jpg' | relative_url }}" alt="Kids Class">
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
            <h3>Women-Only Benefits:</h3>
            <ul>
              <li>Supportive, non-intimidating environment</li>
              <li>Self-defense focus</li>
              <li>Body-positive training space</li>
              <li>Female instructor leadership</li>
              <li>Flexible scheduling for busy lifestyles</li>
            </ul>
          </div>
          
          <div class="program-details">
            <div class="detail-item">
              <strong>Level:</strong> All levels welcome
            </div>
            <div class="detail-item">
              <strong>Schedule:</strong> Wednesday 6:00 PM, Saturday 11:00 AM
            </div>
            <div class="detail-item">
              <strong>Environment:</strong> Women-only classes with female instructors
            </div>
          </div>
          
          <a href="{{ '/contact/' | relative_url }}" class="btn btn-primary">Join Women's Classes</a>
        </div>
        <div class="program-image">
          <img src="{{ '/assets/images/womens-class.jpg' | relative_url }}" alt="Women's Class">
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
              <li>Competition preparation</li>
              <li>Cross-training with visiting grapplers</li>
              <li>Relaxed training atmosphere</li>
            </ul>
          </div>
          
          <div class="program-details">
            <div class="detail-item">
              <strong>Requirements:</strong> Active member with instructor approval
            </div>
            <div class="detail-item">
              <strong>Schedule:</strong> Sunday 1:00-3:00 PM
            </div>
            <div class="detail-item">
              <strong>Cost:</strong> Included with membership
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